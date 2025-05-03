import User from "./User";
import UserClass from "./userClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("parent Render");
    return (
      <div className="about-class">
        <h1>About</h1>
        <h2>This is Namaste React Web series one</h2>
        {/* <User name={"Abhijeet Kumar"} location="Bangalore" /> */}
        <UserClass
          name={"Abhijeet kumar (class based)"}
          location={"dehradun classs"}
        />
      </div>
    );
  }
}

export default About;
