import React, { useState } from "react";
import "../signup/signup.css";
import { doc, getDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import "./donation.css";

const Donation = () => {
  const [data, SetData] = useState({
    name: "",
    type: "Veg",
    quantity: "",
    category: "Meal",
  });

  const [resturant, setresturant] = useState("");

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    SetData({ ...data, [name]: value });
    console.log(data.type);
  };

  const handleSubmit = async () => {
    const uid = localStorage.getItem("uid");

    getDoc(doc(db, "users", uid)).then((snap) => {
      if (!snap.exists()) throw new Error("not-found"); // document missing
      console.log(snap.data());
      setresturant(snap.data().typename);
    });

    addDoc(collection(db, "food"), {
      category: data.category,
      name: data.name,
      type: data.type,
      quantity: data.quantity,
      resturantname: resturant,
      resturantid: uid,
      status: "active",
    })
      .then(() => {
        window.location = "/restaurant";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section id="donation">
      <div style={{ height: "10vh" }}></div>
      <div className="signup-card">
        <div className="card-heading donation-heading">
          Enter Details of Food item
        </div>
        <div className="card-body">
          <form>
            <div className="form-row">
              <div className="signup-row-title">Food item name</div>
              <div className="signup-value">
                <input
                  className="signup-input"
                  type="text"
                  name="name"
                  onChange={handleInputs}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="signup-row-title">Category</div>
              <select
                className="signup-value"
                onChange={handleInputs}
                name="category"
                value={data.category}
              >
                <option value="Meal">Meal</option>
                <option value="Fruit">Fruit</option>
                <option value="Raw product">Raw product</option>
              </select>
            </div>

            <div className="form-row">
              <div className="signup-row-title">Food Type</div>
              <select
                className="signup-value"
                onChange={handleInputs}
                name="type"
                value={data.type}
              >
                <option value="Veg">Veg</option>
                <option value="Non-veg">Non-veg</option>
              </select>
            </div>

            <div className="form-row">
              <div className="signup-row-title">
                Food Quantity (# of serves, pieces or weight)
              </div>
              <div className="signup-value">
                <input
                  className="signup-input"
                  type="text"
                  name="quantity"
                  onChange={handleInputs}
                />
              </div>
            </div>
          </form>
          <div className="card-footer">
            <button
              className="signup-button"
              type="submit"
              onClick={handleSubmit}
            >
              Add Item
            </button>
            <button
              className="signup-button"
              type="submit"
              onClick={() => {
                window.location = "/";
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
