import os
import shutil

from site_builder.site_builder import SiteBuilder
from site_builder.utils import copy_dir, update_svg

SOURCE_PATH = os.path.join('.', 'source')
DEST_PATH = os.path.join('.', 'docs')

SOURCE_IMAGE_PATH = os.path.join(SOURCE_PATH, 'images')
DEST_IMAGE_PATH = os.path.join(DEST_PATH, '.vuepress', 'public', 'images')


def main():
    site_builder = SiteBuilder(SOURCE_PATH)
    site_builder.build(DEST_PATH)
    copy_dir(SOURCE_IMAGE_PATH, DEST_IMAGE_PATH)
    update_svg(DEST_IMAGE_PATH)


if __name__ == '__main__':
    main()
