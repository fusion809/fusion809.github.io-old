from pygments.lexer import RegexLexer
from pygments.token import *

class CppCommentLexer(RegexLexer):
    name = 'Example Lexer with states'

    tokens = {
        'root': [
            (r'[^/]+', Text),
            (r'/\*', Comment.Multiline, 'comment'),
            (r'//.*?$', Comment.Singleline),
            (r'/', Text)
        ],
        'comment': [
            (r'[^*/]', Comment.Multiline),
            (r'/\*', Comment.Multiline, '#push'),
            (r'\*/', Comment.Multiline, '#pop'),
            (r'[*/]', Comment.Multiline)
        ]
    }
