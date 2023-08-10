#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

#navigate into the build output directory
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'


#if your are deploying to https://<USERNAME>.github.io
#git push -f git@github.com:<username>/<username>/github.io.git main

#if you are deploying to https://<username>.github.io/<repo>
#git push -f git@github.com:os-studio/os-studio.github.io.git main:gh-pages
