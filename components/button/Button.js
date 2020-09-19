import styles from "./button.module.scss";
function Button(props) {
  return <a className={styles.button}>{props.children}</a>;
}

export default Button;
