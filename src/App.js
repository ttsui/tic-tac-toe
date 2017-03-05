import React, { Component } from 'react';
import ScaleModal from "boron/ScaleModal";
import { winningCoordinates, containsWinningCoordinates } from "./GameEngine";
import { PIECES } from "./constants";
import Board from "./Board";

import './App.css';

class App extends Component {
  constructor() {
    super();

    this._boardSize = 3;
    this._winningCoordinates = winningCoordinates(this._boardSize);
    this.state = {
      currentPlayer: PIECES.CROSS,
      crossPlayerPieces: [],
      noughtPlayerPieces: []
    };

    this._onPlayerMove = this._onPlayerMove.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tic-Tac-Toe</h2>
        </div>

        <Board size={ this._boardSize }
               onPlayerMove={ this._onPlayerMove }
               crossPieces={ this.state.crossPlayerPieces }
               noughtPieces={ this.state.noughtPlayerPieces } />

             <ScaleModal ref="gameOverModal">
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

  _onPlayerMove(cellId) {
    switch (this.state.currentPlayer) {
      case PIECES.CROSS:
        this.state.crossPlayerPieces.push(cellId);
        if (this._isGameOver()) {
          this.setState({});
          this.refs.gameOverModal.show();
        } else {
          this.setState({ currentPlayer: PIECES.NOUGHT });
        }
        return;
      case PIECES.NOUGHT:
        this.state.noughtPlayerPieces.push(cellId);
        if (this._isGameOver()) {
          this.setState({});
          this.refs.gameOverModal.show();
        } else {
          this.setState({ currentPlayer: PIECES.CROSS });
        }
        return;
      default:
        console.error("Unknown player: ", this.state.currentPlayer);
        return;
    }
  }
}

export default App;
