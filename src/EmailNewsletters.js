import React, { Component } from "react";

import {
  emailTemplateFilePath,
  paramGroups,
  paramsFields,
  defaultParams
} from "./constants";
import generateEmailHtml from "./generateEmailHtml";
import TitleIntroduction from "./components/TitleIntroduction";
import CustomisationCodeInput from "./components/CustomisationCodeInput";
import CustomisationCodeExport from "./components/CustomisationCodeExport";
import CustomisationEditorSection from "./components/CustomisationEditorSection";
import SocialMediaEditorSection from "./components/SocialMediaEditorSection";
import TitleEditor from "./components/TitleEditor";
import ContentMarkdownEditor from "./components/ContentMarkdownEditor";
import FooterMarkdownEditor from "./components/FooterMarkdownEditor";
import { downloadFile, getMissingInputCustomisationCodeKeys } from "./utils";

function getTemplateFileContent() {
  const templateFileRequest = new Request(emailTemplateFilePath, {
    method: "GET"
  });
  return fetch(templateFileRequest).then(templateFileContentResponse =>
    templateFileContentResponse.text()
  );
}

class EmailNewsletters extends Component {
  constructor() {
    super();
    this.openCustomisationSection = this.openCustomisationSection.bind(this);
    this.closeCustomisationSection = this.closeCustomisationSection.bind(this);
    this.changeParam = this.changeParam.bind(this);
    this.getParam = this.getParam.bind(this);
    this.compileAndDownload = this.compileAndDownload.bind(this);
    this.setEditingInputCustomisationCodeString = this.setEditingInputCustomisationCodeString.bind(
      this
    );
    this.getOutputCustomisationCode = this.getOutputCustomisationCode.bind(
      this
    );
    this.setInputCustomisationCode = this.setInputCustomisationCode.bind(this);
    this.renderCustomisationEditorSection = this.renderCustomisationEditorSection.bind(
      this
    );
    this.setTitle = this.setTitle.bind(this);
    this.setContentMarkdown = this.setContentMarkdown.bind(this);
    this.setFooterMarkdown = this.setFooterMarkdown.bind(this);
    this.state = {
      params: defaultParams,
      title: "",
      contentMarkdown: "",
      footerMarkdown: "",
      editingInputCustomisationCodeString: "",
      editingInputCustomisationCodeStringInvalidProperties: {
        isJsonParsingError: false,
        missingKeys: []
      },
      isCustomisationSectionOpen: {
        backgroundColours: false,
        textColoursAndFonts: false,
        logoAndFooter: false,
        fineTuning: false,
        socialMedia: false
      }
    };
  }

  setTitle({ target: { value: title } }) {
    this.setState({ title });
  }

  setContentMarkdown({ target: { value: contentMarkdown } }) {
    this.setState({ contentMarkdown });
  }

  setFooterMarkdown({ target: { value: footerMarkdown } }) {
    this.setState({ footerMarkdown });
  }

  openCustomisationSection(section) {
    return () => {
      const { isCustomisationSectionOpen } = this.state;
      this.setState({
        isCustomisationSectionOpen: {
          ...isCustomisationSectionOpen,
          [section]: true
        }
      });
    };
  }

  closeCustomisationSection(section) {
    return () => {
      const { isCustomisationSectionOpen } = this.state;
      this.setState({
        isCustomisationSectionOpen: {
          ...isCustomisationSectionOpen,
          [section]: false
        }
      });
    };
  }

  setInputCustomisationCode(event) {
    event.preventDefault();
    const { editingInputCustomisationCodeString, params } = this.state;
    try {
      const newParamsObject = JSON.parse(editingInputCustomisationCodeString);
      const newMissingKeys = getMissingInputCustomisationCodeKeys(
        newParamsObject
      );
      const {
        editingInputCustomisationCodeStringInvalidProperties
      } = this.state;
      this.setState({
        editingInputCustomisationCodeStringInvalidProperties: {
          ...editingInputCustomisationCodeStringInvalidProperties,
          missingKeys: newMissingKeys,
          isJsonParsingError: false
        }
      });
      this.setState({ params: { ...params, ...newParamsObject } });
    } catch (err) {
      if (err.toString().match(/^SyntaxError/)) {
        const {
          editingInputCustomisationCodeStringInvalidProperties
        } = this.state;
        this.setState({
          editingInputCustomisationCodeStringInvalidProperties: {
            ...editingInputCustomisationCodeStringInvalidProperties,
            isJsonParsingError: true
          }
        });
      }
    }
  }

