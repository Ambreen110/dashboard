import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Test</span>
        <span className={styles.number}>1000</span>
        <span className={styles.detail}>
          <span className={ styles.positive }>
            50%
          </span>{" "}
          50 than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;