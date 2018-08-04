import React, { Fragment } from "react";

const TitleIntroduction = () => (
  <Fragment>
    <p id={"title-container"}>
      <span id={"title"}>Email Newsletter Generator</span>
    </p>
    <p>Create pretty mobile-friendly email newsletters.</p>
    <p>
      This is an open-source project by{" "}
      <a href={"http://iccu.co.uk"}>Imperial College Christian Union</a>. You
      can contribute through the{" "}
      <a href={"https://github.com/Imperial-CU/email-newsletters"}>
        GitHub repo
      </a>.
    </p>
  </Fragment>
);

export default TitleIntroduction;
