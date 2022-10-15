import re


class TemplateError(Exception):
    pass


def center(text: str) -> str:
    text = text.replace('\n', '<br/>\n')
    return f'<p class="alg-center">{text}</p>'


def field_1(match):
    template_name = match.group(1)
    content = match.group(2)

    match template_name:
        case 'center':
            return center(content)
        case name:
            raise TemplateError(f'Template {name} not found')


def prepare(text: str) -> str:
    result = re.sub(r"{{([\w]*)\|(.*?)}}", field_1,
                    text, flags=re.MULTILINE | re.DOTALL)
    return result
