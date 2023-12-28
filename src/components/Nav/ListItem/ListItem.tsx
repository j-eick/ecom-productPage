import { ReactNode } from "react";
import styles from "./ListItem.module.scss";
import classNames from "classnames";

type listItemProps = {
  children: ReactNode;
  isSideMenuOpen: boolean;
};

export default function ListItem({ children, isSideMenuOpen }: listItemProps) {
  const styleClasses = classNames(styles.listeItem, {
    [styles.close]: !isSideMenuOpen,
    [styles.open]: isSideMenuOpen,
  });

  return (
    <div className={styleClasses} data-sidemenu={isSideMenuOpen}>
      {children}
    </div>
  );
}
