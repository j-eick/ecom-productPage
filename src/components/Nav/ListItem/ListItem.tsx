import { ReactNode } from "react";
import styles from "./ListItem.module.scss";

export default function ListItem({ children }: { children: ReactNode }) {
  return <div className={styles.listItem}>{children}</div>;
}
