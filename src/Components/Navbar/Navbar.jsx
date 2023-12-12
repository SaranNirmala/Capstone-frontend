import styles from './Navbar.module.css';
import logo from './cv.png';
import {Link} from 'react-router-dom'

const Navbar = () =>{
    return(
        
          <div className={styles.navTop}>
            <img src={logo} alt="logoImage" className={styles.image}/>
            <h3 className={styles.pros} style={{color:'white'}}>The Best CV makes you shine</h3>
            <div className={styles.rightNav}>
               {/* <input type="text" name='searchbar' placeholder='Search Here!!!' className={styles.searchInput}/> */}
                < button className={styles.btn}><Link to='/login' className={styles.linkBtn}>SignIn</Link></button>
             </div>
          </div>
      
    )
}

export default Navbar