  setEditingInputCustomisationCodeString(event) {
    const { target } = event;
    this.setState({
      editingInputCustomisationCodeString: target.value
    });
    event.preventDefault();
  }

  getOutputCustomisationCode() {
    const { params } = this.state;
    return JSON.stringify(params, null, 0);
  }

  compileAndDownload() {
    const { params, title, contentMarkdown, footerMarkdown } = this.state;
    getTemplateFileContent().then(templateFileContent => {
      const generatedEmailHtml = generateEmailHtml(
        templateFileContent,
        params,
        title,
        contentMarkdown,
        footerMarkdown
      );
      downloadFile(generatedEmailHtml, "iccu_email.html", "text/html");
    });
  }

  changeParam(param, newValue) {
    const { params } = this.state;
    this.setState({
      params: { ...params, [param]: newValue }
    });
  }

  getParam(param) {
    const { params } = this.state;
    return params[param];
  }

  renderCustomisationEditorSection(title, paramGroup) {
    const { isCustomisationSectionOpen } = this.state;
    return (
      <CustomisationEditorSection
        title={title}
        isOpen={isCustomisationSectionOpen[paramGroup]}
        closeSection={this.closeCustomisationSection(paramGroup)}
        openSection={this.openCustomisationSection(paramGroup)}
        changeParam={this.changeParam}
        getParam={this.getParam}
        paramsToEdit={paramGroups[paramGroup]}
      />
    );
  }

  render() {
    const {
      editingInputCustomisationCodeString,
      editingInputCustomisationCodeStringInvalidProperties,
      isCustomisationSectionOpen
    } = this.state;
    const {
      missingKeys,
      isJsonParsingError
    } = editingInputCustomisationCodeStringInvalidProperties;
    return (
      <div className="container">
        <TitleIntroduction />
        <hr />
        <h3>1. Customise your email</h3>
        <CustomisationCodeInput
          setInputCustomisationCode={this.setInputCustomisationCode}
          setEditingInputCustomisationCodeString={
            this.setEditingInputCustomisationCodeString
          }
          isJsonParsingError={isJsonParsingError}
          missingKeys={missingKeys}
          editingInputCustomisationCodeString={
            editingInputCustomisationCodeString
          }
        />
        {this.renderCustomisationEditorSection(
          "Background colours",
          "backgroundColours"
        )}
        {this.renderCustomisationEditorSection(
          "Text colours and font faces",
          "textColoursAndFonts"
        )}
        {this.renderCustomisationEditorSection(
          "Logo and footer",
          "logoAndFooter"
        )}
        <SocialMediaEditorSection
          title={paramsFields.socialMedia.name}
          description={paramsFields.socialMedia.description}
          isOpen={isCustomisationSectionOpen.socialMedia}
          openSection={this.openCustomisationSection("socialMedia")}
          closeSection={this.closeCustomisationSection("socialMedia")}
          getParam={this.getParam}
          changeParam={this.changeParam}
        />
        {this.renderCustomisationEditorSection("Fine-tuning", "fineTuning")}
        <CustomisationCodeExport
          outputCustomisationCode={this.getOutputCustomisationCode()}
        />
        <hr />
        <h3>2. Write your content</h3>
        <p>
          Use Markdown to write your email. It's very, very easy to use and
          quick to learn.
        </p>
        <a
          className="button"
          href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
        >
          Concise guide to Markdown
        </a>
        <TitleEditor setTitle={this.setTitle} />
        <ContentMarkdownEditor setContentMarkdown={this.setContentMarkdown} />
        <FooterMarkdownEditor setFooterMarkdown={this.setFooterMarkdown} />
        <hr />
        <h3>3. Download your email</h3>
        <p>
          Open the downloaded HTML file, select-all, copy and paste it into a
          new email message.
        </p>
        <button className="button-primary" onClick={this.compileAndDownload}>
          Download email
        </button>
      </div>
    );
  }
}

export default EmailNewsletters;
