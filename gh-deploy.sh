#!/bin/sh

# Build the website
gatsby build
git add ./public


git checkout master # you can avoid this line if you are in master...
git subtree split --prefix public -b gh-pages # create a local gh-pages branch containing the splitted output folder
git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
git branch -D gh-pages # delete the local gh-pages because you will need it: ref
