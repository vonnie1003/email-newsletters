import marked from "marked";

class VariableInserter {
  constructor(string) {
    this.string = string;
  }

  insertVariable(variableName, value) {
    const regExpToReplace = new RegExp(`{{${variableName}}}`, "g");
    return new VariableInserter(this.string.replace(regExpToReplace, value));
  }

  toString() {
    return this.string;
  }
}

function insertSocialMedia(templateHtml, socialMedia) {
  const itemsHtml = socialMedia.map(({ name, imageUrl, linkUrl }) => {
    return `<td align="center" valign="top">
            <a href="${linkUrl}"><img width="25" src="${imageUrl}" alt="${name}"/></a>
        </td>`;
  });
  const aggregatedItemsHtml = itemsHtml.join("");
  return new VariableInserter(templateHtml)
    .insertVariable("socialMediaItems", aggregatedItemsHtml)
    .toString();
}

export default function generateEmailHtml(
  templateHtml,
  params,
  title,
  contentMarkdown,
  footerMarkdown
) {
  const {
    pageBackgroundColour,
    logoContainerBackgroundColour,
    contentBackgroundColour,
    footerBackgroundColour,

    titleFontFace,
    headingsFontFace,
    bodyFontFace,
    footerFontFace,
    titleColour,
    titleSize,
    heading1Colour,
    heading1Size,
    heading2Colour,
    heading2Size,
    heading3Colour,
    heading3Size,
    heading4Colour,
    heading4Size,
    bodyColour,
    bodySize,
    linkColour,
    footerTextColour,
    footerTextSize,

    logoImageUrl,
    logoWidth,

    containerWidth,
    horizontalLineColour,
    horizontalLineThickness,
    horizontalLineVerticalSpacing,
    horizontalLineHorizontalSpacing,
    bodyVerticalPadding,
    bodyHorizontalPadding,
    titleAlignment,
    titleSpaceAbove,
    titleSpaceRight,
    titleSpaceBelow,
    titleSpaceLeft,
    heading1Alignment,
    heading1SpaceAbove,
    heading2Alignment,
    heading2SpaceAbove,
    heading3Alignment,
    heading3SpaceAbove,
    heading4Alignment,
    heading4SpaceAbove,
    logoVerticalSpacing,
    logoHorizontalSpacing,
    bodyFooterDividerLineThickness,
    bodyFooterDividerLineColour,
    footerTextAlignment,
    footerVerticalPadding,
    footerHorizontalPadding,

    socialMedia
  } = params;

  const templateHtmlWithSocialMedia = insertSocialMedia(
    templateHtml,
    socialMedia
  );

  const contentHtml = marked(contentMarkdown);
  const footerHtml = marked(footerMarkdown);

  return new VariableInserter(templateHtmlWithSocialMedia)
    .insertVariable("pageBackgroundColour", pageBackgroundColour)
    .insertVariable(
      "logoContainerBackgroundColour",
      logoContainerBackgroundColour
    )
    .insertVariable("contentBackgroundColour", contentBackgroundColour)
    .insertVariable("footerBackgroundColour", footerBackgroundColour)
    .insertVariable("titleFontFace", titleFontFace)
    .insertVariable("headingsFontFace", headingsFontFace)
    .insertVariable("bodyFontFace", bodyFontFace)
    .insertVariable("footerFontFace", footerFontFace)
    .insertVariable("titleColour", titleColour)
    .insertVariable("titleSize", titleSize)
    .insertVariable("heading1Colour", heading1Colour)
    .insertVariable("heading1Size", heading1Size)
    .insertVariable("heading2Colour", heading2Colour)
    .insertVariable("heading2Size", heading2Size)
    .insertVariable("heading3Colour", heading3Colour)
    .insertVariable("heading3Size", heading3Size)
    .insertVariable("heading4Colour", heading4Colour)
    .insertVariable("heading4Size", heading4Size)
    .insertVariable("bodyColour", bodyColour)
    .insertVariable("bodySize", bodySize)
    .insertVariable("linkColour", linkColour)
    .insertVariable("footerTextColour", footerTextColour)
    .insertVariable("footerTextSize", footerTextSize)
    .insertVariable("logoImageUrl", logoImageUrl)
    .insertVariable("logoWidth", logoWidth)
    .insertVariable("horizontalLineColour", horizontalLineColour)
    .insertVariable("containerWidth", containerWidth)
    .insertVariable("horizontalLineThickness", horizontalLineThickness)
    .insertVariable(
      "horizontalLineVerticalSpacing",
      horizontalLineVerticalSpacing
    )
    .insertVariable(
      "horizontalLineHorizontalSpacing",
      horizontalLineHorizontalSpacing
    )
    .insertVariable("bodyVerticalPadding", bodyVerticalPadding)
    .insertVariable("bodyHorizontalPadding", bodyHorizontalPadding)
    .insertVariable("titleAlignment", titleAlignment)
    .insertVariable("titleSpaceAbove", titleSpaceAbove)
    .insertVariable("titleSpaceRight", titleSpaceRight)
    .insertVariable("titleSpaceBelow", titleSpaceBelow)
    .insertVariable("titleSpaceLeft", titleSpaceLeft)
    .insertVariable("heading1Alignment", heading1Alignment)
    .insertVariable("heading1SpaceAbove", heading1SpaceAbove)
    .insertVariable("heading2Alignment", heading2Alignment)
    .insertVariable("heading2SpaceAbove", heading2SpaceAbove)
    .insertVariable("heading3Alignment", heading3Alignment)
    .insertVariable("heading3SpaceAbove", heading3SpaceAbove)
    .insertVariable("heading4Alignment", heading4Alignment)
    .insertVariable("heading4SpaceAbove", heading4SpaceAbove)
    .insertVariable("logoVerticalSpacing", logoVerticalSpacing)
    .insertVariable("logoHorizontalSpacing", logoHorizontalSpacing)
    .insertVariable(
      "bodyFooterDividerLineThickness",
      bodyFooterDividerLineThickness
    )
    .insertVariable("bodyFooterDividerLineColour", bodyFooterDividerLineColour)
    .insertVariable("footerTextAlignment", footerTextAlignment)
    .insertVariable("footerVerticalPadding", footerVerticalPadding)
    .insertVariable("footerHorizontalPadding", footerHorizontalPadding)

    .insertVariable("title", title)
    .insertVariable("contentHtml", contentHtml)
    .insertVariable("footerHtml", footerHtml)
    .toString();
}
