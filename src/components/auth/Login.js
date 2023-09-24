import React, { useState } from "react";
import axios from "axios";

import Navbar from "../navbar/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      url: "https://greenovate-server.vercel.app/api/auth/login",
      headers: { "Content-Type": "application/json" },
      data: {
        email: email,
        password: password,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          setLoginSuccess(true);
          localStorage.setItem("token", response.data.token);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />
      <h2>Login</h2>
      {loginSuccess ? (
        <div>
          <p>Successful login!</p>
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
            <button type="submit">Login</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Login;
