import React, { Fragment } from "react";
export const emailTemplateFilePath = "email.html.template";

export const defaultParams = {
  /*--- Background colours ---*/
  pageBackgroundColour: "#1C95BA",
  logoContainerBackgroundColour: "#FFFFFF",
  contentBackgroundColour: "#FFFFFF",
  footerBackgroundColour: "#F0F0F0",

  /*--- Text fonts and colours ---*/
  titleFontFace: 'Helvetica, "Trebuchet MS", sans-serif',
  headingsFontFace: 'Helvetica, "Trebuchet MS", sans-serif',
  bodyFontFace: 'Helvetica, "Trebuchet MS", sans-serif',
  footerFontFace: 'Helvetica, "Trebuchet MS", sans-serif',
  titleColour: "#000000",
  titleSize: 36,
  heading1Colour: "#2f2f2f",
  heading1Size: 26,
  heading2Colour: "#383838",
  heading2Size: 22,
  heading3Colour: "#4C4C4C",
  heading3Size: 18,
  heading4Colour: "#505050",
  heading4Size: 16,
  bodyColour: "#555555",
  bodySize: 16,
  linkColour: "#1263B4",
  footerTextColour: "#606060",
  footerTextSize: 16,

  /*--- Logo ---*/
  logoImageUrl:
    "https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/20882811_1554997611205041_5576673317142177434_n.png" +
    "?_nc_cat=0&oh=392a0355b68d24aa869a4415d205240c&oe=5BE08453",
  logoWidth: 200,

  /*--- Footer ---*/
  socialMedia: [
    {
      name: "Facebook",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/200px-F_icon.svg.png",
      linkUrl: "https://fb.com/imperialcu"
    },
    {
      name: "Twitter",
      imageUrl:
        "https://www.fnr.lu/wp-content/uploads/2016/03/square-twitter-512.png",
      linkUrl: "https://twitter.com/CU_Imperial"
    }
  ],

  /*--- Extras ---*/
  containerWidth: 540,
  horizontalLineColour: "#E0E0E0",
  horizontalLineThickness: 2,
  horizontalLineVerticalSpacing: 30,
  horizontalLineHorizontalSpacing: 0,
  bodyVerticalPadding: 20,
  bodyHorizontalPadding: 20,
  titleAlignment: "center",
  titleSpaceAbove: 20,
  titleSpaceRight: 10,
  titleSpaceBelow: 20,
  titleSpaceLeft: 10,
  heading1Alignment: "center",
  heading1SpaceAbove: 10,
  heading2Alignment: "left",
  heading2SpaceAbove: 8,
  heading3Alignment: "left",
  heading3SpaceAbove: 5,
  heading4Alignment: "left",
  heading4SpaceAbove: 5,
  logoVerticalSpacing: 20,
  logoHorizontalSpacing: 20,
  bodyFooterDividerLineThickness: 3,
  bodyFooterDividerLineColour: "#E0E0E0",
  footerTextAlignment: "center",
  footerVerticalPadding: 20,
  footerHorizontalPadding: 20
};

