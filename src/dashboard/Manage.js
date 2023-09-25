import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Manage = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const decodedToken = jwt_decode(localStorage.getItem("token"));
    console.log(decodedToken);
    const userId = decodedToken.userId;

    const options = {
      method: "GET",
      url: `https://greenovate-backend.onrender.com/api/emission_delta_tips/${userId}/2020/2023/`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.tips);
        setTips(response.data.tips);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="my-4">Emission Reduction Tips</h1>
        <div className="row">
          {tips.map((tip, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{tip.tip}</h5>
                  <p className="card-text">{tip.reduction_message}</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">a. {tip.a}</li>
                    <li className="list-group-item">b. {tip.b}</li>
                    <li className="list-group-item">c. {tip.c}</li>
                    <li className="list-group-item">d. {tip.d}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Manage;
