PRODUCER_TYPYINGS=$(wildcard src/producers/*/types.ts)
PRODUCER_SCHEMAS=$(patsubst .ts,.ts,$(PRODUCER_TYPYINGS:types.ts=schema.ts))
PRODUCER_DEBUG_SCHEMAS=$(patsubst .ts,.ts,$(PRODUCER_TYPYINGS:types.ts=schema-debug.ts))

all: format lint schemas

schemas: $(PRODUCER_SCHEMAS) $(PRODUCER_DEBUG_SCHEMAS)

build: export DENO_DIR = ./deno_dir
build: lock.json test deno_dir/dist/binaries/transaction-producer deno_dir/dist/bundles/transaction-producer.js

deno_dir/dist/binaries/%: mod.ts
	mkdir -p deno_dir/dist/binaries
	deno compile --unstable --lite mod.ts
	mv $* $@

deno_dir/dist/bundles/%.js: mod.ts
	mkdir -p deno_dir/dist/bundles
	deno bundle mod.ts > $@

lock.json: export DENO_DIR = ./deno_dir
lock.json: deps.ts
	rm -rf deno_dir/deps
	deno cache --lock=$@ --lock-write $<
	deno cache deps.ts
	git add deno_dir/deps/*

dev:
	deno run --watch  --lock=lock.json --cached-only --unstable $@

format:
	deno fmt src

lint:
	deno lint --unstable --ignore=deno_dir

info/%:
	deno info $@

doc/%:
	deno doc $@

run: lint
	deno run  --lock=lock.json --cached-only $@ src/transaction-producer.ts

repl:
	deno repl

clean:
	rm -rf deno_dir/gen deno_dir/dl deno_dir/dist coverage dist

test: schemas format lint lock.json
	deno test --allow-none --unstable

publish:
	land publish

coverage: clean test
	deno test --coverage=coverage --unstable
	deno coverage --lcov --unstable coverage/ > coverage/coverage.lcov
	genhtml -o coverage/html coverage/coverage.lcov
	open coverage/html/index.html

src/producers/%/schema.ts: src/producers/%/types.ts
	echo "// DO NOT EDIT MANUALLY!\n// Generated from typings on $<\n// To regenerate call: make $@ \nexport default " > $@
	npx ts-json-schema-generator --path $< --type '$(shell echo "$*" | awk 'BEGIN{FS="";RS="-";ORS=""} {$$0=toupper(substr($$0,1,1)) substr($$0,2)} 1')SyncResult' >> $@
	make format

src/producers/%/schema-debug.ts: src/producers/%/types.ts
	echo "// DO NOT EDIT MANUALLY!\n// Generated from typings on $<\n// To regenerate call: make $@ \nexport default " > $@
	npx ts-json-schema-generator --path $< --type '$(shell echo "$*" | awk 'BEGIN{FS="";RS="-";ORS=""} {$$0=toupper(substr($$0,1,1)) substr($$0,2)} 1')SyncDebug' >> $@
	make format

FORCE: