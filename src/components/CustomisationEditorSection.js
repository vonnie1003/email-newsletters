import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { paramsFields } from "../constants";
import CollapsibleContent from "./common/CollapsibleContent";
import ColourPicker from "./editorInputs/ColourPicker";
import FontsDropdown from "./editorInputs/FontsDropdown";
import AlignmentsDropdown from "./editorInputs/AlignmentsDropdown";
import NumberInput from "./editorInputs/NumberInput";
import UrlInput from "./editorInputs/UrlInput";
import FallbackInput from "./editorInputs/FallbackInput";

const ITEMS_PER_ROW = 2;

class CustomisationEditorSection extends Component {
  constructor(props) {
    super(props);
    this.renderParamEditor = this.renderParamEditor.bind(this);
  }

  renderParamEditor(paramToEdit) {
    const { changeParam, getParam } = this.props;
    const { name, description, editorType } = paramsFields[paramToEdit];

    let editorComponent;
    switch (editorType) {
      case "colour":
        editorComponent = (
          <ColourPicker
            getParam={getParam}
            changeParam={changeParam}
            paramToEdit={paramToEdit}
          />
        );
        break;
      case "font":
        editorComponent = (
          <FontsDropdown
            getParam={getParam}
            changeParam={changeParam}
            paramToEdit={paramToEdit}
          />
        );
        break;
      case "align":
        editorComponent = (
          <AlignmentsDropdown
            getParam={getParam}
            changeParam={changeParam}
            paramToEdit={paramToEdit}
          />
        );
        break;
      case "number":
        editorComponent = (
          <NumberInput
            getParam={getParam}
            changeParam={changeParam}
            paramToEdit={paramToEdit}
          />
        );
        break;
      case "url":
        editorComponent = (
          <UrlInput
            getParam={getParam}
            changeParam={changeParam}
            paramToEdit={paramToEdit}
          />
        );
        break;
      default:
        editorComponent = (
          <FallbackInput
            getParam={getParam}
            changeParam={changeParam}
            paramToEdit={paramToEdit}
          />
        );
    }
    return (
      <div className={"one-half column"}>
        <h5>{name}</h5>
        <p>{description}</p>
        {editorComponent}
      </div>
    );
  }

  render() {
    const {
      title,
      isOpen,
      closeSection,
      openSection,
      paramsToEdit
    } = this.props;

    const rows = [];
    for (let i = 0; i < paramsToEdit.length; i++) {
      if (i % 2 === 0) {
        rows.push([this.renderParamEditor(paramsToEdit[i])]);
      } else {
        rows[~~(i / ITEMS_PER_ROW)].push(
          this.renderParamEditor(paramsToEdit[i])
        );
      }
    }

    return (
      <Fragment>
        <h4>{title}</h4>
        <CollapsibleContent isOpen={isOpen}>
          {rows.map(row => <div className={"row"}>{row}</div>)}
        </CollapsibleContent>
        {isOpen ? (
          <button onClick={closeSection}>Hide</button>
        ) : (
          <button className={"button-primary"} onClick={openSection}>
            Show
          </button>
        )}
      </Fragment>
    );
  }
}

CustomisationEditorSection.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeSection: PropTypes.func.isRequired,
  openSection: PropTypes.func.isRequired,
  paramsToEdit: PropTypes.arrayOf(PropTypes.string).isRequired,
  getParam: PropTypes.func.isRequired,
  changeParam: PropTypes.func.isRequired
};

export default CustomisationEditorSection;
