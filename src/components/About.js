import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component did mount");
  }

  render() {
    console.log("Parent render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is my food ordering app</h2>
        <User name={"Adwait (function)"} location="Bhubaneswar" />
        <UserClass name={"Adwait (class)"} location="Bhubaneswar class" />
        <UserClass name={"Pratyush (class)"} location="Rourkela class" />
      </div>
    );
  }
}

export default About;
