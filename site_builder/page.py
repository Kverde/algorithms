from typing import Optional, Dict
import os
import re
import urllib.parse

# 3-rd party
import frontmatter

# custom
from site_builder.template import prepare
from site_builder.file import File
from site_builder.bibref import References, Reference
from site_builder.bibliography import Bibliography


class WrongPageFile(Exception):
    pass


GITHUB_LINK = '''
<p v-pre style="text-align: right">
  <a href="https://github.com/Kverde/algorithms/blob/main/source/{0}" target="_blank">
  Эта заметка на GitHub
  </a>
</p>
'''

DISCOURSE_LINK = '''
<p v-pre style="text-align: right">
  <a href="https://discourse.comtext.space/new-topic?title=[title]&body=[body]&category=[category]" target="_blank">
  Обсудить на форуме
  </a>
</p>
'''


class Page:
    def __init__(self, file: File) -> None:
        self.file = file
        self.id = self.file.filename
        self.link_to_this = set()

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

    def get_image_links(self):
        return re.findall(r'!\[\]\(([^)]*)\)', self.content)

    def prepare_links(self, bibliography: Bibliography, refs: References):
        found_refs = set()

        prepared_content, links = prepare(
            self.content, bibliography, found_refs)

        return links

    def prepare(self, bibliography: Bibliography, refs: References) -> str:
        found_refs = set()

        prepared_content, links = prepare(
            self.content, bibliography, found_refs)

        for reference in found_refs:
            if reference.id not in refs:
                refs[reference.id] = {}

            if reference.locator not in refs[reference.id]:
                refs[reference.id][reference.locator] = set()

            refs[reference.id][reference.locator].add(self.id)

        links = []
        for page in sorted(self.link_to_this, key=lambda p: p.title):
            links.append('* ' + page.md_link())

        prepared_content += '\n\n'
        prepared_content += '## Ссылки на эту заметку\n\n'
        prepared_content += '\n'.join(links)

        prepared_content += '\n\n'
        prepared_content += GITHUB_LINK.format(self.id)

        discourse_link = DISCOURSE_LINK
        discourse_link = discourse_link.replace('[body]', '')
        discourse_link = discourse_link.replace('[category]', 'algorithm')
        discourse_link = discourse_link.replace(
            '[title]', urllib.parse.quote(self.title))

        prepared_content += '\n\n'
        prepared_content += discourse_link

        return prepared_content, links

    def md_link(self):
        return f'[{self.title}]({self.link})'


Pages = Dict[str, Page]
