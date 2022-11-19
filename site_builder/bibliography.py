import os
from typing import Dict, Optional


# 3-rd party
from ruamel.yaml import YAML
import bibtexparser

# custom
from site_builder.toc import Toc
from site_builder.bibref import BibItem, References
from site_builder.utils import read_file, write_file

BIB_FILENAME = 'bibtex.bib'
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
        self.toc = self.load_toc()

    def load_toc(self):
        toc_folder = os.path.join(self.path, TOC_FOLDER)
        res = {}
        for id, bib in self.items.items():
            filename = os.path.join(toc_folder, id + '.toc')
            toc = Toc(read_file(filename))
            res[id] = toc
        return res

    def load_bib(self, text: str) -> BibliographyItems:
        db = bibtexparser.loads(text)

        bib = {}
        for book in db.entries:
            bib[book['ID']] = BibItem(
                id=book['ID'],
                bibliography=self,
                title=book['title'],
                author=book['author'],
                type=book['ENTRYTYPE'],
                publisher=book.get('publisher'),
                year=book.get('year'),
                link=book.get('link'),
            )

        return bib

    def md(self) -> str:
        content_lines = []
        for book in self.items.values():
            book_filename = book.id + '.md'
            line = f'* [{book.title}. {book.author}]({book_filename})'

            content_lines.append(line)

        content = '\n'.join(content_lines)
        return content

    def check_refs(self, book_id, refs, toc):
        for locator, page_id in refs.items():
            if locator not in toc.items:
                raise Exception(
                    f'Wrong locator "{locator}" in page {page_id}')

    def make_toc_pages(self, refs, pages, dest_path):
        for id, bib in self.items.items():
            toc = self.toc[id]

            self.check_refs(id, refs[id], toc)

            lines = []
            lines.append(f'# {bib.title}')
            lines.append(f'')
            lines.append(f'{bib.get_toc_info()}')
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
                    lines.append(', '.join(sorted(toc_pages)))
                    lines.append('')

                for item in obj.children:
                    make_toc_lines(item, indend + '#')

            for item in toc.children:
                make_toc_lines(item, '##')

            text = '\n'.join(lines)

            dest_filename = os.path.join(dest_path, id + '.md')
            write_file(dest_filename, text)
