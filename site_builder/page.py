from __future__ import annotations
import os
from collections import defaultdict

# 3-rd party
import frontmatter
from ruamel.yaml import YAML

# custom
from site_builder.utils import list_files, read_file, write_file, fixture


class WrongPageFile(Exception):
    pass


class WrongSettig(Exception):
    pass


class SiteBuilder:
    def __init__(self, site_path: str, settings_path: str) -> None:
        self.load_settings(settings_path)

        self.pages = []

        for file in list_files(site_path, '.md'):
            page = Page.from_path(file, site_path)
            self.check_page(page)
            self.pages.append(page)

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
        for page in self.pages:
            page.save(path)

        self.build_index(path)

    def build_index(self, path: str) -> None:
        index_page = read_file(fixture('readme.md'))
        links = defaultdict(list)

        for page in self.pages:
            title = page.metadata['title']
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


class Page:
    def __init__(self, filename: str, folder: str, base_path: str) -> None:
        self.base_path = base_path
        self.filename = filename
        self.folder = folder

        self.full_filename = os.path.join(
            self.base_path, self.folder, self.filename)

        self.rel_filename = os.path.join(self.folder, self.filename)

        self.link = '/'.join(self.rel_filename.split(os.sep))

        self.read_page()

    def read_page(self):
        self.content = read_file(self.full_filename)
        self.metadata, _ = frontmatter.parse(self.content)

        if len(self.metadata) == 0:
            raise WrongPageFile(
                f"Metadata is empty in file {self.rel_filename}")

    def __str__(self) -> str:
        return self.full_filename

    def save(self, path) -> None:
        dest_folder = os.path.join(path, self.folder)
        dest_filename = os.path.join(dest_folder, self.filename)

        write_file(dest_filename, self.content)

    @staticmethod
    def from_path(path: str, base_path: str) -> Page:
        root, filename = os.path.split(path)
        folder = root[len(base_path) + 1:]
        return Page(filename, folder, base_path)
