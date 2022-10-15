import os
import shutil

from site_builder.page import SiteBuilder

SOURCE_PATH = r'.\source'
DEST_PATH = r'.\docs'


def main():
    site_builder = SiteBuilder(SOURCE_PATH)
    site_builder.build(DEST_PATH)


if __name__ == '__main__':
    main()
