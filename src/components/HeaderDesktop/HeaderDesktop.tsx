import { ReactNode } from "react";
import styles from "./HeaderDesktop.module.scss";

export default function HeaderDesktop({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
