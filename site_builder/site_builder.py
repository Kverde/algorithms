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
from site_builder.bibref import BibRef, RefDict


class WrongSettig(Exception):
    pass


class SiteBuilder:
    def __init__(self, site_path: str) -> None:
        settings_path: str = os.path.join(site_path, 'data', 'settings.yml')
        bib_path: str = os.path.join(site_path, 'data', '_bib.yml')

        self.load_settings(settings_path)
        self.load_bib(bib_path)

        self.pages = []

        for filename in list_files(site_path, '.md'):
            file = File(filename, site_path, read_file(filename))
            page = Page(file)
            self.check_page(page)
            self.pages.append(page)

    def load_settings(self, settings_path: str) -> None:
        yaml = YAML(typ="safe")
        settings = yaml.load(read_file(settings_path))

        self.page_type_title = settings['page_type_title']

    def load_bib(self, bib_path: str) -> None:
        yaml = YAML(typ="safe")
        bib_source = yaml.load(read_file(bib_path))
        bib = {}
        for id, item in bib_source.items():
            bib[id] = BibRef(
                id=id,
                title=item['title'],
                type=item['type'],
                link=item.get('link')
            )

        self.bib = bib

    def check_page(self, page: Page) -> None:
        page_type = page.metadata['page_type']

        if page_type not in self.page_type_title:
            raise WrongSettig(
                f"Page type '{page_type}' from file {page.rel_filename} not found in settings")

    def build(self, path: str) -> None:
        for page in self.pages:
            dest_filename = os.path.join(path, page.file.rel_filename)
            write_file(dest_filename, page.prepare(self.bib))

        self.build_index(path)

    def build_index(self, path: str) -> None:
        index_page = read_file(fixture('readme.md'))
        links = defaultdict(list)

        for page in self.pages:
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
        index_page = index_page.replace('[[content]]', content)
        write_file(os.path.join(path, 'readme.md'), index_page)
