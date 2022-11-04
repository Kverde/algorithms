from dataclasses import dataclass
from typing import Dict, Optional, Set


@dataclass
class BibItem:
    # Bibliographic item
    id: str
    title: str
    type: str
    link: Optional[str] = None


@dataclass(unsafe_hash=True)
class Reference:
    id: str
    locator: str


ReferenceSet = Set[Reference]

References = Dict[str, Dict[str, str]]