export const fontFallbackStacks = [
  /*--- Serif ---*/
  {
    cssString: "Georgia, serif",
    formattedJsx: (
      <Fragment>
        <span style={{ fontFamily: "Georgia" }}>Georgia</span>,{" "}
        <span style={{ fontFamily: "serif" }}>serif</span>
      </Fragment>
    )
  },
  {
    cssString: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
    formattedJsx: (
      <Fragment>
        <span style={{ fontFamily: "Palatino Linotype" }}>
          Palatino Linotype
        </span>,{" "}
        <span style={{ fontFamily: "Book Antiqua" }}>Book Antiqua</span>,{" "}
        <span style={{ fontFamily: "Palatino" }}>Palatino</span>,{" "}
        <span style={{ fontFamily: "serif" }}>serif</span>
      </Fragment>
    )
  },
  {
    cssString: '"Times New Roman", Times, serif',
    formattedJsx: (
      <Fragment>
        <span style={{ fontFamily: "Times New Roman" }}>Times New Roman</span>,{" "}
        <span style={{ fontFamily: "Times" }}>Times</span>,{" "}
        <span style={{ fontFamily: "serif" }}>serif</span>
      </Fragment>
    )
  },

  /*--- Sans-serif ---*/
  {
    cssString: "Arial, Helvetica, sans-serif",
    formattedJsx: (
      <Fragment>
        <span style={{ fontFamily: "Arial" }}>Arial</span>,{" "}
        <span style={{ fontFamily: "Helvetica" }}>Helvetica</span>,{" "}
        <span style={{ fontFamily: "sans-serif" }}>sans-serif</span>
      </Fragment>
    )
  },
  {
    cssString: '"Arial Black", Gadget, sans-serif',
    formattedJsx: (
      <Fragment>
        <span style={{ fontFamily: "Arial Black" }}>Arial Black</span>,{" "}
        <span style={{ fontFamily: "Gadget" }}>Gadget</span>,{" "}
        <span style={{ fontFamily: "sans-serif" }}>sans-serif</span>
      </Fragment>
    )
  },
  {
    cssString: "Helvetica, Arial, sans-serif",
    formattedJsx: (
      <Fragment>
        <span style={{ fontFamily: "Helvetica" }}>Helvetica</span>,{" "}
        <span style={{ fontFamily: "Arial" }}>Arial</span>,{" "}
        <span style={{ fontFamily: "sans-serif" }}>sans-serif</span>
      </Fragment>
    )
  },
  {
    cssString: 'Helvetica, "Trebuchet MS", sans-serif',
    formattedJsx: (
      <Fragment>
        <span style={{ fontFamily: "Helvetica" }}>Helvetica</span>,{" "}
        <span style={{ fontFamily: "Trebuchet MS" }}>Trebuchet MS</span>,{" "}
        <span style={{ fontFamily: "sans-serif" }}>sans-serif</span>
      </Fragment>
    )
  },
  {
    cssString: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    formattedJsx: (
      <Fragment>
        <span style={{ fontFamily: "Lucida Sans Unicode" }}>
          Lucida Sans Unicode
        </span>,{" "}
        <span style={{ fontFamily: "Lucida Grande" }}>Lucida Grande</span>,{" "}
        <span style={{ fontFamily: "sans-serif" }}>sans-serif</span>
      </Fragment>
    )
  },
  {
    cssString: "Tahoma, Geneva, sans-serif",
    formattedJsx: (
      <Fragment>
        <span style={{ fontFamily: "Tahoma" }}>Tahoma</span>,{" "}
        <span style={{ fontFamily: "Geneva" }}>Geneva</span>,{" "}
        <span style={{ fontFamily: "sans-serif" }}>sans-serif</span>
      </Fragment>
    )
  },
  {
    cssString: "Verdana, Geneva, sans-serif",
    formattedJsx: (
      <Fragment>
        <span style={{ fontFamily: "Verdana" }}>Verdana</span>,{" "}
        <span style={{ fontFamily: "Geneva" }}>Geneva</span>,{" "}
        <span style={{ fontFamily: "sans-serif" }}>sans-serif</span>
      </Fragment>
    )
  },

  /*--- Monospace ---*/
  {
    cssString: '"Courier New", Courier, monospace',
    formattedJsx: (
      <Fragment>
        <span style={{ fontFamily: "Courier New" }}>Courier New</span>,{" "}
        <span style={{ fontFamily: "Courier" }}>Courier</span>,{" "}
        <span style={{ fontFamily: "monospace" }}>monospace</span>
      </Fragment>
    )
  },
  {
    cssString: '"Lucida Console", Monaco, monospace',
    formattedJsx: (
      <Fragment>
        <span style={{ fontFamily: "Lucida Console" }}>Lucida Console</span>,{" "}
        <span style={{ fontFamily: "Monaco" }}>Monaco</span>,{" "}
        <span style={{ fontFamily: "monospace" }}>monospace</span>
      </Fragment>
    )
  }
];

