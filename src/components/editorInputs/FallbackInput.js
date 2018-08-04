import React from "react";
import PropTypes from "prop-types";

const style = { width: "100%" };

function FallbackInput({ getParam, changeParam, paramToEdit }) {
  const onChange = event => changeParam(paramToEdit, event.target.value);
  return (
    <input
      style={style}
      value={getParam(paramToEdit)}
      onChange={onChange}
    />
  );
}

FallbackInput.propTypes = {
  getParam: PropTypes.func.isRequired,
  changeParam: PropTypes.func.isRequired,
  paramToEdit: PropTypes.string.isRequired
};

export default FallbackInput;
