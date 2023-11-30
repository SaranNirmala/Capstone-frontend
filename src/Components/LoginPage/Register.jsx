import { useState } from "react";
import styles from "./Register.module.css";
import { backendUrl } from "../../../config";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate= useNavigate();

  // const [user,setUser] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${backendUrl}/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    await response.json();
    if(response.status === 409)
    {      toast.error("user Already exists", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    } 
    else{
      navigate('/login');
      sessionStorage.setItem("user", JSON.stringify(response));
    }

    setUser({
      name: "",
    email: "",
    password: "",
    })
    
  };

  if (
    sessionStorage.getItem("user") &&
    JSON.parse(sessionStorage.getItem("user"))
  ) {
    return <Navigate to={"/home"} replace />;
  }

  return (
    <div style={{height:'100vh' , width:'100vw' , backgroundColor:'#B3B6B7'}}>  
    <div className="container">
      <div className={styles.registrationPage}>
        <div className={styles.signup_container}>
          <div className={styles.left}>
            <h1>Welcome Back</h1>
            <Link to="/login">
              <button type="button" className={styles.white_btn}>LogIn</button>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} action="submit" onSubmit={handleSubmit}>
            <h1>Create Accout</h1>
            <div>
              <input
                type="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={styles.input}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email ID"
                className={styles.input}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={styles.input}
              />
            </div>
            <div>
              <button type="submit" className={styles.green_btn}>SignUp</button>
            </div>
          </form>
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

export default Register;
