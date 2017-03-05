import React from "react";
import { shallow } from "enzyme";
import Board from "../Board";
import Cell from "../Cell";

it("renders", () => {
  const component = shallow(<Board size={ 3 } />);

  expect(component).toContainReact(<Cell id="0,0" />);
  expect(component.find(Cell).length).toBe(9);
  expect(component).not.toContainReact(<Cell id="0,4" />);
});
