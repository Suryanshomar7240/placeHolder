import React from "react";
// import Navbar from "../components/navbar/Navbar";
import Header from "../home/Header"
import Footer from "../home/Footer";
import Cards from "../home/Cards";
import Input from "../home/Input";

const Home = () => {
  return (
    <>
      <div>
        <div className="gradient__bg">
          {/* <Navbar /> */}
          <Header />
          <Input />
        </div>

        <div id= 'stalls' className="gradient__bg">
          <Cards />
        </div>
      </div>
      <div className="gradient__bg">
        <Footer />
      </div>
    </>
  );
};

export default Home;
