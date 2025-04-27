import User from "./User";
import UserClass from "./userClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Web series one</h2>
      <div>hi</div>
      <User name={"Abhijeet Kumar"} location="Bangalore" />
      <UserClass
        name={"Abhijeet kumar (class based)"}
        location={"dehradun classs"}
      />
    </div>
  );
};

export default About;
