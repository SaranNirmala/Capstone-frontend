import styles from "./HomeComponent.module.css";
import Navbar from "../Navbar/Navbar";
import Maincontent from "../Maincontent/Maincontent";

const HomeComponent = () => {
  return (
    <div className={styles.homeContent}>
      <Navbar />
      <Maincontent />
    </div>
  );
};

export default HomeComponent;
