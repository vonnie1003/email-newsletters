import React from "react";
import PropTypes from "prop-types";

const style = { width: "100%" };

function NumberInput({ getParam, changeParam, paramToEdit }) {
  const onChange = event => changeParam(paramToEdit, event.target.value);
  return (
    <input
      style={style}
      value={getParam(paramToEdit)}
      type="number"
      onChange={onChange}
    />
  );
}

NumberInput.propTypes = {
  getParam: PropTypes.func.isRequired,
  changeParam: PropTypes.func.isRequired,
  paramToEdit: PropTypes.string.isRequired
};

export default NumberInput;
