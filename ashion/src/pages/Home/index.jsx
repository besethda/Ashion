import Display from "../../components/Display";
import styles from "./home.module.css"

const Home = ({categories}) => {
  return (
    <div className={styles.container}>
      <Display categories={categories} />
    </div>
  );
};

export default Home;