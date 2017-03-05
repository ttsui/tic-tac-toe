import React, { Component } from 'react';
import ScaleModal from "boron/ScaleModal";
import { winningCoordinates, containsWinningCoordinates } from "./GameEngine";
import { PIECES } from "./constants";
import Board from "./Board";

import './App.css';

function initialState() {
  return {
    currentPlayer: PIECES.CROSS,
    crossPlayerPieces: [],
    noughtPlayerPieces: []
  };
}

class App extends Component {
  constructor() {
    super();

    this._boardSize = 3;
    this._winningCoordinates = winningCoordinates(this._boardSize);
    this.state = initialState();

    this._onPlayerMove = this._onPlayerMove.bind(this);
    this._resetGame = this._resetGame.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tic-Tac-Toe</h2>
          <h2 className="messages">
            { `Player ${ this.state.currentPlayer }'s move` }
          </h2>
        </div>

        <Board size={ this._boardSize }
               onPlayerMove={ this._onPlayerMove }
               crossPieces={ this.state.crossPlayerPieces }
               noughtPieces={ this.state.noughtPlayerPieces } />

             <ScaleModal ref="gameOverModal"
                         onHide={ this._resetGame }>
               {
                 this._isBoardFull()
                   ? "The game is a draw."
                   : `Player ${this.state.currentPlayer} is the winner!`
               }
             </ScaleModal>
      </div>
    );
  }

  _isBoardFull() {
    const { crossPlayerPieces, noughtPlayerPieces } = this.state;

    return (crossPlayerPieces.length + noughtPlayerPieces.length) === (this._boardSize ** 2);
  }

  _isGameOver() {
    const { crossPlayerPieces, noughtPlayerPieces } = this.state;

    const crossPlayerIsWinner = containsWinningCoordinates(crossPlayerPieces,
                                                           this._winningCoordinates);

    const noughtPlayerIsWinner = containsWinningCoordinates(noughtPlayerPieces,
                                                            this._winningCoordinates);

    return crossPlayerIsWinner || noughtPlayerIsWinner || this._isBoardFull();
  }

  _isMoveInvalid(cellId) {
    const { crossPlayerPieces, noughtPlayerPieces } = this.state;

    return crossPlayerPieces.includes(cellId) || noughtPlayerPieces.includes(cellId);
  }

  _onPlayerMove(cellId) {
    const { crossPlayerPieces, noughtPlayerPieces, currentPlayer } = this.state;

    switch (currentPlayer) {
      case PIECES.CROSS:
        if (this._isMoveInvalid(cellId)) {
          return;
        }

        crossPlayerPieces.push(cellId);
        if (this._isGameOver()) {
          this.setState({});
          this.refs.gameOverModal.show();
        } else {
          this.setState({ currentPlayer: PIECES.NOUGHT });
        }
        return;
      case PIECES.NOUGHT:
        if (this._isMoveInvalid(cellId)) {
          return;
        }

        noughtPlayerPieces.push(cellId);
        if (this._isGameOver()) {
          this.setState({});
          this.refs.gameOverModal.show();
        } else {
          this.setState({ currentPlayer: PIECES.CROSS });
        }
        return;
      default:
        console.error("Unknown player: ", currentPlayer);
        return;
    }
  }

  _resetGame() {
    this.setState(initialState());
  }

}

export default App;
