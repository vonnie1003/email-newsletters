import React from "react";
import ReactDOM from "react-dom";
import EmailNewsletters from "./EmailNewsletters";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EmailNewsletters />, div);
  ReactDOM.unmountComponentAtNode(div);
});
