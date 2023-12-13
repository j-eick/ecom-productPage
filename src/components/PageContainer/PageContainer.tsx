import { ReactNode } from "react";
import styles from "./Index.module.scss";

export default function PageContainer({ children }: { children: ReactNode }) {
  return <div className={styles.index}>{children}</div>;
}
