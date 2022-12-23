import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
let templateTwo = <div>Hello there</div>;
class Person {
  constructor(name = "annonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return "Hello, my name is " + this.name;
  }
  getDescription() {
    return `Hello,my name is ${this.name} and i am ${this.age} years old`;
  }
}
class Student extends Person {
  constructor(name, age, major = "undecided") {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    return (
      `Hello,my name is ${this.name} and i am ${this.age} years old and im a a student in ` +
      this.major
    );
  }
}
class Traveler extends Person {
  constructor(name, age, homeLocation = "") {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (!!this.homeLocation) {
      greeting += " My home location is in " + this.homeLocation;
    }
    return greeting;
  }
}
const denis = new Traveler("denis", 27, "Botosani");
console.log(denis.getGreeting());

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(templateTwo);
