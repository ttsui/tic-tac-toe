import React from "react";

const Cell = props => (
  <div onClick={ () => props.onClick(props.id) }>{ props.value }</div>
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