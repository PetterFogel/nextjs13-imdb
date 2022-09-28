import { FC } from "react";
import styles from "./style/PageTitle.module.css";

type PageTitleProps = {
  title: string;
  isPrimary?: boolean;
};

export const PageTitle: FC<PageTitleProps> = ({ title, isPrimary }) => {
  const checkIfPrimary = isPrimary
    ? styles.primaryTitle
    : styles.secondaryTitle;

  return (
    <div className={styles.root}>
      <h1 className={checkIfPrimary}>{title}</h1>
    </div>
  );
};
