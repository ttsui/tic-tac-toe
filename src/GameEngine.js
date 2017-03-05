export function containsWinningCoordinates(playerCoordinates, winningCoordinates) {
  for (let winningCoords of winningCoordinates) {
    let isWinner = winningCoords.reduce((acc, coord) => acc && playerCoordinates.includes(coord), true);
    if (isWinner) {
      return true;
    }
  }

  return false;
}

export function winningCoordinates(gridSize) {
  let coordinates = [];

  let diagnol1 = [];
  let diagnol2 = [];
  for (let i=0; i<gridSize; i++) {
    diagnol1.push(`${i},${i}`);
    diagnol2.push(`${i},${(gridSize-1) - i}`);

    let row = [];
    let col = [];
    for (let j=0; j<gridSize; j++) {
      row.push(`${i},${j}`);
      col.push(`${j},${i}`);
    }

    coordinates.push(row, col);
  }
  coordinates.push(diagnol1, diagnol2);

  return coordinates;
}
