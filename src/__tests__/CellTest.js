import React from "react";
import { shallow } from "enzyme";
import Cell from "../Cell";
import { PIECES } from "../constants";

it("renders", () => {
  expect(shallow(<Cell id="0,0" />)).toHaveText("");
  expect(shallow(<Cell id="0,0" value={ PIECES.CROSS } />)).toHaveText("⨯");
  expect(shallow(<Cell id="0,0" value={ PIECES.NOUGHT } />)).toHaveText("◯");
});

it("calls onClick handler with cell ID", () => {
  const handler = jest.fn();

  const component = shallow(<Cell id="0,1" onClick={ handler } />);
  component.simulate("click");

  expect(handler).toHaveBeenCalledWith("0,1");
});
