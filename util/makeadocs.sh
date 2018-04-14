#!/bin/bash
# Run this from inside the doc directory, not in utils.
# Reads a markdown file and converts it to Asciidoctor.
# It also creates an html file using asciidoc.
# Modify the 'prettify' and 'numbered' text if another highlighter is used.
for i in *.md
do
    theme=github
    name=${i%.*}
    echo $name
    #cp $name.adoc backups
    pandoc -s --atx-headers -t asciidoc -o $name.adoc $i
    if [ "${name}" != "index" ]
    then
        src=$(<src/$name.js)
        tag=$'\n[source,jsx,numbered]'
        start=$'\n\n'
        mid=$'\n----\n'"$src"
        end=$'\n----\n'
        echo "$start.${name}.js$tag$mid$end" >>$name.adoc
    fi
    #echo $start
    sed -i '1s/^/:doctype: book\n:source-highlighter: rouge\n:icons: font\n:docinfo1:\n:toc: left\n/' $name.adoc
    asciidoctor $name.adoc
    #asciidoctor-pdf -a source-highlighter=rouge -a rouge-theme=$theme $name.adoc
done
# Run main file a second time to update link references.
pandoc -s --atx-headers -t asciidoc -o index.adoc index.md
sed -i '1s/^/:doctype: book\n:source-highlighter: rouge\n:icons: font\n:docinfo1:\n:toc: left\n/' index.adoc
asciidoctor index.adoc
