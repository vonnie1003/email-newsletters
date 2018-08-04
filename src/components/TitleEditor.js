import React, { Fragment } from "react";
import PropTypes from "prop-types";

const placeholderText = "e.g. Christian Union Newsletter 24th July 2018";

function TitleEditor({ setTitle }) {
  return (
    <Fragment>
      <label htmlFor="titleEditor">Title</label>
      <input
        className="u-full-width"
        placeholder={placeholderText}
        id="titleEditor"
        onChange={setTitle}
        type={"text"}
      />
    </Fragment>
  );
}

TitleEditor.propTypes = {
  setContentMarkdown: PropTypes.func.isRequired
};

export default TitleEditor;
