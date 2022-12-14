import React from "react";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";

const Dashboard = ({ data }) => {
  console.log(data);
  return (
    <div className="dashboard-container">
      <div className="container-1">
        <div className="welcome-alert">
          <h3> Good Morning, John! </h3>
          <p> What delecious meal are you craving for today? </p>
        </div>
        <div className="nav-bar-container">
          <div className="nav-bar-div">
            <NavLink className="NavLink" to="/">
              <i class="fa-solid fa-house"></i>
              Dashboard
            </NavLink>
            <NavLink className="NavLink" to="profile">
              <i class="fa-solid fa-address-card"></i>
              Your Profile
            </NavLink>
            <NavLink className="NavLink" to="order">
              <i class="fa-solid fa-folder-closed"></i>
              Your Order
            </NavLink>
            <NavLink className="NavLink" to="cart">
              <i class="fa-solid fa-cart-arrow-down"></i>
              Cart
            </NavLink>
          </div>
          <div className="food-list-container">
            {data &&
              data?.map((item, index) => (
                <div className="food-list-container-content">
                  <div className="food-list-container-div">
                    <img src={item?.food} alt="" />
                    <h3> {item?.name} </h3>
                    <p> {item?.content} </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="container-2">
        <img src={require("../Images/sign-up-background.png")} alt="" />
        <h3> Blueberry Toasts and smoothie </h3>
        <p>
          Just have a single bite of this Black Forest pastry and it will all
          make a proper sense to you. The kick of cherry and rich chocolate of
          this super light, airy pastry will definitely make you feel "wow". The
          perfect combination of cherry cream and rich chocolate can provide the
          ultimate fulfillment to your dessert craving.
        </p>
        <div>
          <div> NGN 2000.00 </div>
          <div> 10-20 Mins </div>
          <div> 10 Pcs Avail </div>
          <div>
            <div>
              <button> - </button>
              <p> 3 </p>
              <button> + </button>
            </div>
            <button> Add to cart </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
