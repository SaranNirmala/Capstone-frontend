import CardContent from "./CardContent";
import styles from "./TemplateDesign.module.css";
import tempImg from "./Images.jpg";
import temp2 from "./Temp.jpg";
import dp from "./cv.png";
import dpPhoto from "./login 2.png";
import temp3 from "./Temp3.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
const TemplateDesign = () => {
  // eslint-disable-next-line no-unused-vars

  // eslint-disable-next-line no-unused-vars
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    // setLogout(true);
  };

  const handleClick = () => {
    setShowProfile(!showProfile);
  };
  const profileVariable =
    sessionStorage.getItem("user") &&
    JSON.parse(sessionStorage.getItem("user"));

  return (
    <div>
      <div className={styles.cardcontainer}>
        <div className={styles.navTop}>
          <img src={dp} alt="" className={styles.image} />

          <div className={styles.rightNav}>
            <button className={styles.dpBtn} onClick={handleClick}>
              <img src={dpPhoto} alt="" className={styles.profile} />
            </button>
          </div>
        </div>
        {showProfile && (
          <div className={styles.dropDown}>
            <div className={styles.profileContent}>
              <h6>{profileVariable.name}</h6>
              <h6>{profileVariable.email}</h6>
            </div>
            <button className={styles.btn}>
              <Link to="/" className={styles.linkBtn} onClick={handleLogout}>
                Logout
              </Link>
            </button>
          </div>
        )}
        <div>
          <h1 className={styles.tempHead}>
            Choose the resume that will help you get hired faster!!
          </h1>
          <div className={styles.card}>
{/*  Passing the reuseable component from CardComponent */}
            <CardContent img={tempImg} text="Template1" tempID="1" />
            <CardContent img={temp2} text="Template2" tempID="2" />
            <CardContent img={temp3} text="Template3" tempID="3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDesign;
