import React, { useState } from "react";
import "./page-styles.css";
import { getDocument, signIn } from "../firebase/firebaseService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const navigate = useNavigate();

  const adminSignIn = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsAdmin(true);

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      setIsLoading(true);
      const userCred = await signIn(email, password);
      const userId = userCred.user.uid;

      const isAdmin = await getDocument("admin", userId);

      console.log(`admin ${isAdmin}`);

      if (isAdmin) {
        e.target.reset();
        navigate("/", { replace: true });
      }
      setIsAdmin(false);
    } catch (error) {
      console.log("error true");
      setIsError(true);
    }
    setIsLoading(false);
    setIsAdmin(false);

  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <p className="logo">UBTS</p>
        <p>The bus tracking system</p>
      </div>
      <div className="auth-right">
        <div className="auth-title-row">
          <p className="auth-title">Welcom Back!</p>
          <p className="auth-sub-title">Login to continue...</p>
        </div>
        <div className="auth-form-container">
          <form onSubmit={adminSignIn}>
            <div className="form-input-group">
              <label htmlFor="email">Email*</label>
              <input
                name="email"
                type="email"
                placeholder="someone@email.xyz"
                required
              />
            </div>
            <div className="form-input-group">
              <label htmlFor="password">Password*</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            {isError && (
              <p className="error-text">
                Invalid email or password! Please try again...
              </p>
            )}

            {!isAdmin && (
              <p className="error-text">You don't have admin access...</p>
            )}

            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
