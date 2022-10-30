import os

# custom
from site_builder.template import prepare
from site_builder.bibref import BibItem


def read_file(path: str):
    with open(path, 'r', encoding='utf-8') as file:
        return file.read()


BIBREF = {
    'LiskovProgrammingWithAbstractDataTypes1974': BibItem(
        id='LiskovProgrammingWithAbstractDataTypes1974',
        title='Programming with abstract data types. Barbara Liskov. 1974.',
        type='article',
        link='https://algorithms.way23.ru/20221017223629.html'
    ),
    'McConnellCodeComplete2014': BibItem(
        id='McConnellCodeComplete2014',
        title='Совершенный код. Стив Макконнелл. Второе издание. Русская редакция. 2014.',
        type='book'
    ),
    'WirthAlgorithmsAndDataStructures2010': BibItem(
        id='McConnellCodeComplete2014',
        title='Алгоритмы и структуры данных.',
        type='book',
        link='algorithms.org'
    ),
    'BhargavaGrokaemAlgoritmy2018': BibItem(
        id='McConnellCodeComplete2014',
        title='Грокаем алгоритмы.',
        type='book'
    )
}


def fixture(name: str) -> str:
    return read_file(os.path.join('site_builder', 'tests', 'fixtures', name))


def check(check_name: str, refs, found_refs):
    assert prepare(fixture(check_name + '.txt'),
                   refs=refs,
                   found_refs=found_refs
                   ) == fixture(check_name + '_ok.txt')


class TestPrepare():
    def test_tag(self):
        found_refs = set()
        check('templ_tag', BIBREF, found_refs)
        assert len(found_refs) == 0

    def test_link(self):
        found_refs = set()
        check('templ_link', BIBREF, found_refs)
        assert len(found_refs) == 0

    def test_link(self):
        found_refs = set()
        check('templ_ref', BIBREF, found_refs)
        assert found_refs == set(
            ['LiskovProgrammingWithAbstractDataTypes1974',
             'McConnellCodeComplete2014',
             'WirthAlgorithmsAndDataStructures2010'])
