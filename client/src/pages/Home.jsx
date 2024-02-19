import Auth from "../utils/auth";

const Home = () => {
  return (
    <div className="container">
      <p>starter for infinity order thingy</p>
      <div className="box">
        <h2>Pool 1</h2>
        <div>
          <button className="activate-button">Activate</button>
          <img className="image" src="image1.jpg" alt="Image 1" />
          <button className="remove-button">Remove</button>
        </div>
        <div>
          <button className="activate-button">Activate</button>
          <img className="image" src="image1.jpg" alt="Image 1" />
          <button className="remove-button">Remove</button>
        </div>

        <div>
          <button className="activate-button">Activate</button>
          <img className="image" src="image2.jpg" alt="Image 2" />
          <button className="remove-button">Remove</button>
        </div>
      </div>
      <div className="box">
        <h2>Pool 2</h2>
        <div>
          <button className="activate-button">Activate</button>
          <img className="image" src="image3.jpg" alt="Image 3" />
          <button className="remove-button">Remove</button>
        </div>
        <div>
          <button className="activate-button">Activate</button>
          <img className="image" src="image4.jpg" alt="Image 4" />
          <button className="remove-button">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
