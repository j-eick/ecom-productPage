import { ReactNode } from "react";
import styles from "./UList.module.scss";

export default function UList({ children }: { children: ReactNode }) {
  return <div className={styles.ul}>{children}</div>;
}
