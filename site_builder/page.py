from typing import Optional
import os
import re

# 3-rd party
import frontmatter

# custom
from site_builder.template import prepare
from site_builder.file import File
from site_builder.bibref import Bibliography


class WrongPageFile(Exception):
    pass


class Page:
    def __init__(self, file: File) -> None:
        self.file = file

        self.link = '/'.join(self.file.rel_filename.split(os.sep))

        self.read_page()

    def read_page(self):
        self.content = self.file.content
        self.metadata, _ = frontmatter.parse(self.content)
        self.title = re.search(r'^# (.+)$', self.content,
                               re.MULTILINE).group(1)

        if len(self.metadata) == 0:
            raise WrongPageFile(
                f"Metadata is empty in file {self.file.rel_filename}")

    def __str__(self) -> str:
        return self.link

    def prepare(self, bibliography: Bibliography) -> str:
        found_refs = set()
        return prepare(self.content, bibliography, found_refs)
