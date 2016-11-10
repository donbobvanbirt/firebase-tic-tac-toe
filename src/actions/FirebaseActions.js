import { database } from '../firebaseApp';

const boardRef = database.ref('board');
const turnRef = database.ref('turn');

function getBoard(board) {
  return {
    type: 'GET_BOARD',
    payload: board,
  };
}

function getTurn(turn) {
  return {
    type: 'GET_TURN',
    payload: turn,
  };
}

export function startListeningToBoard() {
  return (dispatch) => {
    boardRef.off();
    boardRef.on('value', (snap) => {
      const board = snap.val();
      dispatch(getBoard(board));
    });
  };
}

export function startListeningToTurn() {
  return (dispatch) => {
    turnRef.off();
    turnRef.on('value', (snap) => {
      const turn = snap.val();
      dispatch(getTurn(turn));
    });
  };
}

export function newGame() {
  const newBoard = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
  };
  boardRef.set(newBoard);
  return {
    type: 'NEW_BOARD',
    payload: newBoard,
  };
}

export function move(mark, key) {
  boardRef.child(key).set(mark);
  if (mark === 'X') {
    turnRef.set('O');
  } else {
    turnRef.set('X');
  }
  return {
    type: 'PLAYER_MOVE',
  };
}