export const paramsFields = {
  pageBackgroundColour: {
    name: "Page background colour",
    description: "Background of the whole page",
    editorType: "colour"
  },
  logoContainerBackgroundColour: {
    name: "Logo container background colour",
    description: "Background of the box containing the logo at the top",
    editorType: "colour"
  },
  contentBackgroundColour: {
    name: "Content background colour",
    description: "Background of the main text in the body of your email",
    editorType: "colour"
  },
  footerBackgroundColour: {
    name: "Footer background colour",
    description:
      "Background of your footer, which contains, among other things, your " +
      "social media icons",
    editorType: "colour"
  },

  titleFontFace: {
    name: "Title font",
    description: "Font of the title at the top of the email, below the logo",
    editorType: "font"
  },
  headingsFontFace: {
    name: "Heading font",
    description: "Font for all headings and sub-headings",
    editorType: "font"
  },
  bodyFontFace: {
    name: "Body font",
    description: "Font of the main content",
    editorType: "font"
  },
  footerFontFace: {
    name: "Footer font",
    description: "Font of the footer text, at the bottom of the email",
    editorType: "font"
  },
  titleColour: {
    name: "Title colour",
    description: "Colour of the title text",
    editorType: "colour"
  },
  titleSize: {
    name: "Title size",
    description: "Size of the title text in pixels",
    editorType: "number"
  },
  heading1Colour: {
    name: "Heading 1 colour",
    description: "Colour of the heading 1 text",
    editorType: "colour"
  },
  heading1Size: {
    name: "Heading 1 size",
    description: "Size of the heading 1 text in pixels",
    editorType: "number"
  },
  heading2Colour: {
    name: "Heading 2 colour",
    description: "Colour of the heading 2 text",
    editorType: "colour"
  },
  heading2Size: {
    name: "Heading 2 size",
    description: "Size of the heading 2 text in pixels",
    editorType: "number"
  },
  heading3Colour: {
    name: "Heading 3 colour",
    description: "Colour of the heading 3 text",
    editorType: "colour"
  },
  heading3Size: {
    name: "Heading 3 size",
    description: "Size of the heading 3 text in pixels",
    editorType: "number"
  },
  heading4Colour: {
    name: "Heading 4 colour",
    description: "Colour of the heading 4 text",
    editorType: "colour"
  },
  heading4Size: {
    name: "Heading 4 size",
    description: "Size of the heading 4 text in pixels",
    editorType: "number"
  },
  bodyColour: {
    name: "Body text colour",
    description: "Colour of the main content text",
    editorType: "colour"
  },
  bodySize: {
    name: "Body text size",
    description: "Size of the main content text in pixels",
    editorType: "number"
  },
  linkColour: {
    name: "Link colour",
    description: "Colour of text with hyperlinks",
    editorType: "colour"
  },
  footerTextColour: {
    name: "Footer text colour",
    description: "Colour of the text in the footer, at the bottom of the email",
    editorType: "colour"
  },
  footerTextSize: {
    name: "Footer text size",
    description:
      "Size in pixels of the text in the footer, at the bottom of the email",
    editorType: "number"
  },

  logoImageUrl: {
    name: "Logo image URL",
    description: (
      <Fragment>
        A link to somewhere where your logo can be found online e.g.
        https://our-website.com/logo.png. If in doubt,{" "}
        <a href={"https://imgur.com/upload"}>upload your logo to Imgur</a>.
      </Fragment>
    ),
    editorType: "url"
  },
  logoWidth: {
    name: "Logo width",
    description: "The width in pixels of your logo at the top of your email",
    editorType: "number"
  },

  containerWidth: {
    name: "Container width",
    description: "Width of the main content, logo and footer",
    editorType: "number"
  },
  horizontalLineColour: {
    name: "Horizontal line colour",
    description:
      "Colour of the horizontal lines which can be used in the main email content",
    editorType: "colour"
  },
  horizontalLineThickness: {
    name: "Horizontal line thickness",
    description:
      "Thickness in pixels of the horizontal lines which can be used in the main email content",
    editorType: "number"
  },
  horizontalLineVerticalSpacing: {
    name: "Horizontal line vertical spacing",
    description:
      "The amount of blank space above and below the horizontal lines which can be used in the main " +
      "email content, in pixels",
    editorType: "number"
  },
  horizontalLineHorizontalSpacing: {
    name: "Horizontal line horizontal spacing",
    description:
      "The amount of blank space to the left and right of the horizontal lines which can be used in the main " +
      "email content, in pixels",
    editorType: "number"
  },
  bodyVerticalPadding: {
    name: "Body vertical padding",
    description:
      "The amount of blank space above and below the main content, in pixels",
    editorType: "number"
  },
  bodyHorizontalPadding: {
    name: "Body horizontal padding",
    description:
      "The amount of blank space to the left and right of the main content, in pixels",
    editorType: "number"
  },
  titleAlignment: {
    name: "Title alignment",
    description: "Alignment of the title text",
    editorType: "align"
  },
  titleSpaceAbove: {
    name: "Title space above",
    description: "Amount of blank space above the title in pixels",
    editorType: "number"
  },
  titleSpaceRight: {
    name: "Title space right",
    description: "Amount of blank space to the right of the title in pixels",
    editorType: "number"
  },
  titleSpaceBelow: {
    name: "Title space below",
    description: "Amount of blank space below the title in pixels",
    editorType: "number"
  },
  titleSpaceLeft: {
    name: "Title space left",
    description: "Amount of blank space to the left of the title in pixels",
    editorType: "number"
  },
  heading1Alignment: {
    name: "Heading 1 alignment",
    description: "Alignment of the heading 1 text",
    editorType: "align"
  },
  heading1SpaceAbove: {
    name: "Heading 1 space above",
    description: "Amount of blank space above the heading 1 text in pixels",
    editorType: "number"
  },
  heading2Alignment: {
    name: "Heading 2 alignment",
    description: "Alignment of the heading 2 text",
    editorType: "align"
  },
  heading2SpaceAbove: {
    name: "Heading 2 space above",
    description: "Amount of blank space above the heading 2 text in pixels",
    editorType: "number"
  },
  heading3Alignment: {
    name: "Heading 3 alignment",
    description: "Alignment of the heading 3 text",
    editorType: "align"
  },
  heading3SpaceAbove: {
    name: "Heading 3 space above",
    description: "Amount of blank space above the heading 3 text in pixels",
    editorType: "number"
  },
  heading4Alignment: {
    name: "Heading 4 alignment",
    description: "Alignment of the heading 4 text",
    editorType: "align"
  },
  heading4SpaceAbove: {
    name: "Heading 4 space above",
    description: "Amount of blank space above the heading 4 text in pixels",
    editorType: "number"
  },
  logoVerticalSpacing: {
    name: "Logo vertical spacing",
    description: "Amount of space above and below the logo in pixels",
    editorType: "number"
  },
  logoHorizontalSpacing: {
    name: "Logo horizontal spacing",
    description: "Amount of space to the left and right of the logo in pixels",
    editorType: "number"
  },
  bodyFooterDividerLineThickness: {
    name: "Body-footer divider line thickness",
    description:
      "Thickness of the line dividing the main content and the footer section in pixels",
    editorType: "number"
  },
  bodyFooterDividerLineColour: {
    name: "Body-footer divider line colour",
    description:
      "Colour of the line dividing the main content and the footer section",
    editorType: "colour"
  },
  footerTextAlignment: {
    name: "Footer text alignment",
    description:
      "Alignment of the text in the footer, at the bottom of the email",
    editorType: "align"
  },
  footerVerticalPadding: {
    name: "Footer vertical padding",
    description:
      "Minimum amount of space above and below the footer content and text in pixels",
    editorType: "number"
  },
  footerHorizontalPadding: {
    name: "Footer horizontal padding",
    description:
      "Minimum amount of space to the left and right of the footer content and text in pixels",
    editorType: "number"
  },

  socialMedia: {
    name: "Social media icons",
    description:
      "Links to your society's social media accounts, which appear in the footer"
  }
};

