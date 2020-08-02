import Link from "next/Link";
import style from "./mobinavbar.module.scss";

export default function MobiNavbar() {
  return (
    <div>
      <Link href="/mobileNav">
        <span className={style.mobi_nav__cover}>
          <div className={style.mobi_nav__item}></div>
        </span>
      </Link>
    </div>
  );
}
