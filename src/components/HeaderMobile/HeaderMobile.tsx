import { ReactNode } from "react";
import styles from "./HeaderMobile.module.scss";

export default function HeaderMobile({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
