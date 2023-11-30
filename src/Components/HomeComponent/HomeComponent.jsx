import styles from './HomeComponent.module.css';
import Navbar from '../Navbar/Navbar';
import Maincontent from '../Maincontent/Maincontent';


const HomeComponent = () => {
    return (
       
        <div>
            <div className={styles.homeContent}>
              <Navbar />
              <Maincontent />
            </div>
        </div>
        
    )
}

export default HomeComponent;

{/* <h3 className={styles.pros} style={{color:'white'}}>The Best CV makes you shine</h3> */}