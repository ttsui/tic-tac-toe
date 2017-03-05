import React from "react";
import { shallow, mount } from "enzyme";
import Board from "../Board";
import Cell from "../Cell";
import { PIECES } from "../constants";

it("renders", () => {
  const component = shallow(<Board size={ 3 }
                                   crossPieces={["0,0", "1,2"]}
                                   noughtPieces={["2,0"]} />);

  const cells = component.find(Cell);
  expect(cells.length).toBe(9);
  expect(cells.first()).toHaveProp("id", "0,0");
  expect(cells.first()).toHaveProp("value", PIECES.CROSS);
});

it("calls onPlayerMove handler with coordinates of move", () => {
  const handler = jest.fn();

  const component = mount(<Board size={ 3 } onPlayerMove={ handler }/>);
  const aCell = component.find(Cell).first();
  aCell.simulate("click");

  expect(handler).toHaveBeenCalledWith(aCell.prop("id"));
});
