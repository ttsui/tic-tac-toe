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

             <ScaleModal ref="winnerModal">
               Player { this.state.currentPlayer } is the winner!
             </ScaleModal>
      </div>
    );
  }

  _onPlayerMove(cellId) {
    switch (this.state.currentPlayer) {
      case PIECES.CROSS:
        this.state.crossPlayerPieces.push(cellId);
        if (containsWinningCoordinates(this.state.crossPlayerPieces, this._winningCoordinates)) {
          this.setState({});
          this.refs.winnerModal.show();
        } else {
          this.setState({ currentPlayer: PIECES.NOUGHT });
        }
        return;
      case PIECES.NOUGHT:
        this.state.noughtPlayerPieces.push(cellId);
        if (containsWinningCoordinates(this.state.noughtPlayerPieces, this._winningCoordinates)) {
          this.setState({});
          this.refs.winnerModal.show();
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
