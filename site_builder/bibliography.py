import os
from typing import Dict, Optional


# 3-rd party
from ruamel.yaml import YAML

# custom
from site_builder.toc import Toc
from site_builder.bibref import BibItem, Refs
from site_builder.utils import read_file, write_file

BIB_FILENAME = '_bib.yml'
TOC_FOLDER = 'toc'


BibliographyItems = Dict[str, BibItem]


class Bibliography:
    def __init__(self, path: str) -> None:
        self.path = path
        bib_filename = os.path.join(path, BIB_FILENAME)
        self.items: BibliographyItems = self.load_bib(read_file(bib_filename))

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

    def md(self, refs: Refs, pages) -> str:
        content_lines = []
        for book_id, book in self.items.items():
            if book.link:
                line = f'## {book.title}'
            else:
                line = f'## {book.title}'

            content_lines.append(line)
            content_lines.append('')

            temp = map(pages.get, refs[book_id])
            line = ', '.join(map(lambda p: p.md_link(), temp))

            content_lines.append(line)
            content_lines.append('')

        content = '\n'.join(content_lines)
        return content

    def make_toc_pages(self, dest_path):
        toc_folder = os.path.join(self.path, TOC_FOLDER)
        for id, bib in self.items.items():
            filename = os.path.join(toc_folder, id + '.toc')
            toc = Toc(read_file(filename))

            lines = []
            lines.append(f'# {bib.title}')
            lines.append(f'')

            def make_toc_lines(obj, indend: str):
                lines.append(indend + ' ' + obj.title)
                lines.append('')
                for item in obj.children:
                    make_toc_lines(item, indend + '#')

            for item in toc.children:
                make_toc_lines(item, '##')

            text = '\n'.join(lines)

            dest_filename = os.path.join(dest_path, id + '.md')
            write_file(dest_filename, text)
