import os

# custom
from site_builder.file import File


class TestFile():
    def test_file(self):
        path = os.path.join('.', 'base', 'folder', 'file.md')
        base_path = os.path.join('.', 'base')
        content = '# Hello!'

        file = File(path, base_path, content)

        assert file.base_path == base_path
        assert file.folder == 'folder'
        assert file.filename == 'file.md'

        assert file.full_filename == path
        assert file.rel_filename == os.path.join('folder', 'file.md')

        assert file.content == content
        assert str(file) == path

    def test_file_without_folder(self):
        path = os.path.join('.', 'base', 'file.md')
        base_path = os.path.join('.', 'base')
        content = '# Hello!'

        file = File(path, base_path, content)

        assert file.base_path == base_path
        assert file.folder == ''
        assert file.filename == 'file.md'

        assert file.full_filename == path
        assert file.rel_filename == os.path.join('file.md')

        assert file.content == content
        assert str(file) == path
