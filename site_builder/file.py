import os


class File:
    def __init__(self, path: str, base_path: str, content: str) -> None:
        root, filename = os.path.split(path)
        folder = root[len(base_path) + 1:]

        self.base_path = base_path
        self.folder = folder
        self.filename = filename

        self.full_filename = path
        self.rel_filename = os.path.join(self.folder, self.filename)

        self.content = content

    def __str__(self) -> str:
        return self.full_filename
