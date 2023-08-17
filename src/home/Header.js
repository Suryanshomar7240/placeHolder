import React, { useState } from "react";
import people from "../assets/people.png";
import ai from "../assets/ai2.png";
import "./header.css";
// import ReactLoading from "react-loading";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 5 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        ease: "linear",
        duration: 0.5,
        x: { duration: 2 },
      }}
      className="sav__header section__padding"
      id="home"
    >
      <div className="sav__header-content">
        <h1>Donating one meal can save one life</h1>
        <p>
        Millions of people sleep with no food in their belly each day, with our platform we try to feed the hungry with the help of NGOs and your food contributions
        </p>

        <div className="sav__header-content__input">
          <div className="sav__header-content__input-div">
            {console.log("Hi"+localStorage.getItem("type"))}
          {
          localStorage.getItem("type") == "Resturant" ? (
              <Link to="/donation">
                <button
                  className="sav__header-content__input-ask"
                  type="button"
                >
                  Donate food
                </button>
              </Link>
            ) : (
              <Link to="/feed">
                <button
                  className="sav__header-content__input-ask"
                  type="button"
                >
                  Take food
                </button>
              </Link>
            )}
          </div>

          <a className="see-anchor" href="#features"></a>
        </div>

        <div className="sav__header-content__people">
          <img src={people} alt="" />
          <p>1000+ happy users!</p>
        </div>
      </div>

      <div className="sav__header-image">
        <img src={ai} alt="" />
      </div>
    </motion.div>
  );
};

export default Header;
