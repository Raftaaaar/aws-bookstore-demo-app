#!/usr/bin/env bash

echo $(py chkComments.py)
if [ $(py chkComments.py) = 1 ] 
then
    echo '### All comments are present.'
else
    echo '### Missing comments.'
    exit 2
fi

npm install
npm run build

npm run test