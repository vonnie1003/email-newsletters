import React from "react";
import PropTypes from "prop-types";
import RcColourPicker from "rc-color-picker";
import "rc-color-picker/assets/index.css";

function ColourPicker({ getParam, changeParam, paramToEdit }) {
  return (
    <RcColourPicker
      animation={"slide-up"}
      enableAlpha={false}
      color={getParam(paramToEdit)}
      mode={"RGB"}
      onChange={colours => changeParam(paramToEdit, colours.color)}
    />
  );
}

ColourPicker.propTypes = {
  getParam: PropTypes.func.isRequired,
  changeParam: PropTypes.func.isRequired,
  paramToEdit: PropTypes.string.isRequired
};

export default ColourPicker;
