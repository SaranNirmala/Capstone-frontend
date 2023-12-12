/* eslint-disable no-unused-vars */

import { useState } from "react";
import { backendUrl } from "../../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ForgotPassword.module.css";
import { Navigate } from "react-router-dom";

const ResetPassword = () => {
  //    const navigate=useNavigate();
  const [data, setData] = useState({
    password: "",
  });

  const [resetPassword, setResetPassword] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${backendUrl}/resetPassword`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    // eslint-disable-next-line no-unused-vars
    const res = await response.json();
    if (response.status === 401) {
      alert("Reset validation error");
      toast.error("Reset Validation error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      alert("Password reset successfully");
      toast.success("Password reset successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setResetPassword(true);
      setData({
        password: "",
      });
    }
  };
  if (resetPassword === true) {
    return <Navigate to={"/login"} replace />;
  }
  // console.log(data)

  return (
    <div className={styles.maindiv}>
      <div className={styles.container}>
        <h5>Reset your password</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Enter your Password"
            onChange={handleChange}
            className={styles.input}
            required
          />{" "}
          <br />
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>{" "}
        <br />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ResetPassword;
