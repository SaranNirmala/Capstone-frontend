/* eslint-disable react/prop-types */

import styles from './CardContent.module.css';
import { Link } from "react-router-dom";



const CardContent = ({img, text, tempID}) => {


  const handleSubmit= (e) =>{
    e.preventDefault();
  }


  
    return (
     
        <div>
        <div className={styles.card}>
          <img src={img} alt="logoImage" className={styles.images} />
          <p style={{color:'black'}}>{text}</p>
          <div className={styles.btns}>
          {/* <button type="button" className={styles.previewbtn}>Preview</button> */}
          <span><button type="button" className={styles.inputbtn} onSubmit={handleSubmit}> 
            <Link to={`/input/?input=${tempID}`}>Edit Me!</Link></button></span>
          </div>
          </div>
        </div>
      
    )
}

export default CardContent