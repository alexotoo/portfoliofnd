import Link from "next/Link";
import style from "./mobinavbar.module.scss";
import logo from "../../../public/images/logoAlexooO.svg";

export default function MobiNavbar() {
  return (
    <div className={style.bg}>
      <Link href="/">
        <img className={style.logo} src={logo} alt="" height="40" width="180" />
      </Link>
      <Link href="/mobileNav">
        <span className={style.mobi_nav__cover}>
          <div className={style.mobi_nav__item}></div>
        </span>
      </Link>
    </div>
  );
}
