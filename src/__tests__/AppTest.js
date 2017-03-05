import React from "react";
import { mount } from "enzyme";
import App from "../App";
import Cell from "../Cell";
import { PIECES } from "../constants";

it("renders game moves", () => {
  const component = mount(<App />);

  const cells = component.find(Cell);
  const clickOnClick = cellId => {
    cells.findWhere(c => c.prop("id") === cellId).simulate("click");
  };

  clickOnClick("0,1");
  expect(component.state("crossPlayerPieces")).toContain("0,1");
  expect(component.state("noughtPlayerPieces")).toHaveLength(0);
  expect(component.state("currentPlayer")).toBe(PIECES.NOUGHT);

  clickOnClick("1,1");
  expect(component.state("crossPlayerPieces")).toContain("0,1");
  expect(component.state("noughtPlayerPieces")).toContain("1,1");
  expect(component.state("currentPlayer")).toBe(PIECES.CROSS);
});
