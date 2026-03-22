import styles from "./category.module.css"
import { useParams } from "react-router-dom";

const Category = () => {

  const { name } = useParams()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{name}</div>
    </div>
  );
};

export default Category;