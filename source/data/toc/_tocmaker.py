import os

ROOT_PATH = os.path.dirname(os.path.abspath(__file__))

FILENAME = os.path.join(
    ROOT_PATH, 'BhargavaGrokaemAlgoritmy2018.toc')

with open(FILENAME, encoding='utf-8') as file:
    text = file.read()

lines = text.split('\n')

for i, line in enumerate(lines):
    id = f'{i + 1:0>3}'
    if not line.startswith(id):
        lines[i] = id + ' ' + line

text = '\n'.join(lines)
file = open(FILENAME, 'w', encoding='utf-8')
file.write(text)
