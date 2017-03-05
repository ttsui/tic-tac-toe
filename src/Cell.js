import React from "react";

const Cell = props => (
  <div onClick={ () => props.onClick(props.id) }
       style={{ width: 150, height: 150, fontSize: "10em" }}>
    { props.value }
  </div>
);
Cell.propTypes = {
  id: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  value: React.PropTypes.string
};
Cell.defaultProps = {
  value: ""
};

export default Cell
