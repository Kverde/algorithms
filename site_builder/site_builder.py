from __future__ import annotations
import os
from collections import defaultdict

# 3-rd party
from ruamel.yaml import YAML

# custom
from site_builder.utils import list_files, read_file, write_file, fixture
from site_builder.template import prepare
from site_builder.file import File
from site_builder.page import Page
from site_builder.bibref import Refs, Bibliography, load_refs_from_yaml


class WrongSettig(Exception):
    pass


class SiteBuilder:
    def __init__(self, site_path: str) -> None:
        settings_path: str = os.path.join(site_path, 'data', 'settings.yml')
        bib_path: str = os.path.join(site_path, 'data', '_bib.yml')

        self.load_settings(settings_path)
        self.bib: Bibliography = load_refs_from_yaml(read_file(bib_path))
        self.refs: Refs = defaultdict(set)

        self.pages = {}

        for filename in list_files(site_path, '.md'):
            file = File(filename, site_path, read_file(filename))
            page = Page(file)
            self.check_page(page)
            self.pages[page.id] = page

    def load_settings(self, settings_path: str) -> None:
        yaml = YAML(typ="safe")
        settings = yaml.load(read_file(settings_path))

        self.page_type_title = settings['page_type_title']

    def check_page(self, page: Page) -> None:
        page_type = page.metadata['page_type']

        if page_type not in self.page_type_title:
            raise WrongSettig(
                f"Page type '{page_type}' from file {page.rel_filename} not found in settings")

    def build(self, path: str) -> None:
        for page_id, page in self.pages.items():
            dest_filename = os.path.join(path, page.file.rel_filename)
            prepared_page = page.prepare(self.bib, self.refs)
            write_file(dest_filename, prepared_page)

        self.build_index(path)

    def page_to_link(self, page_id: str):
        page: Page = self.pages[page_id]
        return f'[{page.title}]({page.link})'

    def build_index(self, path: str) -> None:
        index_page = read_file(fixture('readme.md'))
        links = defaultdict(list)

        for page_id, page in self.pages.items():
            title = page.title
            url = page.link
            page_type = page.metadata['page_type']

            link = f'* [{title}]({url})'
            links[page_type].append(link)

        content_lines = []
        for page_type in links:
            page_type_title = self.page_type_title[page_type]
            content_lines.append(f'## {page_type_title}')
            content_lines.append('')
            for link in links[page_type]:
                content_lines.append(link)
            content_lines.append('')

        content = '\n'.join(content_lines)
        stats = f'Всего страниц: {len(self.pages)}'

        index_page = index_page.replace('[[content]]', content)
        index_page = index_page.replace('[[stats]]', stats)
        write_file(os.path.join(path, 'readme.md'), index_page)

        books_page = read_file(fixture('books.md'))
        content_lines = []
        for book_id, book in self.bib.items():
            if book.link:
                line = f'## {book.title}'
            else:
                line = f'## {book.title}'

            content_lines.append(line)
            content_lines.append('')

            refs = ', '.join(map(self.page_to_link, self.refs[book_id]))
            content_lines.append(refs)
            content_lines.append('')

        content = '\n'.join(content_lines)
        books_page = books_page.replace('[[content]]', content)

        write_file(os.path.join(path, 'books.md'), books_page)
