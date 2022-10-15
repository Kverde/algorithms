---
title: "Стек (Stack)"
date: "2022-10-15"
page_type: abstract_data_type
---

# {{ $frontmatter.title }}

[[toc]]

Стек — абстрактный тип данных со следующими операциями:

- Основные

  - `push(a)` — поместить `a` на стек.

  - `pop()` — вернуть последние элемент из стека и удалить его из стека.

- Дополнительные

  - `top()` — вернуть последний элемент из стека без удаления.

  - `len()`— вернуть количество элементов в стеке.

  - `isEmpty()` — возвращает `True` если стек пустой.

Стек работает по принципу «последний зашел — первый вышел». Операция `pop` вернёт сначала последний добавленный через `push` элемент, затем предпоследний и так до того как стек опустеет. Этот процесс похож на обычную стопку бумаги: `push` — кладем лист на стопку, `pop` — берём верхний лист из стопки.

![](images\algorithms\stack01.svg)

Когда стек пустой операции `pop` и `push` могут либо возвращать какое-то особое значение (например, `None` в Python), либо генерировать исключение. Обычно, [лучше явно сообщать о проблеме или неодназначностях](explicitly-error.md) и генерировать исключение.

## Реализация стека

Реализовать стек можно следующими способами: на основе [массива](array.md), [связанного списка](linked-list.md).

Так как для стека важна скорость добавления и удаления элементов, а произвольный доступ к элементам не требуется, то реализация на основе связанного списка очевидно лучше и позволяет получить сложность всех операций со стеком равную $\mathcal{O}(1)$.

## Пример на Python

В Python в качестве стека можно использовать [список](https://docs.python.org/3/library/stdtypes.html#lists). В качестве операции `push` подойдет метод `append`, а для операции `pop` метод с таким же названием.

```python
class EmptyStackError(Exception):
    pass


class StackList():

    def __init__(self):
        self.stack = []

    def push(self, item):
        self.stack.append(item)

    def pop(self):
        try:
            return self.stack.pop()
        except IndexError:
            raise EmptyStackError("pop from empty stack")

    def top(self):
        try:
            return self.stack[-1]
        except IndexError:
            raise EmptyStackError("top from empty stack")

    def len(self):
        return len(self.stack)
```

Список можно заменить на [дек](https://docs.python.org/3/library/collections.html#collections.deque), остальной код не изменится, так как интерфейс списка и дека в части используемых методов совпадает.

```python
from collections import deque

class StackDeque():

    def __init__(self):
        self.stack = deque()
```

Отличия в двух реализация в том, что первая — это реализация на основе [массива](array.md), а вторая на основе [связанного списка](linked-list.md).

## Ссылки

- [@bhargavaGrokaemAlgoritmy2018 Глава 3. Рекурсия]
