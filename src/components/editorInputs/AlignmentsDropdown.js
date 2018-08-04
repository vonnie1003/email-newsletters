import React from "react";
import PropTypes from "prop-types";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import "rc-dropdown/assets/index.css";

const alignmentLabels = { left: "Left", center: "Centre", right: "Right" };

function AlignmentsDropdown({ getParam, changeParam, paramToEdit }) {
  const alignmentsMenu = (
    <Menu onSelect={({ key }) => changeParam(paramToEdit, key)}>
      <MenuItem key={"left"}>{alignmentLabels.left}</MenuItem>
      <MenuItem key={"center"}>{alignmentLabels.center}</MenuItem>
      <MenuItem key={"right"}>{alignmentLabels.right}</MenuItem>
    </Menu>
  );

  return (
    <Dropdown trigger={["click"]} overlay={alignmentsMenu} animation="slide-up">
      <button>{alignmentLabels[getParam(paramToEdit)]} &#9660;</button>
    </Dropdown>
  );
}

AlignmentsDropdown.propTypes = {
  getParam: PropTypes.func.isRequired,
  changeParam: PropTypes.func.isRequired,
  paramToEdit: PropTypes.string.isRequired
};

export default AlignmentsDropdown;
