import React from "react";
import PropTypes from "prop-types";

const style = { width: "100%" };

function UrlInput({ getParam, changeParam, paramToEdit }) {
  const onChange = event => changeParam(paramToEdit, event.target.value);
  return (
    <input
      style={style}
      value={getParam(paramToEdit)}
      type="url"
      onChange={onChange}
    />
  );
}

UrlInput.propTypes = {
  getParam: PropTypes.func.isRequired,
  changeParam: PropTypes.func.isRequired,
  paramToEdit: PropTypes.string.isRequired
};

export default UrlInput;
