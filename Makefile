dev:
	yarn docs:dev

build:
	poetry run python main.py

test:
	poetry run pytest site_builder/tests