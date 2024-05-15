//https://tetris.wiki/Super_Rotation_System
const pieceMatrices = {
    "I": [
        [
            ".....",
            ".....",
            ".####",
            ".....",
            "....."
        ],
        [
            ".....",
            "..#..",
            "..#..",
            "..#..",
            "..#..",
        ].reverse(),
        [
            ".....",
            ".....",
            "####.",
            ".....",
            "....."
        ],
        [
            "..#..",
            "..#..",
            "..#..",
            "..#..",
            "....."
        ].reverse()
    ],
    "J": [
        [
            "#..",
            "###",
            "..."
        ].reverse(),
        [
            ".##",
            ".#.",
            ".#."
        ].reverse(),
        [
            "...",
            "###",
            "..#"
        ].reverse(),
        [
            ".#.",
            ".#.",
            "##."
        ].reverse()
    ],
    "L": [
        [
            "..#",
            "###",
            "..."
        ].reverse(),
        [
            ".#.",
            ".#.",
            ".##"
        ].reverse(),
        [
            "...",
            "###",
            "#.."
        ].reverse(),
        [
            "##.",
            ".#.",
            ".#."
        ].reverse(),
    ],
    "O": [
        [
            "##",
            "##"
        ],
        [
            "##",
            "##"
        ],
        [
            "##",
            "##"
        ],
        [
            "##",
            "##"
        ]
    ],
    "S": [
        [
            ".##",
            "##.",
            "..."
        ].reverse(),
        [
            ".#.",
            ".##",
            "..#"
        ].reverse(),
        [
            "...",
            ".##",
            "##."
        ].reverse(),
        [
            "#..",
            "##.",
            ".#."
        ].reverse(),
    ],
    "T": [
        [
            "-#-",
            "###",
            "-.-"
        ].reverse(),
        [
            "-#-",
            ".##",
            "-#-"
        ].reverse(),
        [
            "-.-",
            "###",
            "-#-"
        ].reverse(),
        [
            "-#-",
            "##.",
            "-#-"
        ]
    ],
    "Z": [
        [
            "##.",
            ".##",
            "..."
        ].reverse(),
        [
            "..#",
            ".##",
            ".#."
        ].reverse(),
        [
            "...",
            "##.",
            ".##"
        ].reverse(),
        [
            ".#.",
            "##.",
            "#.."
        ].reverse()
    ],
}

const clearTable = [
    0, //NA
    0, //Single
    1, //Double
    2, //Triple
    4, //Tetris
    2, //T-Spin Single
    4, //T-Spin Double
    6, //T-Spin Triple
];

const wallKickTable = [
    [[0, 0], [ 0, 0], [ 0, 0], [0, 0], [ 0, 0]],
    [[0, 0], [+1, 0], [+1,-1], [0,+2], [+1,+2]],
    [[0, 0], [ 0, 0], [ 0, 0], [0, 0], [ 0, 0]],
    [[0, 0], [-1, 0], [-1,-1], [0,+2], [-1,+2]]
]
const IwallKickTable = [
    [[ 0, 0], [-1, 0], [+2, 0], [-1, 0], [+2, 0]],
    [[-1, 0], [ 0, 0], [ 0, 0], [ 0,+1], [ 0,-2]],
    [[-1,+1], [+1,+1], [-2,+1], [+1, 0], [-2, 0]],
    [[ 0,+1], [ 0,+1], [ 0,+1], [ 0,-1], [ 0,+2]]
]