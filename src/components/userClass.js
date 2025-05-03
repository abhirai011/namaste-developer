import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Child constructor");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    // console.log("child component did mount");
    //Api call
    const data = await fetch("https://api.github.com/users/abhijeet011");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    // console.log("Child render");
    // const { name, location } = this.props;
    // const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact:@ abhiakela</h4>
      </div>
    );
  }
}

export default UserClass;
