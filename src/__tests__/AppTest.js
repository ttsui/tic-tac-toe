import React from "react";
import { mount } from "enzyme";
import ScaleModal from "boron/ScaleModal";
import App from "../App";
import Cell from "../Cell";
import { PIECES } from "../constants";

let component;
let clickOnClick;

beforeEach(() => {
  component = mount(<App />);

  const cells = component.find(Cell);
  clickOnClick = cellId => {
    cells.findWhere(c => c.prop("id") === cellId).simulate("click");
  };
});

it("renders game moves", () => {
  clickOnClick("0,1");
  expect(component.state("crossPlayerPieces")).toContain("0,1");
  expect(component.state("noughtPlayerPieces")).toHaveLength(0);
  expect(component.state("currentPlayer")).toBe(PIECES.NOUGHT);

  clickOnClick("1,1");
  expect(component.state("crossPlayerPieces")).toContain("0,1");
  expect(component.state("noughtPlayerPieces")).toContain("1,1");
  expect(component.state("currentPlayer")).toBe(PIECES.CROSS);
});

it("renders dialog when there is a winner", () => {
  clickOnClick("0,0"); // Player X
  clickOnClick("1,0"); // Player O
  clickOnClick("0,1"); // Player X
  clickOnClick("1,1"); // Player O
  clickOnClick("0,2"); // Player X

  expect(component.find(ScaleModal)).toBePresent();


});
