import styles from "../navbar/navbar.module.scss";
import Navlist from "./navlist/Navlist";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__items}>
        <Navlist>home</Navlist>
        <Navlist>about</Navlist>
        <Navlist>portfolio</Navlist>
        <Navlist>blog</Navlist>
        <Navlist>contact</Navlist>
      </ul>
    </nav>
  );
}
