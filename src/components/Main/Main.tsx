import { ReactNode } from "react";
import styles from "./Main.module.scss";

type MainProps = {
  children: ReactNode;
  isSidemenuOpen: boolean;
};

export default function Main({ children, isSidemenuOpen }: MainProps) {
  return (
    <div className={styles.main}>
      {isSidemenuOpen && <span className={styles.cover} />}
      {children}
    </div>
  );
}
