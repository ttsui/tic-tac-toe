import React from "react";
import Cell from "./Cell";

const Board = props => {
  const range = new Array(props.size).fill("").map((v, idx) => idx);

  return (
    <table>
      <tbody>
        {
          range.map((r, rowIdx) => (
            <tr key={rowIdx}>
              {
                range.map((c, colIdx) => (
                  <td key={rowIdx + colIdx}>
                    <Cell key={rowIdx + colIdx}
                          id={`${rowIdx},${colIdx}`} />
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
Board.propTypes = {
  size: React.PropTypes.number
};

export default Board
