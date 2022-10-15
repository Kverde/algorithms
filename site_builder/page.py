from __future__ import annotations
import os

from site_builder.utils import list_files, read_file, write_file


class SiteBuilder:
    def __init__(self, path) -> None:
        self.pages = [Page.from_path(file, path) for file in list_files(path)]

    def build(self, path):
        for page in self.pages:
            page.save(path)

    def build_index(self, path):
        pass
        # self.content = read_file(path)


class Page:
    def __init__(self, filename: str, folder: str, base_path: str) -> None:
        self.base_path = base_path
        self.filename = filename
        self.folder = folder

        self.full_filename = os.path.join(
            self.base_path, self.folder, self.filename)

        self.rel_filename = os.path.join(self.folder, self.filename)

    def read_page(self):
        self.content = read_file(self.full_filename)

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
