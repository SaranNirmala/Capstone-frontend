/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from "react";
import styles from "./Temp1.module.css";
import loginIcon from './login3.png';
import axios from "axios";
import { backendUrl } from "../../../config";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { MyContext } from "../Context/context";
import { useInput } from "../UserInput/UserInput";

const Temp1 = () => {
 
     const {getID, setID} = useInput()  
  // const [getID, setID]= useContext(MyContext);
  const [data, setData] = useState([]);
  const [loader, setLoader] =useState(false); 

  const [showData, setShowData] = useState({});
  const {accessToken} = JSON.parse(sessionStorage.getItem('user'));

  const handlegetDetails = async() => {
    console.log("Getting details...", getID)
    const response= await fetch(`http://localhost:5000/input/${getID}`, {
      headers:{
        "auth-token":accessToken,
    },
    });
       const res= await response.json();
       setShowData(res);
    console.log(res)

   }
useEffect(() =>{
    handlegetDetails()
},[])
const downloadPDF= () =>{
 
  const temp2capture = document.querySelector(".resume");
  setLoader(true);

  html2canvas(temp2capture).then((canvas) =>{
      const imgData= canvas.toDataURL('image/png');
      const doc=new jsPDF("p" , "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData,"PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("temp1.pdf");
  })
}
 
    return (
      <div className="wrapper">
      <div className="resume">
        <div className='container'>
          <div className={styles.tempContainer}>
            <div className={styles.leftSide}> 
             <div className={styles.profile}>
              <div className={styles.profileText}>
              <img src={loginIcon} alt="" className={styles.imag}/>
              </div>
              <h3 className={styles.heading}>{showData.name}</h3>
             </div>
             <div>
              <h3>Contact Information</h3>
              <ul className={styles.contactInfo} type='none'>
                     <li className={styles.listItems}><span className={styles.icon}><i className="fa fa-envelope" aria-hidden="true"></i></span>{showData.email}</li>
                     <li className={styles.listItems}><span className={styles.icon}><i className="fa fa-phone" aria-hidden="true"></i></span>{showData.number}</li>
                     <li className={styles.listItems}><span className={styles.icon}><i className="fa fa-github" aria-hidden="true"></i></span>{showData.git}</li>
                     <li className={styles.listItems}><span className={styles.icon}><i className="fa fa-linkedin-square" aria-hidden="true">{showData.linkedurl}</i></span></li>
                     <li className={styles.listItems}><span className={styles.icon}><i className="fa fa-map-marker" aria-hidden="true"></i></span><address>{showData.address}</address></li>
                    </ul>
             </div>
             <div className={styles.education}>
              <h3>Education</h3>
              <ul style={{marginLeft:'5px'}}>
                <li className={styles.degree}>{showData.education}</li>
              <li className={styles.degree}>{showData.education1}</li>
              </ul>
             </div>
             <div className={styles.skills}>
              <h3>Technical Skils</h3>
              <ul>
                <li className={styles.skilSet}>{showData.skills}</li>
                <li className={styles.skilSet}>{showData.skills1}</li>
                <li className={styles.skilSet}>{showData.skills2}</li>
                <li className={styles.skilSet}>{showData.skills3}</li>
                {/* <li className={styles.skilSet}>{showData.skills}</li>
                <li className={styles.skilSet}>{showData.skills}</li> */}
              </ul>
             </div>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.summary}>
                <h2>Summary</h2>  
                <p>{showData.summary}</p>
              </div>
              <div className={styles.experience}>
                <h2>Experience</h2>
                <ul type="none">
                  <li>
                    <h5>{showData.companyName}</h5>
                     <div className={styles.exp}>
                     <h5>{showData.desig}</h5>
                       <h5>{showData.expYearStart} - {showData.expYearEnd}</h5>
                     </div>
                     <p className={styles.para}>{showData.explanation}</p>
                  </li> <br />
                  <li>
                    <h5>{showData.companyName1}</h5>
                     <div className={styles.exp}>
                     <h5>{showData.desig1}</h5>
                       <h5>{showData.expYearStart1} - {showData.expYearEnd1}</h5>
                     </div>
                     <p className={styles.para}>{showData.explanation1}</p>
                  </li> <br />
                  <li>
                    <h5>{showData.companyName2}</h5>
                     <div className={styles.exp}>
                     <h5>{showData.desig2}</h5>
                       <h5>{showData.expYearStart2} - {showData.expYearEnd2}</h5>
                     </div>
                     <p className={styles.para}>{showData.explanation2}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
          <button className="btn-primary" 
          onClick={downloadPDF}
          disabled={!loader === false} 
          style={{border:'1px solid', borderRadius:'10px', padding:'10px'}}>
            {loader ? <span>Downloading Resume</span> : <span>Download</span>}
          </button>
          
        </div>
        </div>
    )
}

export default Temp1