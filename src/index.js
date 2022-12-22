import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const appInfo = {
  title: "Indecision app",
  subtitle: "This is some app info",
  options: ["one", "two"],
};
const template = (
  <div>
    <h1>{appInfo.title}</h1>
    {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
    <ol>
      <li>LIST ITEM,1</li>
      <li>LIST ITEM,2</li>
    </ol>
    <p>
      There are{" "}
      {appInfo.options.length > 0
        ? appInfo.options.length === 1
          ? "one option"
          : `${appInfo.options.length} options`
        : "no"}
    </p>
  </div>
);
const user = { name: "Azamfire Denis", age: 28, location: "Botosnai" };
const challenge = (
  <div>
    <h1>{user.name}</h1>
    {user.age && <p>Age- {user.age}</p>}
    <p>Location - {user.location}</p>
  </div>
);
function getName(a, b) {
  console.log(arguments);
  console.log(a, b);
  console.log(arguments[2]);
}
getName("denis", "azamfire", "bibi");
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(template);
