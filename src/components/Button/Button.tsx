import classNames from "classnames";
import styles from "./Button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: string;
  children: ReactNode;
};

export default function Button({ children, variant, ...props }: ButtonProps) {
  const styleClasses = classNames({
    [styles.thumbnailArrow]: variant === "thumbnailArrow",
  });

  return (
    <button className={`${styleClasses}`} {...props}>
      {children}
    </button>
  );
}
