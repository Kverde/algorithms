from dataclasses import dataclass
from typing import Dict, Optional

# 3-rd party
from ruamel.yaml import YAML


@dataclass
class BibItem:
    # Bibliographic item
    id: str
    title: str
    type: str
    link: Optional[str] = None


Bibliography = Dict[str, BibItem]
RefCollection = Dict[str, set]


def load_refs_from_yaml(text: str) -> Bibliography:
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
