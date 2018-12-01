# Utilities
Scripts and tools to help generate files with updated
content, and to generate documentation that matches source file changes.

## generateGift
### Utility to generate iframe contents with last week's collections.
Usage: Run `generateGift.sh`

Then copy resulting `giftFrame.html` from `EN` and `ES` directories to their counterparts in `public`.
#### Variables to edit for each run are in `giftText.js`.

Note: The date is calculated as the most recent previous
Sunday. Running it on a Sunday results in `today` instead, which is
probably not what you want.

## makeExpenseTable.mjs
### Generates html with a formatted expense table from the `expense.txt` input file.

Currently the html goes to stdout.

It's run as
```
$ node --experimental-modules makeExpenseTable.mjs >filename.html
```
### Input `expense.txt` file format
A single line of text not containing a `:` is considered a Title.

Expense entry lines have text followed by a single `:` separator followed by digits (dollars and cents.)

Separator lines contain only the string `--`.

## makeadocs.sh
Generates documentation in the `doc` directory from Markdown and source files.

_Note:_ This utility must be run from within the `doc` directory like so:
```
doc$ ../util/makeadocs.sh
```
_Note:_ Run this utility twice for best results. Sometimes forward referenced
files are not picked up on the first pass.

Markdown files are manually edited, and `asciidoc`, `html` and `pdf` files are
generated from those. `index.md` is the entry point, and the generated
`index.html`, `index.adoc`, and `index.pdf` files include all of
documentation in their respective formats. The `src`
directory is a symbolic link to the source files, which are included
automatically so the documents always have up to date source listings
as long as this script is run after any source file changes.

Not every file in the `src` directory is picked up - only the ones
included by the Markdown directives.
## onedoc.sh
Generates documents for a single section. This was done to avoid
recompiling/generating the whole document set during
development. Otherwise, there's not much use for it and it should be
considered deprecated.

It take a section name as an argument with no extension, such as
`Modal` or `Intro`.

