import os

# custom
from site_builder.template import prepare
from site_builder.bibref import BibRef


def read_file(path: str):
    with open(path, 'r', encoding='utf-8') as file:
        return file.read()


BIBREF = {
    'LiskovProgrammingWithAbstractDataTypes1974': BibRef(
        'LiskovProgrammingWithAbstractDataTypes1974',
        'Programming with abstract data types. Barbara Liskov. 1974.',
        'article'
    ),
    'McConnellCodeComplete2014': BibRef(
        'McConnellCodeComplete2014',
        'Совершенный код. Стив Макконнелл. Второе издание. Русская редакция. 2014.',
        'book'
    )
}


def fixture(name: str) -> str:
    return read_file(os.path.join('site_builder', 'tests', 'fixtures', name))


def check(check_name: str, ref=None):
    assert prepare(fixture(check_name + '.txt'),
                   ref) == fixture(check_name + '_ok.txt')


class TestPrepare():
    def test_tag(self):
        check('templ_tag')

    def test_link(self):
        check('templ_link')

    def test_link(self):
        check('templ_ref', BIBREF)
