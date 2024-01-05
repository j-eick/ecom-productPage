// import Image from "../Image/Image";
import styles from "./Caroussel.module.scss";

export default function Caroussel() {
  return (
    <>
      <div className={styles.caroussel}>
        <span className={styles.previous} />
        <span className={styles.next} />
      </div>
    </>
  );
}
