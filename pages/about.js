import Link from "next/link";
import aboutStyle from "../styles/about.module.scss";

const About = () => {
  return (
    <div>
      <h1 className={aboutStyle.tii}>this is about page</h1>
      <Link href="/contact">
        <a>Back to contact</a>
      </Link>
    </div>
  );
};

export default About;
