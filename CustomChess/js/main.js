//credits:
    // piece images source: https://opengameart.org/content/8x13-chess-pieces

//elements
const chessboard = document.getElementById('chessboard');
const ui = document.getElementById('ui');
const popup = document.getElementById('popup');
const matchInfo = document.getElementById('matchInfo');
const turnIndicator = document.getElementById('turnIndicator');
const runInfo = document.getElementById('runInfo');

//constants
const boardSize = 8;
const turnTime = 300; //ms
const pieceValues = {
    'pawn': 1,
    'knight': 3,
    'bishop': 3,
    'rook': 5,
    'queen': 9,
    'king': 0 // Typically, the king is not assigned a point value for game-ending purposes
};

//variables
let selectedCell;
let currentTurn;
let playerLoadOut = [
    'king',
    'pawn',
    'pawn',
    'pawn',
    'pawn',
    'pawn',
    'pawn',
    'pawn'
];
let enemyLoadOut = [
    'king',
    'pawn',
    'pawn',
    'pawn',
    'pawn',
    'pawn',
    'pawn',
    'pawn'
];
let matchStreak = 0;
let playerGold = 0;


function Initialize() {
    newMatch();
}

Initialize();
