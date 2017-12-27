#!/bin/bash
# Run this from inside the doc directory, not in utils.
# Reads a markdown file and converts it to Asciidoctor.
# It also creates an html file from the asciidoc.
# Modify the 'prettify' and 'numbered' text if another highlighter is used.
name=$1
theme=github
echo $name
pandoc -s --atx-headers -t asciidoc -o $name.adoc $name.md
if [ "${name}" != "index" ]
then
    tag=$'\n[source,jsx,numbered]'
    start=$'\n=== Source\n\n'
    mid=$'\n----\ninclude::src/'
    end=$'\n----\n'
else
    tag=''
    start=''
    mid=''
    end='' 
fi
#echo $start
echo "$start.${name}.js$tag$mid${name}.js[]$end" >>$name.adoc
sed -i '1s/^/:doctype: book\n:source-highlighter: rouge\n:icons: font\n:docinfo1:\n/' $name.adoc
asciidoctor $name.adoc
#asciidoctor-pdf -a source-highlighter=rouge -a rouge-theme=$theme $name.adoc
