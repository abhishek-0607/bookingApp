import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.css";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (e) {
      dispatch({ type: "LOGIN_FAILURE", payload: e.response.data });
    }
  };
  console.log(user);
  return (
    <div className="login">
      <div className="lContainer">
        <div className="Ilabel">
          <label className="label">Username</label>
        </div>
        <input
          type="text"
          id="username"
          onChange={handleChange}
          placeholder="enter username"
          className="lInput"
        />
        <div className="Ilabel">
          <label className="label">Password</label>
        </div>

        <input
          type="password"
          id="password"
          onChange={handleChange}
          placeholder="enter password"
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};
