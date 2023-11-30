/* eslint-disable no-unused-vars */
import styles from './Maincontent.module.css';
import dp from './img3.png'
import { Link } from 'react-router-dom';
import image from './images1.jpeg';
const Maincontent = () =>{
    return (
        <div className={styles.homeContainer}>
            <div className={styles.content}>
              <img src={dp} alt="Resume background" className={styles.imag} /> 
             
            </div>
            <div className={styles.content_container}> 
               <div className={styles.card}>
                <h2 className={styles.mainHead}>Create your Professional CV in just 5 minutes</h2> <br /> <br />
                <ul type="none">
                  <li className={styles.listItem}>Let your qualifications and experience shine with an exceptional CV</li>
                  <li className={styles.listItem}>Easily dowload your CV as a PDF</li>
                  <li className={styles.listItem}>Pick a template and place your information</li>
                </ul>
             </div>
            </div>
        </div>
    )
}

export default Maincontent;

