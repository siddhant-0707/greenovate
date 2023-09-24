import React, { useState } from "react";
import axios from "axios";
import css from "./styles.module.css";
import Navbar from "../navbar/Navbar";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orgName, setOrgName] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  let navigator = useNavigate();
  if(signupSuccess){
    navigator("/dashboard");
  }

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
      <Container
        fluid
        style={{
          height: "100vh",
          paddingTop: "5rem",
          backgroundColor: "#F0F0F0",
          padding: "5rem 25rem 0",
        }}
        className={css.main}
      >
        <Row>
          <h2>Sign Up</h2>
        </Row>
        <Row>
          <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            {/* <label>Email:</label>
              <input
              type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              /> */}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </Form.Group>
            {/* <label>Password:</label>
              <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /> */}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Organization Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="OrganizationName"
                onChange={(e) => setOrgName(e.target.value)}
                value={orgName}
                required
              />
            </Form.Group>
            {/* <label>Organization Name:</label>
              <input
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              required
            /> */}

            <Button variant="warning" type="submit">
              Sign Up
            </Button>
          </form>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
