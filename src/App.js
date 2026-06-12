import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // We could also write "./components/Header.js"
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
