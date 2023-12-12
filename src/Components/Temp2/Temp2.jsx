/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styles from "./Temp2.module.css";
import dp from "../Temp2/user.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { MyContext } from "../Context/context";
import { useInput } from "../UserInput/UserInput";
import { Link } from "react-router-dom";
import { backendUrl } from "../../../config";

const Temp2 = () => {
  const { getID, setID } = useInput();
  // console.log(getID);
  // const [getID, setID]= useContext(MyContext);
  // const [getID, setID]= inputValue();
  const [loader, setLoader] = useState(false);

  const [showData, setShowData] = useState({});
  const { accessToken } = JSON.parse(sessionStorage.getItem("user"));

  const handlegetDetails = async () => {
    // console.log("Getting details...", getID);
    const response = await fetch(`${backendUrl}/input/${getID}`, {
      headers: {
        "auth-token": accessToken,
      },
    });
    const res = await response.json();
    setShowData(res);
    // console.log(res);
  };
  useEffect(() => {
    handlegetDetails();
  }, []);
// download the Pdf file using html2canvas and jsPDF
  const downloadPDF = () => {
    const temp2capture = document.querySelector(".resume");
    setLoader(true);

    html2canvas(temp2capture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("temp2.pdf");
    });
  };

  return (
    <div>
      <div
        className="wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue",
          minHeight: "100vh",
        }}
      >
        <div className="resume">
          <div className={styles.container}>
            <div className={styles.leftSide}>
              <div className={styles.profileText}>
                <div
                  className={styles.profilePic}>
                  <img src={dp} alt="Profile_picture" className={styles.img} />
                </div>
                <h2 className={styles.header}>
                  {showData.name}
                  <br />
                </h2>
              </div>
              <div className={styles.contact}>
                <h2 className={styles.title}>Contact Info</h2>
                <ul className={styles.contactInfo} type="none">
                  <li className={styles.listItems}>
                    <span className={styles.icon}>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    {showData.email}
                  </li>
                  <li className={styles.listItems}>
                    <span className={styles.icon}>
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </span>
                    {showData.number}
                  </li>
                  <li className={styles.listItems}>
                    <span className={styles.icon}>
                      <i className="fa fa-github" aria-hidden="true"></i>
                    </span>
                    {showData.git}
                  </li>
                  <li className={styles.listItems}>
                    <span className={styles.icon}>
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </span>
                    {showData.linkedurl}
                  </li>
                  {/* <li className={styles.listItems}>
                    <span className={styles.icon}>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    {showData.address}
                  </li> */}
                </ul>
              </div>

              <div className={styles.education}>
                <h2 className={styles.titleEdu}>Education</h2>
                <ul className={styles.educationInfo} type="none">
                  <li className={styles.listEdu}>
                    <p className={styles.eduhead}>{showData.education}</p>
                    <p className={styles.eduhead}>{showData.education1}</p>
                  </li>
                </ul>
              </div>
              <div className={styles.skills}>
                <h2 className={styles.titleEdu}>Tech Skills</h2>
                <ul className={styles.skillInfo} type="none">
                  <li className={styles.listSkill}>{showData.skills}</li>
                  <li className={styles.listSkill}> {showData.skills1}</li>
                  <li className={styles.listSkill}> {showData.skills2}</li>
                  <li className={styles.listSkill}> {showData.skills3}</li>
                </ul>
              </div>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.summary}>
                <h2 className={styles.titleEdu}>Summary</h2>
                <p className={styles.sumpara}>{showData.summary}</p>
              </div>
              <div className={styles.experience}>
                <h2 className={styles.titleEdu}>Experience</h2>
                <ul type="none" className={styles.companyDetails}>
                  <li>
                    <h5 className={styles.companyTitle}>
                      {showData.companyName}
                    </h5>
                    <div className={styles.exp}>
                      <h5 className={styles.companyTitle}>{showData.desig}</h5>
                      <h5 className={styles.companyTitle}>
                        {showData.expYearStart} - {showData.expYearEnd}
                      </h5>
                    </div>
                    <p className={styles.para}>{showData.explanation}</p>
                  </li>{" "}
                  <br />
                  <li>
                    <h5 className={styles.companyTitle}>
                      {showData.companyName1}
                    </h5>
                    <div className={styles.exp}>
                      <h5 className={styles.companyTitle}>{showData.desig1}</h5>
                      <h5 className={styles.companyTitle}>
                        {showData.expYearStart1} - {showData.expYearEnd1}
                      </h5>
                    </div>
                    <p className={styles.para}>{showData.explanation1}</p>
                  </li>{" "}
                  <br />
                  <li>
                    <h5 className={styles.companyTitle}>
                      {showData.companyName2}
                    </h5>
                    <div className={styles.exp}>
                      <h5 className={styles.companyTitle}>{showData.desig2}</h5>
                      <h5 className={styles.companyTitle}>
                        {showData.expYearStart2} - {showData.expYearEnd2}
                      </h5>
                    </div>
                    <p className={styles.para}>{showData.explanation2}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.down}>
        <button className={styles.btnDownload}>
          <Link to="/template" className={styles.btnDownload}>
            Back to Template
          </Link>
        </button>
        <button
          className={styles.btnDownload}
          onClick={downloadPDF}
          disabled={!loader === false}
        >
          {loader ? <span>Downloading Resume</span> : <span>Download</span>}
        </button>
      </div>
    </div>
  );
};

export default Temp2;
