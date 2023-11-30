import styles from './Navbar.module.css';
import logo from './cv.png';
import {Link} from 'react-router-dom'

const Navbar = () =>{
    return(
        
          <div className={styles.navTop}>
            <img src={logo} alt="logoImage" className={styles.image}/>
            
            <div className={styles.rightNav}>
             {/* <div className={styles.navcontent}> */}
                <input type="text" name='searchbar' placeholder='Search Here!!!' className={styles.searchInput}/>
                <button className={styles.btn}><Link to='/login'>SignIn</Link></button>
             </div>
          </div>
      
    )
}

export default Navbar