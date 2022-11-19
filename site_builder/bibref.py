from dataclasses import dataclass
from typing import Dict, Optional, Set, TYPE_CHECKING

# custom

if TYPE_CHECKING:
    from site_builder.bibliography import Bibliography


class WrongLocator(Exception):
    pass


@dataclass
class BibItem:
    # Bibliographic item
    id: str
    bibliography: "Bibliography"
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

        info = f'[{info}]({self.id}.md)'

        if locator:
            toc = self.bibliography.toc[self.id]
            if locator not in toc.items:
                raise WrongLocator(f'Wrong locator {locator}')

            info = [info, toc.items[locator].get_full_title()]
            info = filter(bool, info)
            info = '. '.join(info)

        return info

    def get_toc_info(self):
        info = [self.title, self.author, self.publisher, self.year]
        info = filter(bool, info)
        info = '. '.join(info)

        if self.link:
            info = f'[{info}]({self.link})'

        return info


@dataclass(unsafe_hash=True)
class Reference:
    id: str
    locator: str


ReferenceSet = Set[Reference]

References = Dict[str, Dict[str, str]]
