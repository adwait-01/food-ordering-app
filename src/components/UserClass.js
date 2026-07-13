import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 0,
      count2: 1,
      count3: 0,
      count4: -1,
      count5: 6,
    };

    console.log("Child constructor");
  }

  componentDidMount() {
    console.log("Child Component did mount");
  }

  render() {
    console.log("Child render");

    const { name, location } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
              count2: count2 + 2,
            });
          }}
        >
          Count1 & Count2 Increase
        </button>
        <h2>Count2: {count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count2: count2 - 2,
            });
          }}
        >
          Count2 Decrease
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ganja._.gang</h4>
      </div>
    );
  }
}

export default UserClass;
