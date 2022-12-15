import React from "react";
import me from "../Assets/AMIR3.JPG";

const Home = () => {
  return (
    <div className="">
      <div className="d-flex justify-content-center align-item-center">
        <div className="py-5">
          <img className="border border-danger rounded-3" src={me} alt="" />
        </div>
        <div className="p-5 fs-5">
          <h1 className=" fst-italic ">Hi , there !</h1>
          <div>
            <span className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </span>
          </div>
          <div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, enim! Exercitationem
            </span>
          </div>
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
              neque.
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center fs-5">
        <h2 className="px-2">My Career So For </h2>
        <div>
          <span className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus
            voluptatum?
          </span>
          <div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ea.
            </span>
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
          </div>
        </div>
        <div className="m-1">
          <div
            className="badge text-dark text-wrap border border-dark m-1"
            style={{ width: 5 + "rem", height: 2 + "rem " }}
          >
            React.js
          </div>
          <div
            className="badge text-dark text-wrap border border-dark m-1"
            style={{ width: 5 + "rem", height: 2 + "rem " }}
          >
            React.js
          </div>
          <div
            className="badge text-dark text-wrap border border-dark m-1"
            style={{ width: 5 + "rem", height: 2 + "rem " }}
          >
            React.js
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
