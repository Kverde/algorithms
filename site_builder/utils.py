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


def update_svg(path: str) -> None:
    # Из-за ошибки https://bugzilla.mozilla.org/show_bug.cgi?id=752638
    # необходимо обновение svg созданных в Inkscape
    # для правильной работы в Firefox
    for filename in list_files(path, '.svg'):
        file = open(filename, 'r', encoding='utf-8')
        content = file.read()

        if 'style="fill:context-stroke;' in content:
            content = content.replace(
                'style="fill:context-stroke;', 'style="fill:#000;')
            file.close()
            file = open(filename, 'w', encoding='utf-8')
            file.write(content)
            file.close()