export const paramGroups = {
  backgroundColours: [
    "pageBackgroundColour",
    "logoContainerBackgroundColour",
    "contentBackgroundColour",
    "footerBackgroundColour"
  ],
  textColoursAndFonts: [
    "titleFontFace",
    "headingsFontFace",
    "bodyFontFace",
    "footerFontFace",
    "titleColour",
    "titleSize",
    "heading1Colour",
    "heading1Size",
    "heading2Colour",
    "heading2Size",
    "heading3Colour",
    "heading3Size",
    "heading4Colour",
    "heading4Size",
    "bodyColour",
    "bodySize",
    "linkColour",
    "footerTextColour",
    "footerTextSize"
  ],
  logoAndFooter: ["logoImageUrl", "logoWidth"],
  fineTuning: [
    "containerWidth",
    "horizontalLineColour",
    "horizontalLineThickness",
    "horizontalLineVerticalSpacing",
    "horizontalLineHorizontalSpacing",
    "bodyVerticalPadding",
    "bodyHorizontalPadding",
    "titleAlignment",
    "titleSpaceAbove",
    "titleSpaceRight",
    "titleSpaceBelow",
    "titleSpaceLeft",
    "heading1Alignment",
    "heading1SpaceAbove",
    "heading2Alignment",
    "heading2SpaceAbove",
    "heading3Alignment",
    "heading3SpaceAbove",
    "heading4Alignment",
    "heading4SpaceAbove",
    "logoVerticalSpacing",
    "logoHorizontalSpacing",
    "bodyFooterDividerLineThickness",
    "bodyFooterDividerLineColour",
    "footerTextAlignment",
    "footerVerticalPadding",
    "footerHorizontalPadding"
  ]
};

export const paramsKeysList = Object.keys(paramsFields);
