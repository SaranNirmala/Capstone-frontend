/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import styles from "./Temp3.module.css";
import dp from "./user.jpg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useInput } from "../UserInput/UserInput";
import { Link } from "react-router-dom";
import { backendUrl } from "../../../config";

const Temp3 = () => {
  const { getID, setID } = useInput();
  // console.log(getID);
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
      doc.save("temp3.pdf");
    });
  };

  return (
    <div className={styles.topContainer}>
      <div
        className="wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          minHeight: "100vh",
        }}
      >
        <div className="resume">
          <div className="container">
            <div className={styles.tempContainer}>
              <div className={styles.leftSide}>
                <div className={styles.profile}>
                  <div className={styles.namebox}>
                    <h1 className={styles.name}>{showData.name} </h1>
                  </div>
                </div>
                <div className={styles.summary}>
                  <h2 className={styles.sumHead}>Summary</h2>
                  <p className={styles.para}>{showData.summary}</p>
                </div>
                <h2 className={styles.expHead}>Experience</h2>
                <div className={styles.experience}>
                  <ul type="none" className={styles.lists}>
                    <li>
                      <h5 className={styles.companyTitle}>
                        {showData.companyName}
                      </h5>
                      <div className={styles.exp}>
                        <h5 className={styles.companyTitle}>
                          {showData.desig}
                        </h5>
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
                        <h5 className={styles.companyTitle}>
                          {showData.desig1}
                        </h5>
                        <h5 className={styles.companyTitle}>
                          {showData.expYearStart1} - {showData.expYearEnd1}
                        </h5>
                      </div>
                      <p className={styles.para}>{showData.explanation1}</p>
                    </li>{" "}
                    <br />
                    <li>
                      <h5 className={styles.companyTitle}>{showData.companyName2}</h5>
                      <div className={styles.exp}>
                        <h5 className={styles.companyTitle}>
                          {showData.desig2}
                        </h5>
                        <h5 className={styles.companyTitle}>
                          {showData.expYearStart2} - {showData.expYearEnd2}
                        </h5>
                      </div>
                      <p className={styles.para}>{showData.explanation2}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.profile}>
                  <div className={styles.profilePic}>
                    <img
                      src={dp}
                      alt="Profile Picture"
                      className={styles.imag}
                    />
                  </div>
                </div>
                <div className={styles.contacts}>
                  <h3 className={styles.headTitle}>Contact Information</h3>
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
                      </span>{" "}
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
                  </ul>
                </div>
                <div className={styles.education}>
                  <h3 className={styles.headTitle}>Education</h3>
                  <ul>
                    <li className={styles.degree}>{showData.education}</li>
                    <li className={styles.degree}>{showData.education1}</li>
                  </ul>
                </div>
                <div className={styles.skills}>
                  <h3 className={styles.headTitle}>Technical Skils</h3>
                  <ul>
                    <li className={styles.skilSet}>{showData.skills}</li>
                    <li className={styles.skilSet}>{showData.skills1}</li>
                    <li className={styles.skilSet}>{showData.skills2}</li>
                    <li className={styles.skilSet}>{showData.skills3}</li>
                  </ul>
                </div>
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

export default Temp3;
