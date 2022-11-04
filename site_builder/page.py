from typing import Optional, Dict
import os
import re

# 3-rd party
import frontmatter

# custom
from site_builder.template import prepare
from site_builder.file import File
from site_builder.bibref import Refs
from site_builder.bibliography import Bibliography


class WrongPageFile(Exception):
    pass


class Page:
    def __init__(self, file: File) -> None:
        self.file = file
        self.id = self.file.filename

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

    def prepare(self, bibliography: Bibliography, refs: Refs) -> str:
        found_refs = set()

        prepared_content = prepare(self.content, bibliography, found_refs)

        for ref in found_refs:
            refs[ref].add(self.id)

        return prepared_content

    def md_link(self):
        return f'[{self.title}]({self.link})'


Pages = Dict[str, Page]
