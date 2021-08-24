# Transaction Producer

The goal of the transaction producer is to allow users to sync transactions from
multiple brokers and analyze it in a unified and consistent way; removing the
need to perform manual steps and wrangle with spreadsheets.

The transaction producer, extracts user transactions from broker websites and
stores them on [Holdings](https://holdings.dev), where they can be aggregated
into a normalized format.

## Development

`transaction-producer` has been developed using [deno 🦕](https://deno.land/).

The `Makefile` includes shortcuts to commands that will help testing the project
and run the examples.

## Tests

To run the tests, call

```shell
make test
```

## Building browser extensions

```shell
make dist/browser-extensions
```

## Load unpacked extensions

[Getting Started Tutorial](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

1. Open the Extension Management page by navigating to `chrome://extensions`.
2. Enable Developer Mode by clicking the toggle switch next to `Developer mode`.
3. Click the `LOAD UNPACKED` button and select the `/public` directory.

![Example](https://developer-chrome-com.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/iYdLKFsJ1KSVGLhbLRvS.png?auto=format&w=650)

## Self hosting

This project uses [supabase](https://supabase.io/) as a backend. You can
[self host](https://supabase.io/docs/guides/self-hosting) supabase to keep your
transactions locally.

## License

Copyright (C) 2021 Holdings.dev This program is free software: you can
redistribute it and/or modify it under the terms of the GNU Affero General
Public License as published by the Free Software Foundation, version 3.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along
with this program. If not, see <https://www.gnu.org/licenses/>
