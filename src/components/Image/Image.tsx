import classNames from "classnames";
import styles from "./Image.module.scss";

type imgProps = {
  src: string;
  alt: string;
  width?: number;
  className?: string;
  variant?: string;
};

export default function Logo({ src, alt, width, variant }: imgProps) {
  const styleClasses = classNames({
    [styles.logo]: variant === "logo",
    [styles.cart]: variant === "cart",
    [styles.avatar]: variant === "avatar",
    [styles.default]: !variant,
  });

  return <img className={styleClasses} src={src} alt={alt} width={width} />;
}
