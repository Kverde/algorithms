import shutil
import os
from typing import Iterator


def list_files(path: str, ext: str = '') -> Iterator[str]:
    """Возвращает все файлы по заданному пути path
       включая поддиректории
    """
    for (root, _, files) in os.walk(path):
        for filename in files:
            if filename.endswith(ext):
                yield os.path.join(root, filename)


def read_file(path: str) -> str:
    with open(path, 'r', encoding='utf-8') as file:
        return file.read()


def write_file(path: str, content: str) -> None:
    folder, _ = os.path.split(path)
    os.makedirs(folder, exist_ok=True)

    with open(path, 'w', encoding='utf-8') as file:
        return file.write(content)


def fixture(name: str) -> str:
    return os.path.join('site_builder', 'fixtures', name)


def copy_dir(source: str, dest: str) -> None:
    shutil.rmtree(dest)
    shutil.copytree(source, dest, dirs_exist_ok=True)
