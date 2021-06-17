from pathlib import Path
import sys

comment_match = '//Yaksh Kataria, 1330354'

for file_path in Path('src').rglob('*.ts'):
    with file_path.open() as curr_file:
        if(curr_file.readline().strip() != comment_match.strip()):
            error_out = str('### Comment not found at: ' + str(file_path))
            print('0')
            sys.exit(2)

print('1')
sys.exit(0)