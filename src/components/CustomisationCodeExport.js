import React, { Component, Fragment } from "react";
import CheckIcon from "react-icons/lib/md/check";
import CopyIcon from "react-icons/lib/md/content-copy";

import { downloadFile, copyToClipboard } from "../utils";

class CustomisationCodeExport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOutputCustomisationCodeRecentlyCopied: false
    };
    this.downloadOutputCustomisationCode = this.downloadOutputCustomisationCode.bind(
      this
    );
    this.setOutputCustomisationCodeRecentlyCopied = this.setOutputCustomisationCodeRecentlyCopied.bind(
      this
    );
    this.resetOutputCustomisationCodeRecentlyCopied = this.resetOutputCustomisationCodeRecentlyCopied.bind(
      this
    );
    this.copyOutputCustomisationCode = this.copyOutputCustomisationCode.bind(
      this
    );
  }

  downloadOutputCustomisationCode() {
    const { outputCustomisationCode } = this.props;
    downloadFile(
      outputCustomisationCode,
      "customisation_code.json",
      "application/json"
    );
  }

  setOutputCustomisationCodeRecentlyCopied() {
    this.setState({
      isOutputCustomisationCodeRecentlyCopied: true
    });
  }

  resetOutputCustomisationCodeRecentlyCopied() {
    this.setState({
      isOutputCustomisationCodeRecentlyCopied: false
    });
  }

  copyOutputCustomisationCode() {
    const { outputCustomisationCode } = this.props;
    copyToClipboard(outputCustomisationCode);
    this.setOutputCustomisationCodeRecentlyCopied();
    setTimeout(this.resetOutputCustomisationCodeRecentlyCopied, 1500);
  }

  render() {
    const { outputCustomisationCode } = this.props;
    const { isOutputCustomisationCodeRecentlyCopied } = this.state;
    return (
      <Fragment>
        <p>
          <strong>
            Want to save your customisation? Copy this code and keep it
            somewhere safe!
          </strong>
        </p>
        <textarea
          className="u-full-width"
          id="outputCustomisationCode"
          disabled
          value={outputCustomisationCode}
        />
        <button
          className={"button-primary"}
          onClick={this.copyOutputCustomisationCode}
        >
          {isOutputCustomisationCodeRecentlyCopied ? (
            <Fragment>
              Copied! <CheckIcon />
            </Fragment>
          ) : (
            <Fragment>
              Copy <CopyIcon />
            </Fragment>
          )}
        </button>
        &ensp;
        <button onClick={this.downloadOutputCustomisationCode}>
          Download the code
        </button>
      </Fragment>
    );
  }
}

export default CustomisationCodeExport;
