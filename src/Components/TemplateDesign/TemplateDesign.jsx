import CardContent from "./CardContent";
import styles from './TemplateDesign.module.css';
import tempImg from './Images.jpg';
import temp2 from './Temp.jpg';
import dp from './cv.png';
import temp3 from './Temp3.jpg';
const TemplateDesign= () =>{

    return(
        <div>       
        <div className={styles.cardcontainer}>
         <div className={styles.navTop}>
         <img src={dp} alt="" className={styles.image} />
         <div className={styles.rightNav}>
          <button className={styles.btn}>signIn</button>
         </div>
         </div>
           <div>
           <h1 className={styles.tempHead}>Choose the resume that will help you get hired faster!!</h1>
           <div className={styles.card}>
              <CardContent img={tempImg} text='Template1' tempID='1'/>
              <CardContent  img={temp2} text='Template2' tempID='2'/>
              <CardContent  img={temp3} text='Template3' tempID='3'/>
            </div>
           </div>
        </div>
        </div>
    )
}

export default TemplateDesign;

