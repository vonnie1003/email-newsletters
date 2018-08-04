import React from "react";
import PropTypes from "prop-types";

import ErrorText from "./common/ErrorText";

function getMissingInputCustomisationCodeKeysErrorText(missingKeys) {
  const mostMissingKeysToDisplay = 4;
  const numberMissing = missingKeys.length;
  let missingKeysText = missingKeys[0];
  if (1 < numberMissing && numberMissing <= mostMissingKeysToDisplay) {
    missingKeysText = missingKeys
      .slice(0, -1)
      .join(", ")
      .concat(` and ${missingKeys[numberMissing - 1]}`);
  } else if (numberMissing > mostMissingKeysToDisplay) {
    const numberOthers = numberMissing - mostMissingKeysToDisplay;
    missingKeysText = missingKeys
      .slice(0, mostMissingKeysToDisplay + 1)
      .join(", ")
      .concat(` and ${numberOthers} other${numberOthers > 1 ? "s" : ""}`);
  }

  return `That code is missing the field${
    numberMissing > 1 ? "s" : ""
  }, ${missingKeysText}. These settings have been left as they were.`;
}

const CustomisationCodeInput = ({
  setInputCustomisationCode,
  setEditingInputCustomisationCodeString,
  isJsonParsingError,
  missingKeys,
  editingInputCustomisationCodeString
}) => (
  <form onSubmit={setInputCustomisationCode}>
    <label htmlFor="customisationCodeInput">
      Used this before? Paste your saved customisation code here:
    </label>
    <input
      className="u-full-width"
      type="text"
      placeholder="Paste the code here"
      id="customisationCodeInput"
      onChange={setEditingInputCustomisationCodeString}
    />
    {isJsonParsingError && (
      <p>
        <ErrorText>Something seems to be wrong with that code!</ErrorText>
      </p>
    )}
    {missingKeys.length > 0 && (
      <p>
        <ErrorText>
          {getMissingInputCustomisationCodeKeysErrorText(missingKeys)}
        </ErrorText>
      </p>
    )}
    {editingInputCustomisationCodeString !== null &&
      editingInputCustomisationCodeString !== "" && (
        <input type={"submit"} value={"Use this customisation!"} />
      )}
  </form>
);

CustomisationCodeInput.propTypes = {
  setInputCustomisationCode: PropTypes.func.isRequired,
  setEditingInputCustomisationCodeString: PropTypes.func.isRequired,
  isJsonParsingError: PropTypes.bool.isRequired,
  missingKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  editingInputCustomisationCodeString: PropTypes.string.isRequired
};

export default CustomisationCodeInput;
