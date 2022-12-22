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
const multiplier = {
  numbers: [12, 3, 4],
  multiplyBy: 4,
  returnMultiplied() {
    return this.numbers.map((elem) => this.multiplyBy * elem);
  },
};
let counter = 0;
const addOne = () => {
  console.log("Add one");
  counter++;
  reRenderComponent();
};
const minusOne = () => {
  counter--;
  console.log("minus One");
  reRenderComponent();
};
const resetCount = () => {
  counter = 0;
  console.log("reset");
  reRenderComponent();
};
const templateTwo = (
  <div>
    <p>Count is {counter}</p>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={resetCount}>Reset</button>
  </div>
);
function reRenderComponent() {
  const templateTwo = (
    <div>
      <p>Count is {counter}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
  root.render(templateTwo);
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(templateTwo);
