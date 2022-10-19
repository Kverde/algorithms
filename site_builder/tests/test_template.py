import os

# custom
from site_builder.template import prepare


def read_file(path: str):
    with open(path, 'r', encoding='utf-8') as file:
        return file.read()


def fixture(name: str) -> str:
    return read_file(os.path.join('site_builder', 'tests', 'fixtures', name))


def check(check_name: str):
    assert prepare(fixture(check_name + '.txt')
                   ) == fixture(check_name + '_ok.txt')


class TestPrepare():
    def test_tag(self):
        check('templ_tag')

    def test_link(self):
        check('templ_link')
