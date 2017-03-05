import React from "react";
import Cell from "./Cell";
import { PIECES } from "./constants";

function valueOfCell(cellId, crossPieces, noughtPieces) {
  if (crossPieces.includes(cellId)) {
    return PIECES.CROSS;
  }

  if (noughtPieces.includes(cellId)) {
    return PIECES.NOUGHT;
  }

  return "";
}
const Board = props => {
  const range = new Array(props.size).fill("").map((v, idx) => idx);

  return (
    <table style={{ margin: "1em auto"}} >
      <tbody>
        {
          range.map((r, rowIdx) => (
            <tr key={rowIdx}>
              {
                range.map((c, colIdx) => {
                  const cellId=`${rowIdx},${colIdx}`;
                  return (
                    <td key={rowIdx + colIdx}
                        style={{ border: "black 1px solid"}}>
                      <Cell key={ cellId }
                            id={ cellId }
                            onClick={ id => props.onPlayerMove(id) }
                            value={ valueOfCell(cellId, props.crossPieces, props.noughtPieces) } />
                    </td>
                  );
                })
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
Board.propTypes = {
  crossPieces: React.PropTypes.array,
  noughtPieces: React.PropTypes.array,
  onPlayerMove: React.PropTypes.func,
  size: React.PropTypes.number
};
Board.defaultProps = {
  crossPieces: [],
  noughtPieces: []
}

export default Board
