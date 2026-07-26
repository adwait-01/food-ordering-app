import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component did mount");
  }

  render() {
    // console.log("Parent render");

    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is my food ordering app</h2>
        <UserClass name={"Adwait (class)"} location="Bhubaneswar class" />
      </div>
    );
  }
}

export default About;
