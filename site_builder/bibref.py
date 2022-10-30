from dataclasses import dataclass
from typing import Dict, Optional

# 3-rd party
from ruamel.yaml import YAML


@dataclass
class BibRef:
    # Bibliographic reference
    id: str
    title: str
    type: str
    link: Optional[str] = None


RefDict = Dict[str, BibRef]


def load_refs_from_yaml(text: str) -> RefDict:
    yaml = YAML(typ="safe")
    bib_source = yaml.load(text)
    bib = {}
    for id, item in bib_source.items():
        bib[id] = BibRef(
            id=id,
            title=item['title'],
            type=item['type'],
            link=item.get('link')
        )

    return bib
