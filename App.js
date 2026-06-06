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

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk78m6tFENy9jRoCoL9y1vOiWL5WTRw3yUpg&s"
      />
      <h3>Shawarma Express</h3>
      <p>Middle Eastern, Lebanese, Mediterranean</p>
      <p>4.3 stars</p>
      <p>29 mins</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
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
