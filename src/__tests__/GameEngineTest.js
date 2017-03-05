import {
  winningCoordinates,
  containsWinningCoordinates
} from "../GameEngine";

it("generates all coordinates which results in victory", () => {
  expect(winningCoordinates(2)).toEqual([["0,0", "0,1"],
                                         ["0,0", "1,0"],
                                         ["1,0", "1,1"],
                                         ["0,1", "1,1"],
                                         ["0,0", "1,1"],
                                         ["0,1", "1,0"]]);
});

it("returns whether given set of coordinates contains winning coordinates", () => {
  expect(containsWinningCoordinates(["0,0", "0,1", "2,0", "0,2"],
                                    winningCoordinates(3))).toBeTruthy();
  expect(containsWinningCoordinates(["0,0", "0,1"],
                                    winningCoordinates(3))).toBeFalsy();
});
