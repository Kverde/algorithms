import re
from typing import List, Dict, Optional
from functools import partial

# custom

from site_builder.bibref import BibRef, RefDict, RefCollection


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
    return re.sub(r'\[\[(\d+)\]\]', r'\1.md', text)


def replace_cite(match, refs: RefDict, found_refs: set):
    id_ref = match.group(1)
    locator: str = match.group(2).strip()

    if id_ref not in refs:
        raise ReferenceNotFound(f'Reference id "{id_ref}" not found')

    found_refs.add(id_ref)

    ref = refs[id_ref]
    if ref.link:
        title = f'[{ref.title}]({ref.link})'
    else:
        title = ref.title

    if locator:
        return f'{title} {locator.strip()}'
    else:
        return title


def replace_ref(text: str, refs: RefDict, found_refs: set):
    return re.sub(r"\[@(\w+) ?([^\]]*)]", partial(replace_cite,
                                                  refs=refs,
                                                  found_refs=found_refs), text)


def prepare(text: str, refs: RefDict, found_refs: set) -> str:
    result = re.sub(r"{{([\w+]*)\|(.*?)}}", process_template,
                    text, flags=re.MULTILINE | re.DOTALL)

    result = replace_links(result)

    result = replace_ref(result, refs, found_refs=found_refs)

    return result
