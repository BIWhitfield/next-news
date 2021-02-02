import Toolbar from "../components/toolbar";

import styles from "../styles/EOM.module.css";

export const EOM = ({ employee }) => {
  const { name, position, image, description } = employee;
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee of the month</h1>

        <div className={styles.employeeOfTheMonth}>
          <h3>{name}</h3>
          <h6>{position}</h6>
          <img src={image} />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );

  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;
