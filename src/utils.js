import { paramsKeysList } from "./constants";

export function downloadFile(content, fileName, mimeType = "text/plain") {
  console.log(content);
  const dummyLinkElement = document.createElement("a");
  dummyLinkElement.setAttribute(
    "href",
    `data:${mimeType};charset=utf-8,${encodeURIComponent(content)}`
  );
  dummyLinkElement.setAttribute("download", fileName);
  dummyLinkElement.style.display = "none";
  document.body.appendChild(dummyLinkElement);
  dummyLinkElement.click();
  document.body.removeChild(dummyLinkElement);
}

export function copyToClipboard(content) {
  const dummyTextAreaElement = document.createElement("textarea");
  dummyTextAreaElement.innerText = content;
  document.body.appendChild(dummyTextAreaElement);
  dummyTextAreaElement.select();
  document.execCommand("copy");
  dummyTextAreaElement.remove();
}

export function getMissingInputCustomisationCodeKeys(newParamsObject) {
  const missingKeys = [];
  paramsKeysList.map(key => {
    if (!newParamsObject.hasOwnProperty(key)) {
      missingKeys.push(key);
    }
    return null;
  });
  return missingKeys;
}
