import React, { useState } from "react";
import useAuth from "../../auth/useAuth";
import { Link, useLocation } from "react-router-dom";
import routes from "../../helpers/routes";
import { loginRequest } from "../../api/auth";
import "../../styles/style_login.css"; // Adjusted to your file structure

export default function Login() {
  const { login } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const userCredentials = { email, password };
    try {
      const response = await loginRequest(userCredentials);
      const responseData = response.data;
      login(responseData, location.state?.from);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-card">
      <img className="login-logo" src="../images/user.svg" alt="logo" />
      <h2 className="login-t2">Welcome Back</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="asd23"
          type="email"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="asd23"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              defaultChecked
              style={{ width: "16px", height: "16px", marginRight: "8px" }}
            />
            <label  style={{ marginRight: "10px" }}>Remember me</label>
          </div>
          <Link  className="text-decoration-none" to={routes.home}>Forgot your password?</Link>
        </div>

        <button type="submit">Sign In</button>
      </form>
      <footer>
        Need an account? Sign up <Link to={routes.registro}>here</Link>
      </footer>
    </div>
  );
}
