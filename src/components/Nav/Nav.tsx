import { ReactNode } from "react";
import styles from "./Nav.module.scss";

export default function Nav({ children }: { children: ReactNode }) {
  return <div className={styles.nav}>{children}</div>;
}
