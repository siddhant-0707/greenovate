import React, { useState } from "react";
import axios from "axios";

import Navbar from "../navbar/Navbar";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orgName, setOrgName] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      url: "https://greenovate-server.vercel.app/api/auth/signup",
      headers: { "Content-Type": "application/json" },
      data: {
        email: email,
        password: password,
        organizationName: orgName,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          setSignupSuccess(true);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />
      <h2>Sign Up</h2>
      {signupSuccess ? (
        <div>
          <p>Signup successful! You can now log in.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Organization Name:</label>
            <input
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Signup;
