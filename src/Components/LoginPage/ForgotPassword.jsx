import { useState } from "react";
import { backendUrl } from "../../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  //    const navigate=useNavigate();
  const [data, setData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  //  Fetch the data from the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${backendUrl}/forgotPassword`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    // eslint-disable-next-line no-unused-vars
    const res = await response.json();
    if (response.status === 401) {
      //    alert("Email invalid")
      toast.error("Email Invalid", {
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
      //   alert("We have sent the Link")
      toast.success("We have sent the Link Please check your mail", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setData({
        email: "",
      });
    }
  };

  // console.log(data)

  return (
    <div className={styles.maindiv}>
      <div className={styles.container}>
        <h5>Forgot your password</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter your email ID"
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

export default ForgotPassword;
