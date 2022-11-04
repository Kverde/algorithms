from dataclasses import dataclass
from typing import Dict, Optional


@dataclass
class BibItem:
    # Bibliographic item
    id: str
    title: str
    type: str
    link: Optional[str] = None


Refs = Dict[str, set]
