import React, { Fragment } from "react";
import PropTypes from "prop-types";

const placeholderText =
  "**Hey everyone!**\n\n" +
  "This is what's coming up this week...\n\n" +
  "## List of events\n\n" +
  "- event one\n-event two\n- event three\n\n" +
  "With love,\n\n" +
  "**Your Name**<br />\n" +
  "<small>Society Secretary</small>";

const style = {
  minHeight: "20em"
};

function ContentMarkdownEditor({ setContentMarkdown }) {
  return (
    <Fragment>
      <label htmlFor="contentMarkdownEditor">Email content (markdown)</label>
      <textarea
        className="u-full-width"
        placeholder={placeholderText}
        id="contentMarkdownEditor"
        onChange={setContentMarkdown}
        style={style}
      />
    </Fragment>
  );
}

ContentMarkdownEditor.propTypes = {
  setContentMarkdown: PropTypes.func.isRequired
};

export default ContentMarkdownEditor;
