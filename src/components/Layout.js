import React, { Component } from 'react';

import Board from './Board';

export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Tic Tac Toe</h1>
        <Board />
      </div>
    );
  }
}
