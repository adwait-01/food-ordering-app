import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.creativefabrica.com/2020/02/12/Food-Logo-Graphics-1-99-580x386.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  // console.log(props);
  // 1. Instead of (props), we can write ({resName, cuisine}) -> This is known as 'object destructuring' which we do in javascript. Instead of writing {props.resName} in the above case, we directly write {resName} in this case when we use that prop.
  // 2. We can also do -> const {resName, cuisine} = props; here and then use the same way instead of doing directly inside () -> which(1) is called object destructuring on the fly.
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk78m6tFENy9jRoCoL9y1vOiWL5WTRw3yUpg&s"
      />
      <h3>{props.resName}</h3>
      <p>{props.cuisine}</p>
      <p>4.3 stars</p>
      <p>29 mins</p>
    </div>
  );
};

// Generally data is not passed as string directly to each component right. 
// A data comes from backend to us in the form of a JSON. 

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Shawarma Express"
          cuisine="Middle Eastern, Lebanese, Mediterranean"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
