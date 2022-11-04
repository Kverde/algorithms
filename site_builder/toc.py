from __future__ import annotations
from typing import List, Dict


class TocItem():

    def __init__(self, id: str, title: str) -> None:
        self.id = id
        self.title = title
        self.children: List[TocItem] = []

    def __repr__(self) -> str:
        return f'{self.id}'


def count_first_space(text: str):
    return len(text) - len(text.lstrip())


class Toc():

    def __init__(self, text: str) -> None:
        self.children: List[TocItem] = []
        self.items: Dict[str, TocItem] = {}

        self.load(text)

    def load(self, text: str) -> None:
        level = 0
        stack = [self]
        last = self
        for line in text.split('\n'):
            if len(line.strip()) == 0:
                continue

            sep_index = line.find(' ')
            if sep_index == -1:
                continue

            id = line[:sep_index]
            title = line[sep_index + 1:]

            if len(title.strip()) == 0:
                continue

            new_toc_item = TocItem(id, title.lstrip())

            self.items[id] = new_toc_item
            new_level = count_first_space(title) // 2

            if new_level == level:
                stack[-1].children.append(new_toc_item)
                last = new_toc_item
            elif new_level < level:
                d = level - new_level
                for _ in range(d):
                    stack.pop()
                stack[-1].children.append(new_toc_item)
                last = new_toc_item
                level = new_level
            else:
                stack.append(last)
                stack[-1].children.append(new_toc_item)
                last = new_toc_item
                level = new_level
