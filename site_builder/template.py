import re


class TemplateError(Exception):
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


def prepare(text: str) -> str:
    result = re.sub(r"{{([\w+]*)\|(.*?)}}", process_template,
                    text, flags=re.MULTILINE | re.DOTALL)
    return result
