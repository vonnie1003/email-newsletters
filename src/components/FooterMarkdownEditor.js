import React, { Fragment } from "react";
import PropTypes from "prop-types";

const placeholderText =
  "Our society's weekly newsletter\n\n[iccu.co.uk](http://iccu.co.uk/)";

function FooterMarkdownEditor({ setFooterMarkdown }) {
  return (
    <Fragment>
      <label htmlFor="footerMarkdownEditor">Footer text (markdown)</label>
      <textarea>To unsubscribe from this mailing list, please click [here.](http://lists.iccu.co.uk/mailman/listinfo/iccumail)</textarea>
        className="u-full-width"
        placeholder={placeholderText}
        id="footerMarkdownEditor"
        onChange={setFooterMarkdown}
      />
    </Fragment>
  );
}

FooterMarkdownEditor.propTypes = {
  setFooterMarkdown: PropTypes.func.isRequired
};

export default FooterMarkdownEditor;
