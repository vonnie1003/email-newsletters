import React from "react";
import PropTypes from "prop-types";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import "rc-dropdown/assets/index.css";

import { fontFallbackStacks } from "../../constants";

const fontDropdownButtonStyle = { fontWeight: "normal", textTransform: "none" };

function FontsDropdown({ getParam, changeParam, paramToEdit }) {
  const buttonText = fontFallbackStacks.filter(
    ({ cssString }) => cssString === getParam(paramToEdit)
  )[0].formattedJsx;

  const fontsMenu = (
    <Menu onSelect={({ key }) => changeParam(paramToEdit, key)}>
      {fontFallbackStacks.map(({ cssString, formattedJsx }) => (
        <MenuItem key={cssString}>{formattedJsx}</MenuItem>
      ))}
    </Menu>
  );

  return (
    <Dropdown trigger={["click"]} overlay={fontsMenu} animation="slide-up">
      <button style={fontDropdownButtonStyle}>{buttonText} &#9660;</button>
    </Dropdown>
  );
}

FontsDropdown.propTypes = {
  getParam: PropTypes.func.isRequired,
  changeParam: PropTypes.func.isRequired,
  paramToEdit: PropTypes.string.isRequired
};

export default FontsDropdown;
