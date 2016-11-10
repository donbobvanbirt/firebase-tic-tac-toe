import React, { Component } from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { newGame, move } from '../actions/FirebaseActions';

@connect(state => ({
  board: state.board,
  turn: state.turn,
}), dispatch => ({
  startNewGame() {
    // console.log('clicked!')
    dispatch(newGame());
  },
  playerMove(mark, key) {
    dispatch(move(mark, key));
  },
}))

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      playerMark: null,
    };
  }

  render() {
    const { board, turn, startNewGame, playerMove } = this.props;
    console.log('board', board);
    console.log('turn', turn);
    return (
      <div>
        <h1>{turn} Turn</h1>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              {/* <Image src="blank-square.png" /> */}
              <Button onClick={() => playerMove(turn, 1)}>{board[1]}</Button>
            </Grid.Column>
            <Grid.Column>
              {/* <Image src="blank-square.png" /> */}
              <Button onClick={() => playerMove(turn, 2)}>{board[2]}</Button>
            </Grid.Column>
            <Grid.Column>
              {/* <Image src="blank-square.png" /> */}
              <Button onClick={() => playerMove(turn, 3)}>{board[3]}</Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              {/* <Image src="blank-square.png" /> */}
              <Button onClick={() => playerMove(turn, 4)}>{board[4]}</Button>
            </Grid.Column>
            <Grid.Column>
              {/* <Image src="blank-square.png" /> */}
              <Button onClick={() => playerMove(turn, 5)}>{board[5]}</Button>
            </Grid.Column>
            <Grid.Column>
              {/* <Image src="blank-square.png" /> */}
              <Button onClick={() => playerMove(turn, 6)}>{board[6]}</Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              {/* <Image src="blank-square.png" /> */}
              <Button onClick={() => playerMove(turn, 7)}>{board[7]}</Button>
            </Grid.Column>
            <Grid.Column>
              {/* <Image src="blank-square.png" /> */}
              <Button onClick={() => playerMove(turn, 8)}>{board[8]}</Button>
            </Grid.Column>
            <Grid.Column>
              {/* <Image src="blank-square.png" /> */}
              <Button onClick={() => playerMove(turn, 9)}>{board[9]}</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <Button onClick={startNewGame}>New Game</Button>
        <br />
        <hr />
      </div>
    );
  }
}
