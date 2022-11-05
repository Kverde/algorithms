import os

# custom
from site_builder.template import prepare
from site_builder.bibref import BibItem, Reference
from site_builder.bibliography import Bibliography


def read_file(path: str):
    with open(path, 'r', encoding='utf-8') as file:
        return file.read()


BIB_TEXT = '''
BhargavaGrokaemAlgoritmy2018:
  title: Грокаем алгоритмы.
  type: book
LiskovProgrammingWithAbstractDataTypes1974:
  title: Programming with abstract data types. Barbara Liskov. 1974.
  type: article
  link: https://algorithms.way23.ru/20221017223629.html
McConnellCodeComplete2014:
  title: Совершенный код. Стив Макконнелл. Второе издание. Русская редакция. 2014.
  type: book
WirthAlgorithmsAndDataStructures2010:
  title: Алгоритмы и структуры данных.
  type: book
  link: algorithms.org
'''


def fixture(name: str) -> str:
    return read_file(os.path.join('site_builder', 'tests', 'fixtures', name))


def check(check_name: str, bibliography, found_refs):
    assert prepare(fixture(check_name + '.txt'),
                   bibliography=bibliography,
                   found_refs=found_refs
                   ) == fixture(check_name + '_ok.txt')


class TestPrepare():
    def test_tag(self):
        found_refs = set()
        check('templ_tag', Bibliography('', text=BIB_TEXT), found_refs)
        assert len(found_refs) == 0

    def test_link(self):
        found_refs = set()
        check('templ_link', Bibliography('', text=BIB_TEXT), found_refs)
        assert len(found_refs) == 0

    def test_link2(self):
        found_refs = set()
        check('templ_ref', Bibliography('', text=BIB_TEXT), found_refs)
        assert found_refs == set(
            [Reference('LiskovProgrammingWithAbstractDataTypes1974', ''),
             Reference('McConnellCodeComplete2014', 'Chapter 1, page 45.'),
             Reference('WirthAlgorithmsAndDataStructures2010', 'page 22-33.')])
