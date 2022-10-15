import os

# custom
from site_builder.template import prepare


def read_file(path: str):
    with open(path, 'r', encoding='utf-8') as file:
        return file.read()


def fixture(name: str) -> str:
    return read_file(os.path.join('site_builder', 'tests', 'fixtures', name))


def check(check_name: str):
    assert prepare(fixture(check_name + '_source.txt')
                   ) == fixture(check_name + '_correct.txt')


class TestPrepare():
    def test_frontmatter(self):
        check('template_frontmatter')

    def test_tag(self):
        check('template_tags')
