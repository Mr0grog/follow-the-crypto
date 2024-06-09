import Link from "next/link";
import sharedStyles from "../shared.module.css";
import styles from "./header.module.css";

export default function Logo() {
  return (
    <header className={sharedStyles.fullWidth}>
      <div className={styles.logo}>
        <Link className={styles.logoText} href="/">
          &darr; Follow the Crypto &darr;
        </Link>
      </div>
    </header>
  );
}
