import os

# custom
from site_builder.template import prepare
from site_builder.bibref import BibRef


def read_file(path: str):
    with open(path, 'r', encoding='utf-8') as file:
        return file.read()


BIBREF = {
    'LiskovProgrammingWithAbstractDataTypes1974': BibRef(
        id='LiskovProgrammingWithAbstractDataTypes1974',
        title='Programming with abstract data types. Barbara Liskov. 1974.',
        type='article',
        link='https://algorithms.way23.ru/20221017223629.html'
    ),
    'McConnellCodeComplete2014': BibRef(
        id='McConnellCodeComplete2014',
        title='Совершенный код. Стив Макконнелл. Второе издание. Русская редакция. 2014.',
        type='book'
    ),
    'WirthAlgorithmsAndDataStructures2010': BibRef(
        id='McConnellCodeComplete2014',
        title='Алгоритмы и структуры данных.',
        type='book',
        link='algorithms.org'
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
