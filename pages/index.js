import Toolbar from "../components/toolbar";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>NextJS News App</h1>
        <h3>Your one stop shop for news shit</h3>
      </div>
    </div>
  );
}
