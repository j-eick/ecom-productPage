import { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import styles from "./Sidemenu.module.scss";

console.clear();

type sideMenuProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  isSideMenuOpen: boolean;
  onClick?: () => void;
};

export default function Sidemenu({
  children,
  isSideMenuOpen,
  onClick,
}: sideMenuProps) {
  const containerClasses = classNames(styles.container, {
    [styles.closed]: !isSideMenuOpen,
    [styles.open]: isSideMenuOpen,
  });

  console.log(isSideMenuOpen);

  return (
    <div
      className={containerClasses}
      data-sidemenu={isSideMenuOpen}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
