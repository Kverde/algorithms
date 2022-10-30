from dataclasses import dataclass
from typing import Dict, Optional

# Bibliographic reference


@dataclass
class BibRef:
    id: str
    title: str
    type: str
    link: Optional[str] = None


RefDict = Dict[str, BibRef]
