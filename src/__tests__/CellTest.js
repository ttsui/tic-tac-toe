import React from "react";
import { shallow } from "enzyme";
import Cell from "../Cell";

const PIECES = {
  CROSS: "⨯",
  NOUGHT: "◯"
};

it("renders", () => {
  expect(shallow(<Cell id="0,0" />)).toHaveText("");
  expect(shallow(<Cell id="0,0" value={ PIECES.CROSS } />)).toHaveText("⨯");
  expect(shallow(<Cell id="0,0" value={ PIECES.NOUGHT } />)).toHaveText("◯");
});

it("calls onClick handler with cell ID", () => {
  let handler = jest.fn();
  
  let component = shallow(<Cell id="0,1" onClick={ handler } />);
  component.simulate("click");

  expect(handler).toHaveBeenCalledWith("0,1");
});
