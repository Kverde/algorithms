from __future__ import annotations
import os

# 3-rd party
import frontmatter

# custom
from site_builder.utils import list_files, read_file, write_file, fixture


class SiteBuilder:
    def __init__(self, path) -> None:
        self.pages = [Page.from_path(file, path) for file in list_files(path)]

    def build(self, path):
        for page in self.pages:
            page.save(path)

        self.build_index(path)

    def build_index(self, path):
        index_page = read_file(fixture('readme.md'))
        links = []

        for page in self.pages:
            title = page.metadata['title']
            url = page.link
            link = f'* [{title}]({url})'
            links.append(link)

        content = '\n'.join(links)
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
