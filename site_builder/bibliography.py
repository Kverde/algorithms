import os
from typing import Dict, Optional


# 3-rd party
from ruamel.yaml import YAML

# custom
from site_builder.toc import Toc
from site_builder.bibref import BibItem, References
from site_builder.utils import read_file, write_file

BIB_FILENAME = '_bib.yml'
TOC_FOLDER = 'toc'


BibliographyItems = Dict[str, BibItem]


class Bibliography:
    def __init__(self, path: str, text: str = None) -> None:
        self.path = path
        bib_filename = os.path.join(path, BIB_FILENAME)
        if text:
            self.items: BibliographyItems = self.load_bib(text)
        else:
            self.items: BibliographyItems = self.load_bib(
                read_file(bib_filename))

    def load_bib(self, text: str) -> BibliographyItems:
        yaml = YAML(typ="safe")
        bib_source = yaml.load(text)
        bib = {}
        for id, item in bib_source.items():
            bib[id] = BibItem(
                id=id,
                title=item['title'],
                type=item['type'],
                link=item.get('link')
            )

        return bib

    def md(self) -> str:
        content_lines = []
        for book in self.items.values():
            book_filename = book.id + '.md'
            line = f'* [{book.title}]({book_filename})'

            content_lines.append(line)

        content = '\n'.join(content_lines)
        return content

    def check_refs(self, book_id, refs, toc):
        for locator, page_id in refs.items():
            if locator not in toc.items:
                raise Exception(
                    f'Wrong locator "{locator}" in page {page_id}')

    def make_toc_pages(self, refs, pages, dest_path):

        toc_folder = os.path.join(self.path, TOC_FOLDER)
        for id, bib in self.items.items():
            filename = os.path.join(toc_folder, id + '.toc')
            toc = Toc(read_file(filename))

            self.check_refs(id, refs[id], toc)

            lines = []
            lines.append(f'# {bib.title}')
            lines.append(f'')
            lines.append(f'[[toc]]')
            lines.append(f'')

            book_refs = refs[id]

            def make_toc_lines(obj, indend: str):
                lines.append(indend + ' ' + obj.title)
                lines.append('')

                toc_pages = []
                if obj.id in book_refs:
                    for book_id in book_refs[obj.id]:
                        p = pages[book_id]
                        toc_pages.append(p.md_link())
                if toc_pages:
                    lines.append(', '.join(toc_pages))
                    lines.append('')

                for item in obj.children:
                    make_toc_lines(item, indend + '#')

            for item in toc.children:
                make_toc_lines(item, '##')

            text = '\n'.join(lines)

            dest_filename = os.path.join(dest_path, id + '.md')
            write_file(dest_filename, text)
