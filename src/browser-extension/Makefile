EXTENSION_TOP_LEVEL_DEPS=$(wildcard public/*)
EXTENSION_IMAGES_DEPS=$(wildcard public/images/*)
EXTENSION_CSS_DEPS=$(wildcard public/css/*)
EXTENSION_LOCALES_DEPS=$(wildcard public/_locales/*/*)
EXTENSION_SRC_DEPS=$(wildcard src/*)
EXTENSION_BROKER_DEPS=$(wildcard src/brokers/*)
EXTENSION_DEPS=$(EXTENSION_TOP_LEVEL_DEPS) \
	$(EXTENSION_IMAGES_DEPS) \
	$(EXTENSION_CSS_DEPS) \
	$(EXTENSION_LOCALES_DEPS) \
	$(EXTENSION_SRC_DEPS) \
	$(EXTENSION_BROKER_DEPS)
CHROME_EXTENSION_DEPS=$(wildcard browsers/chrome/*) 

# src/*
all: clean extensions

extensions: dist/unpacked/chrome

dist/unpacked/chrome: $(EXTENSION_DEPS) $(CHROME_EXTENSION_DEPS) Makefile
	rm -rf $@
	mkdir -p $@
	cp -R $(EXTENSION_TOP_LEVEL_DEPS) $@
	cp -R $(CHROME_EXTENSION_DEPS) $@
	rm -rf dist/unpacked/chrome/manifest.json
	make dist/unpacked/chrome/manifest.json build-chrome-extension

dist/unpacked/chrome/manifest.json: browsers/chrome/manifest.json version.ts
	echo 'import {VERSION} from "./version.ts"; console.log(JSON.stringify({...$(shell cat $<),version:VERSION},null,2))' | deno run - > $@

dist/unpacked/chrome/%.js: $(EXTENSION_SRC_DEPS) $(EXTENSION_BROKER_DEPS) $(CHROME_EXTENSION_DEPS)
	mkdir -p $(@D)
	deno bundle --config tsconfig.json src/$(*:js/%=%).ts > $@

build-chrome-extension: \
	dist/unpacked/chrome/service_worker.js \
	dist/unpacked/chrome/js/popup.js \
	dist/unpacked/chrome/js/options.js \
	dist/unpacked/chrome/js/brokers/degiro.js \
	dist/unpacked/chrome/js/brokers/schwab.js \
	dist/unpacked/chrome/js/content_script.js

lock.json: export DENO_DIR = ./deno_dir
lock.json: deps.ts
	rm -rf deno_dir/deps
	make clean
	deno cache --config tsconfig.json --lock=$@ --lock-write $<
	deno cache --config tsconfig.json deps.ts
	make format
	git add deno_dir/deps/*

dev:
	watch --no-title --errexit --beep --color make format lint extensions
	rm -rf dev.log

format:
	deno fmt src

lint:
	deno lint src

clean:
	rm -rf deno_dir/gen deno_dir/dl deno_dir/dist coverage dist

test: format lint
	deno test --config tsconfig.json --lock=lock.json --cached-only --allow-none --unstable

coverage: clean test
	deno test --config tsconfig.json --coverage=coverage --unstable
	deno coverage --lcov --unstable coverage/ > coverage/coverage.lcov
	genhtml -o coverage/html coverage/coverage.lcov
	open coverage/html/index.html

FORCE: