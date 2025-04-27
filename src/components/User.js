import { useState } from "react";

const User = ({ name = "Guest", location }) => {
  console.log("Rendering User component");
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: {name}</h2>
      <h2>Location:{location} </h2>
      <h3>Contact: abhiakela011@gmail.com</h3>
    </div>
  );
};

export default User;
