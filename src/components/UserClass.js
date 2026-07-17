import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    const { name, location } = this.props;

    this.state = {
      userInfo: {
        name: name,
        location: location,
      },
    };

    // console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component did mount");
    const data = await fetch("https://api.github.com/users/adwait-01");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name + "Child render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ganja._.gang</h4>
      </div>
    );
  }
}

export default UserClass;
