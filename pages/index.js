import Head from "next/head";
import styles from "../styles/index.module.scss";
import aboutpic from "../public/images/about.jpg";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <section className={styles.home}>
          <h5 className={styles.heading_greet}>Hello!!</h5>
          <h1 className={styles.heading}>I'm Alex Otoo</h1>
          <p className={styles.heading_text}>a web developer</p>
        </section>

        <section className={styles.about}>
          <h1 className={styles.title}>
            About <span className={styles.title_blue}>Me</span>
          </h1>
          <div className={styles.about_content}>
            <img
              className={styles.about_content_image}
              src={aboutpic}
              alt="about image"
            />
            <p className={styles.about_content_text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              distinctio, adipisci corrupti ex accusamus quo fugiat odit, quod
              itaque ipsum, unde laudantium veniam est vero laboriosam nulla.
              Velit, sit est!
            </p>
          </div>
          <a href="">learn more</a>
          <hr className={styles.divider} />
        </section>

        <section className={styles.portfolio}>
          <h1 className={styles.title}>
            My <span className={styles.title_blue}>Portfolio</span>
          </h1>
          <div className={styles.about_content}>
            <p className={styles.about_content_text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              distinctio, adipisci corrupti ex accusamus quo fugiat odit, quod
              itaque ipsum, unde laudantium veniam est vero laboriosam nulla.
              Velit, sit est!
            </p>
          </div>
        </section>
        <section className="blog"> this is blog</section>
        <section className="contact"> this is contact</section>
      </main>
    </div>
  );
}
