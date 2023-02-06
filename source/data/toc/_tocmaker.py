import os
import re

ROOT_PATH = os.path.dirname(os.path.abspath(__file__))

FILENAME = os.path.join(
    ROOT_PATH, 'МоевБраздыУправления1977.toc')

with open(FILENAME, encoding='utf-8') as file:
    text = file.read()

lines = text.split('\n')

for i, line in enumerate(lines):
    id = f'{i + 1:0>3}'

    if line.startswith(id):
        continue

    if re.match(r'^\d\d\d .*', line):
        line = line[4:]

    lines[i] = id + ' ' + line

text = '\n'.join(lines)
file = open(FILENAME, 'w', encoding='utf-8')
file.write(text)
