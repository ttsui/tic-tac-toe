import { winningCoordinates } from "../GameEngine";

it("generates all coordinates which results in victory", () => {
  expect(winningCoordinates(2)).toEqual([["0,0", "0,1"],
                                         ["0,0", "1,0"],
                                         ["1,0", "1,1"],
                                         ["0,1", "1,1"],
                                         ["0,0", "1,1"],
                                         ["0,1", "1,0"]]);
});
