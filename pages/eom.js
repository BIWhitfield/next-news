import Image from 'next/image'
import Toolbar from "../components/toolbar";

import styles from "../styles/EOM.module.css";

export const EOM = () => {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee of the month</h1>

        <div className={styles.employeeOfTheMonth}>
          <h3>Ben</h3>
          <h6>Software Developer</h6>
          <Image className={styles.image} width={250} height={250} src='/images/Profile-Pic.jpg' />
          <p>Trying our NextJS</p>
        </div>
      </div>
    </div>
  );
};


export default EOM;
