#Yaksh Kataria, 1330354

from pathlib import Path
import sys

comment_match = '//Yaksh Kataria, 1330354'      #String to check.

for file_path in Path('src').rglob('*.ts'):     #Iterate through each file in the 'src' folder with a filetype of '.ts'/
    with file_path.open() as curr_file:     #Open the current file.
        if(curr_file.readline().strip() != comment_match.strip()):      #If the first line of the current file is not the same as the string we are checking.
            #error_out = str('### Comment not found at: ' + str(file_path))      #Variable for outputting an error, unused.
            print('0')      #Print a '0' (in place of 'False') to idicate expected comments are not present.
            sys.exit(2)     #Exit with an error-code.

print('1')      #Print a '1' (in place of 'True') to idicate expected comments are present.
sys.exit(0)     #Exit with a success-code.