import re
from typing import List, Dict, Optional
from functools import partial

# custom

from site_builder.bibref import BibRef


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


def replace_cite(match, ref: Dict[str, BibRef]):
    id_ref = match.group(1)
    locator: str = match.group(2).strip()

    if id_ref not in ref:
        raise ReferenceNotFound(f'Reference id "{id_ref}" not found')

    if locator:
        return f'{ref[id_ref].title} {locator.strip()}'
    else:
        return f'{ref[id_ref].title}'


def replace_ref(text: str, ref: Dict[str, BibRef]):
    return re.sub(r"\[@(\w+) ?([^\]]*)]", partial(replace_cite, ref=ref), text)


def prepare(text: str, ref: Optional[Dict[str, BibRef]]) -> str:
    result = re.sub(r"{{([\w+]*)\|(.*?)}}", process_template,
                    text, flags=re.MULTILINE | re.DOTALL)

    result = replace_links(result)

    if ref is not None:
        result = replace_ref(result, ref)

    return result
