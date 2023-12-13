import styles from "./Header.module.scss";

type headerProps = {
  children: React.ReactNode;
};

export default function Header({ children }: headerProps) {
  return <div className={styles.header}>{children}</div>;
}
