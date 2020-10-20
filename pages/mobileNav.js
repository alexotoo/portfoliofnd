import Link from "next/Link";
import { useRouter } from "next/router";
import styles from "../styles/mobile.module.scss";

export default function MobileNav() {
  const router = useRouter();
  return (
    <div className={styles.nav_mobi__page_bg}>
      <div onClick={() => router.back()} className={styles.mobi_nav__cover}>
        <a className={styles.nav_mobi__page_close}></a>
      </div>

      <li className={styles.nav_mobi__page}>
        <Link href="/">
          <a className={styles.nav_mobi__page_link}>Home</a>
        </Link>

        <Link href="/projects">
          <a className={styles.nav_mobi__page_link}>Projects</a>
        </Link>

        <a
          href="https://hashnode.com/@alexooO"
          target="_blank"
          className={styles.nav_mobi__page_link}
        >
          Blog
        </a>
      </li>
    </div>
  );
}
