import { useState } from "react";
import styles from "./Login.module.css";
import { backendUrl } from "../../../config";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${backendUrl}/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await response.json();
    if (response.status === 401) {
      toast.error("Password Invalid", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // alert('invalid Password');
    } else if (response.status === 403) {
      // alert("Please Register ")
      toast.error("Please Register ", {
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
      console.log(result);
      toast.success('Login Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      navigate("/template");
      sessionStorage.setItem("user", JSON.stringify(result));
    }
  };

  console.log(data);
  if (
    sessionStorage.getItem("user") &&
    JSON.parse(sessionStorage.getItem("user"))
  ) {
    return <Navigate to={"/template"} replace />;
  }
  return (
    <div style={{height:'100vh' , width:'100vw' , backgroundColor:'#B3B6B7'}}>
    <div className="container">
      <div className={styles.loginPage}>
        <div className={styles.left}>
          <form
            className={styles.form_container}
            action="submit"
            onSubmit={handleSubmit}
          >
            <h1>Login</h1>
            <div>
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter your email ID"
                className={styles.input}
              />
            </div>
            <div>
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={styles.input}
              />
            </div>
            <div>
              <button type="submit" className={styles.green_btn}>
                Login
              </button>
              {/* <span><Link to='/register'>Create an account</Link></span> */}
            </div>
          </form>
          
        </div>
        <div className={styles.right}>
          <div className={styles.signin_container}>
            <h1>New Here!</h1>
            <Link to="/register">
              <button type="button" className={styles.white_btn}>
                create an account
              </button>
            </Link>
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
      </div>
    </div>
    </div>
  );
};

export default Login;
