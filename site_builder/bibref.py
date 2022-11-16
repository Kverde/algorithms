from dataclasses import dataclass
from typing import Dict, Optional, Set


@dataclass
class BibItem:
    # Bibliographic item
    id: str
    title: str
    type: str
    author: str
    publisher: Optional[str] = None
    year: Optional[str] = None
    link: Optional[str] = None

    def get_info(self, locator):
        info = [self.title, self.author, self.publisher, self.year]
        info = filter(bool, info)
        info = '. '.join(info)

        if self.link:
            info = f'[{info}]({self.link})'

        info = [info, locator]
        info = filter(bool, info)
        info = '. '.join(info)

        return info


@dataclass(unsafe_hash=True)
class Reference:
    id: str
    locator: str


ReferenceSet = Set[Reference]

References = Dict[str, Dict[str, str]]
