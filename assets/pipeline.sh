#!/usr/bin/env bash

echo $(py chkComments.py)
if [ $(py chkComments.py) = 1 ] 
then
    echo '### All comments are present.'
    exit 0
else
    echo '### Missing comments.'
fi

#npm install
#npm run build