from dataclasses import dataclass
from typing import Dict

# Bibliographic reference


@dataclass
class BibRef:
    id: str
    title: str
    type: str


RefDict = Dict[str, BibRef]
