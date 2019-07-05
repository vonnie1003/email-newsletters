import React, { Fragment } from "react";
import PropTypes from "prop-types";

const placeholderText =
  "In Christ,\n\n" +
  "**Yvonne Winterborn**<br />\n" +
  "<small>ICCU Secretary</small>";

const style = {
  minHeight: "20em"
};

function ContentMarkdownEditor({ setContentMarkdown }) {
  return (
    <Fragment>
      <label htmlFor="contentMarkdownEditor">Email content (markdown)</label>
      <textarea
        className="u-full-width"
        id="contentMarkdownEditor"
        onChange={setContentMarkdown}
        style={style}
      >
        {placeholderText}
      </textarea>
    </Fragment>
  );
}

ContentMarkdownEditor.propTypes = {
  setContentMarkdown: PropTypes.func.isRequired
};

export default ContentMarkdownEditor;
