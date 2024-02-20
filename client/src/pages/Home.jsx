import Auth from "../utils/auth";
import SignupForm from "../components/SignupForm";

const Home = () => {
  if (!Auth.loggedIn()) {
    return (
      <>
        <SignupForm /> <p>"please log in"</p>
      </>
    );
  }
  return (
    <>
      <p>"you have logged in"</p>
      <div className="container">
        <h2>This is where we can start creating lists</h2>
        <button className="btn">CREATE</button>{" "}
      </div>
    </>
  );
};

export default Home;
