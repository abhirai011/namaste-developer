import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>count: {count}</h1>
        <button
          onClick={() => {
            //Never update state variables Directly
            //this.state.count=this.state.count+1
            this.setState((prev) => ({
              count: prev.count * 2,
            }));
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact:@ abhiakela</h4>
      </div>
    );
  }
}

export default UserClass;
