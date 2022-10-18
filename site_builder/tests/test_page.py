import os

# custom
from site_builder.page import Page
from site_builder.file import File

PAGE_CONTENT = """---
page_type: original
---

# Hello!

test content
"""


class TestPage():
    def test_page(self):
        path = os.path.join('.', 'base', 'folder', 'file.md')
        base_path = os.path.join('.', 'base')

        file = File(path, base_path, PAGE_CONTENT)
        page = Page(file)

        assert page.file == file
        assert page.content == file.content
        assert page.link == 'folder/file.md'
        assert page.title == 'Hello!'
