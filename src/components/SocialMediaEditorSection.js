import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CollapsibleContent from "./common/CollapsibleContent";

const inputStyle = { width: "100%" };
const addNewSocialMediaStyle = {
  textAlign: "center",
  background: "#388e3c",
  color: "#ffffff",
  cursor: "pointer"
};

function mapSocialMediaListToTableRows(
  { name, imageUrl, linkUrl },
  changeParam,
  index,
  currentSocialMediaParam
) {
  const nameInput = (
    <input
      style={inputStyle}
      value={name}
      type={"text"}
      onChange={({ target: { value: newName } }) => {
        const newSocialMediaParam = currentSocialMediaParam;
        newSocialMediaParam[index].name = newName;
        changeParam("socialMedia", newSocialMediaParam);
      }}
    />
  );
  const imageUrlInput = (
    <input
      style={inputStyle}
      value={imageUrl}
      type={"url"}
      onChange={({ target: { value: newImageUrl } }) => {
        const newSocialMediaParam = currentSocialMediaParam;
        newSocialMediaParam[index].imageUrl = newImageUrl;
        changeParam("socialMedia", newSocialMediaParam);
      }}
    />
  );
  const linkUrlInput = (
    <input
      style={inputStyle}
      value={linkUrl}
      type={"url"}
      onChange={({ target: { value: newLinkUrl } }) => {
        const newSocialMediaParam = currentSocialMediaParam;
        newSocialMediaParam[index].linkUrl = newLinkUrl;
        changeParam("socialMedia", newSocialMediaParam);
      }}
    />
  );
  const removeRow = () => {
    const newSocialMediaParam = currentSocialMediaParam;
    newSocialMediaParam.splice(index, 1);
    changeParam("socialMedia", newSocialMediaParam);
  };
  return (
    <tr>
      <td>{nameInput}</td>
      <td>{imageUrlInput}</td>
      <td>{linkUrlInput}</td>
      <td onClick={removeRow} style={{ cursor: "pointer" }}>
        <strong>Remove</strong>
      </td>
    </tr>
  );
}

function SocialMediaEditorSection({
  title,
  description,
  isOpen,
  closeSection,
  openSection,
  getParam,
  changeParam
}) {
  const socialMediaParam = getParam("socialMedia");
  const addNewSocialMedia = () => {
    changeParam("socialMedia", [
      ...socialMediaParam,
      { name: "", imageUrl: "", linkUrl: "" }
    ]);
  };
  return (
    <Fragment>
      <h4>{title}</h4>
      <CollapsibleContent isOpen={isOpen}>
        <p>{`${description}.`}</p>
        <table className={"u-full-width"} cellSpacing={0} cellPadding={0}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Icon image URL</th>
              <th>Link URL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {socialMediaParam.map((socialMedia, index) =>
              mapSocialMediaListToTableRows(
                socialMedia,
                changeParam,
                index,
                socialMediaParam
              )
            )}
            <tr onClick={addNewSocialMedia}>
              <td colSpan={4} style={addNewSocialMediaStyle}>
                Add another social media link
              </td>
            </tr>
          </tbody>
        </table>
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

SocialMediaEditorSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeSection: PropTypes.func.isRequired,
  openSection: PropTypes.func.isRequired,
  getParam: PropTypes.func.isRequired,
  changeParam: PropTypes.func.isRequired
};

export default SocialMediaEditorSection;
