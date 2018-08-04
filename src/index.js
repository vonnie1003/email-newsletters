import React from "react";
import ReactDOM from "react-dom";
import "./skeleton.css";
import "./styles.css";
import EmailNewsletters from "./EmailNewsletters";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<EmailNewsletters />, document.getElementById("root"));
registerServiceWorker();
