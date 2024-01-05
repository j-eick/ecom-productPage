import { ReactNode } from "react";
import styles from "./ProductContainer.module.scss";

type ProductContainerProps = {
  children: ReactNode;
};

export default function ProductContainer({ children }: ProductContainerProps) {
  return <section className={styles.productContainer}>{children}</section>;
}
