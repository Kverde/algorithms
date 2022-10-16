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


def field_1(match):
    template_name = match.group(1)
    content = match.group(2)

    if template_name not in TEMPLEATES:
        raise TemplateError(f'Template {template_name} not found')

    return TEMPLEATES[template_name](content)


def prepare(text: str) -> str:
    result = re.sub(r"{{([\w]*)\|(.*?)}}", field_1,
                    text, flags=re.MULTILINE | re.DOTALL)
    return result
