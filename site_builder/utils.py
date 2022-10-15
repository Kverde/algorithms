import os
from typing import Iterator


def list_files(path: str) -> Iterator[str]:
    """Возвращает все файлы по заданному пути path
       включая поддиректории
    """
    for (root, _, files) in os.walk(path):
        for filename in files:
            yield os.path.join(root, filename)


def read_file(path: str) -> str:
    with open(path) as file:
        return file.read()


def write_file(path: str, content: str) -> None:
    folder, _ = os.path.split(path)
    os.makedirs(folder, exist_ok=True)

    with open(path, 'w') as file:
        return file.write(content)
