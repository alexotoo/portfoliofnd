import style from "./navlist.module.scss";
import Link from "next/Link";

function Navlist(props) {
  const index = "/";
  const linksHref = props.children == "home" ? index : `/${props.children}`;
  return (
    <li className={style.navbar__item}>
      <Link href={linksHref}>
        <a className={style.navbar__item_link}>{props.children}</a>
      </Link>
    </li>
  );
}

export default Navlist;
