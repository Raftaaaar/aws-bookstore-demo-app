#!/usr/bin/env bash

#echo $(py chkComments.py)
if [ $(py chkComments.py) = 1 ]     #Check to see if all expected comments are present.
then
    echo '### All comments are present.'
else
    echo '### Missing comments.'
    exit 2      #Exit with an error-code.
fi

npm install
npm run build

npm run test