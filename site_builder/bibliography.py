import os
from typing import Dict, Optional


# 3-rd party
from ruamel.yaml import YAML

# custom
from site_builder.toc import Toc
from site_builder.bibref import BibItem
from site_builder.utils import read_file

BIB_FILENAME = '_bib.yml'
TOC_FOLDER = 'toc'


BibliographyItems = Dict[str, BibItem]


class Bibliography:
    def __init__(self, path: str) -> None:
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
