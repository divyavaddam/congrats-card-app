const element = (
  // Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Congratulations</h1>
    <div className="congratsCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="personImage"
      />
      <h1 className="name">Kiran V</h1>
      <p className="institute">
        Vishnu institute of Computer Education and Technology Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watchImage"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
