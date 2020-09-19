import React from "react";

const About = () => {
  return (
    <div>
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
        <Link href="/about">
          <a className={styles.button}>Learn More</a>
        </Link>
        <hr className={styles.divider} />
      </section>
    </div>
  );
};

export default About;
