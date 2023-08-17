import React from "react";
import Header from "../home/Header";
// import Footer from "../home/Footer";
import "./Home.css";
import Navigation from '../navigation/navigation'
import { FaPlus } from "react-icons/fa";
import Support from "../support";

const Home = () => {
  const receivedItems = [
    {
      name: "Apples",
      type: "veg",
      quantity: 20,
      receivedDate: "2022-03-15",
      status: "active",
    },
    {
      name: "Bread",
      type: "veg",
      quantity: 10,
      receivedDate: "2022-03-14",
      status: "taken",
    },
    {
      name: "Carrots",
      type: "veg",
      quantity: 15,
      receivedDate: "2022-03-12",
      status: "taken",
    },
    {
      name: "Potatoes",
      type: "veg",
      quantity: 8,
      receivedDate: "2022-03-10",
      status: "taken",
    },
    {
      name: "Bananas",
      type: "veg",
      quantity: 25,
      receivedDate: "2022-03-08",
      status: "taken",
    },
  ];

  const checkAuth = () => {
    console.log("hi");
    if (!localStorage.getItem("uid")) {
      window.location = "/login";
    }
  };

  return (
    <>
      <div onLoad={checkAuth()}>
        <Navigation />
        <div className="gradient__bg">
          <Header />
          {/* <Input /> */}
        </div>

        <div className="app-background">
          <h1>Donated items by you</h1>
          <div className="main-container">
            <div className="add-item-box">
              <input
                onClick={() => {
                  window.location = "/donation";
                }}
                className="add-item-input"
                placeholder="Add an item..."
              />
              <FaPlus />
            </div>
            <div className="item-list">
              {receivedItems.map((item, index) => (
                <div className="item-container">
                  <faCheckCircle color="green" />
                  <div className="item-names">{item.name}</div>
                  <div className="item-type">{item.type}</div>
                  <div className="item-quantity">{item.quantity}</div>
                  <div className="item-received-date">{item.status}</div>
                  <div className="quantity">
                    <span> {item.quantity} </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Support />
    </>
  );
};

export default Home;
