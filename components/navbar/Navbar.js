import Link from "next/Link";
import styles from "../navbar/navbar.module.scss";
import Navlist from "./navlist/Navlist";
import logo from "../../public/images/logoAlexooO.svg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <img
          className={styles.logo}
          src={logo}
          alt=""
          height="40"
          width="180"
        />
      </Link>
      <ul className={styles.navbar__items}>
        <Navlist>home</Navlist>
        <Navlist>projects</Navlist>
        <li>
          <a
            className={styles.blog_link}
            href="https://hashnode.com/@alexooO"
            target="_blank"
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}
