import re
from typing import List, Dict, Optional
from functools import partial

# custom

from site_builder.bibref import ReferenceSet, Reference


class TemplateError(Exception):
    pass


class ReferenceNotFound(Exception):
    pass


def center(text: str) -> str:
    text = text.replace('\n', '<br/>\n')
    return f'<p class="alg-center">{text}</p>'


def em(text: str) -> str:
    return f'<em>{text}</em>'


TEMPLEATES = {
    'center': center,
    'em': em,
}


def template_1(template_name: str, content: str):
    if template_name not in TEMPLEATES:
        raise TemplateError(f'Template {template_name} not found')

    return TEMPLEATES[template_name](content)


def process_template(match):
    combiend_template = match.group(1)
    content = match.group(2)

    for template_name in reversed(combiend_template.split('+')):
        content = template_1(template_name, content)

    return content


def replace_links(text: str) -> str:
    links = set()

    def replace(match):
        file_id = match.group(1) + '.md'
        links.add(file_id)
        return file_id

    return re.sub(r'\[\[(\d+)\]\]', replace, text), links


def replace_cite(match, bibliography, found_refs: ReferenceSet):
    id_ref = match.group(1)
    locator: str = match.group(2).strip()

    if id_ref not in bibliography.items:
        print(bibliography.items)
        raise ReferenceNotFound(f'Reference id "{id_ref}" not found')

    found_refs.add(Reference(id_ref, locator))

    ref = bibliography.items[id_ref]
    return ref.get_info(locator)


def replace_ref(text: str, bibliography, found_refs: ReferenceSet):
    return re.sub(r"\[@(\w+) ?([^\]]*)]", partial(replace_cite,
                                                  bibliography=bibliography,
                                                  found_refs=found_refs), text)


def prepare(text: str, bibliography, found_refs: ReferenceSet) -> str:
    result = re.sub(r"{{([\w+]*)\|(.*?)}}", process_template,
                    text, flags=re.MULTILINE | re.DOTALL)

    result, links = replace_links(result)

    result = replace_ref(result, bibliography, found_refs=found_refs)

    return result, links
