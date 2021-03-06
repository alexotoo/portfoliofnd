import Head from "next/head";
import Link from "next/Link";

import styles from "../styles/index.module.scss";

import { FaMobileAlt, FaEnvelope } from "react-icons/fa";

import img1 from "../public/images/skill-reactjs.png";
import img2 from "../public/images/skills-bootstrap5.png";
import img3 from "../public/images/skills-css.png";
import img4 from "../public/images/skills-html5.png";
import img5 from "../public/images/skills-js.png";
import img6 from "../public/images/skills-materializecss.png";
import img7 from "../public/images/skills-nextjs-logo.png";
import img8 from "../public/images/skills-node js.jpeg";
import img9 from "../public/images/skills-Photoshop.png";
import img10 from "../public/images/skills-sass.jpeg";
import img11 from "../public/images/skills-tailwind.jpg";
import img12 from "../public/images/skils-git.jpeg";
import profilepic from "../public/images/profile-pic.png";

import imgprjt1 from "../public/images/project1.png";
import imgprjt2 from "../public/images/project2.png";
import imgprjt3 from "../public/images/project3.png";
import imgprjt4 from "../public/images/project4.png";
import imgprjt5 from "../public/images/project5.png";
import imgprjt6 from "../public/images/project6.png";
import imgprjt7 from "../public/images/project7.png";
import EmailForm from "../components/email/EmailForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AlexooO portfolio</title>
      </Head>
      <main>
        <section className={styles.home_main}>
          <div className={styles.home}>
            <h5 className={styles.heading_greet}>Hello!</h5>
            <h1 className={styles.heading}>I'm Alex Otoo</h1>
            <p className={styles.heading_text}>a web developer</p>
            <p className={styles.content_text}>
              Inspired to be the best, among the best and build you the best
              websites/web solutions.
              <br />
              <br /> I am a web developer currently focused on front-end
              development based in Toronto. I am highly motivated to use web
              development skills I have to bring business solutions on the web
              in an amazing way!.
              <br /> <br /> I am currently available for a suitable web
              development position and ready to learn more.
            </p>
            <Link href="/contact">
              <a className={styles.button}>hire me</a>
            </Link>
          </div>
          <div className={styles.home1}>
            <img src={profilepic} alt="" className={styles.profilepic} />
          </div>
        </section>
        <hr className={styles.divider} />

        {/* project section  */}
        <section className={styles.projects}>
          <h1 className={styles.title}>
            My <span className={styles.title_blue}>Projects</span>
          </h1>
          <p className={styles.content_text}>
            Welcome to my Projects. Below are my skills set and fun projects I
            have made. Enjoy!
          </p>
          <div className={styles.projects_showcase}>
            <div className={styles.projects_skills}>
              <p className={styles.skill_title}>skills</p>
              <div className={styles.projects_skills_container}>
                <article className={styles.projects_skill_card}>
                  <img
                    src={img1}
                    alt=""
                    className={styles.projects_skill_card_img}
                  />
                  <p className={styles.projects_skill_card_text}>React JS</p>
                </article>
                <article className={styles.projects_skill_card}>
                  <img
                    src={img2}
                    alt=""
                    className={styles.projects_skill_card_img}
                  />
                  <p className={styles.projects_skill_card_text}>Bootstrap</p>
                </article>
                <article className={styles.projects_skill_card}>
                  <img
                    src={img3}
                    alt=""
                    className={styles.projects_skill_card_img}
                  />
                  <p className={styles.projects_skill_card_text}>CSS</p>
                </article>
                <article className={styles.projects_skill_card}>
                  <img
                    src={img4}
                    alt=""
                    className={styles.projects_skill_card_img}
                  />
                  <p className={styles.projects_skill_card_text}>HTML</p>
                </article>
                <article className={styles.projects_skill_card}>
                  <img
                    src={img5}
                    alt=""
                    className={styles.projects_skill_card_img}
                  />
                  <p className={styles.projects_skill_card_text}>JavaScript</p>
                </article>
                <article className={styles.projects_skill_card}>
                  <img
                    src={img6}
                    alt=""
                    className={styles.projects_skill_card_img}
                  />
                  <p className={styles.projects_skill_card_text}>materialize</p>
                </article>
                <article className={styles.projects_skill_card}>
                  <img
                    src={img7}
                    alt=""
                    className={styles.projects_skill_card_img}
                  />
                  <p className={styles.projects_skill_card_text}>Next JS</p>
                </article>
                <article className={styles.projects_skill_card}>
                  <img
                    src={img8}
                    alt=""
                    className={styles.projects_skill_card_img}
                  />
                  <p className={styles.projects_skill_card_text}>Node JS</p>
                </article>
                <article className={styles.projects_skill_card}>
                  <img
                    src={img9}
                    alt=""
                    className={styles.projects_skill_card_img}
                  />
                  <p className={styles.projects_skill_card_text}>Photoshop</p>
                </article>
                <article className={styles.projects_skill_card}>
                  <img
                    src={img10}
                    alt=""
                    className={styles.projects_skill_card_img}
                  />
                  <p className={styles.projects_skill_card_text}>SASS</p>
                </article>
                <article className={styles.projects_skill_card}>
                  <img
                    src={img11}
                    alt=""
                    className={styles.projects_skill_card_img}
                  />
                  <p className={styles.projects_skill_card_text}>Tailwind</p>
                </article>
                <article className={styles.projects_skill_card}>
                  <img
                    src={img12}
                    alt=""
                    className={styles.projects_skill_card_img}
                  />
                  <p className={styles.projects_skill_card_text}>Git</p>
                </article>
              </div>
            </div>

            <div className={styles.project_outter_container}>
              <p className={styles.skill_title}>Projects</p>
              <p className={styles.skill_info}>
                click image to visit website or the button below it to view
                code.
              </p>
              <div className={styles.project_inner_container}>
                <article className={styles.project_video_card}>
                  <a href="https://tailwindproj.netlify.app/" target="_blank">
                    <img
                      src={imgprjt1}
                      alt=""
                      className={styles.project_video}
                    />
                  </a>
                  <div className={styles.project_btn}>
                    <a href="" className={styles.button}>
                      Visit Code
                    </a>
                  </div>
                </article>
                <article className={styles.project_video_card}>
                  <a href="https://alexooo-agency.netlify.app/" target="_blank">
                    <img
                      src={imgprjt2}
                      alt=""
                      className={styles.project_video}
                    />
                  </a>
                  <div className={styles.project_btn}>
                    <a href="" className={styles.button}>
                      Visit Code
                    </a>
                  </div>
                </article>
                <article className={styles.project_video_card}>
                  <a href="https://burgerpalace.netlify.app/" target="_blank">
                    <img
                      src={imgprjt3}
                      alt=""
                      className={styles.project_video}
                    />
                  </a>
                  <div className={styles.project_btn}>
                    <a href="" className={styles.button}>
                      Visit Code
                    </a>
                  </div>
                </article>
                <article className={styles.project_video_card}>
                  <a href="https://xtremfit.netlify.app/" target="_blank">
                    <img
                      src={imgprjt4}
                      alt=""
                      className={styles.project_video}
                    />
                  </a>
                  <div className={styles.project_btn}>
                    <a href="" className={styles.button}>
                      Visit Code
                    </a>
                  </div>
                </article>
                <article className={styles.project_video_card}>
                  <a href="https://scooter-bikes.netlify.app/" target="_blank">
                    <img
                      src={imgprjt5}
                      alt=""
                      className={styles.project_video}
                    />
                  </a>
                  <div className={styles.project_btn}>
                    <a href="" className={styles.button}>
                      Visit Code
                    </a>
                  </div>
                </article>
                {/* <article className={styles.project_video_card}>
                  <a href="https://alexooo-cakes.netlify.app/" target="_blank">
                    <img
                      src={imgprjt6}
                      alt=""
                      className={styles.project_video}
                    />
                  </a>
                  <div className={styles.project_btn}>
                    <a href="" className={styles.button}>
                      Visit Code
                    </a>
                  </div>
                </article> */}
                <article className={styles.project_video_card}>
                  <a
                    href="https://reactjs-budget-app.netlify.app/"
                    target="_blank"
                  >
                    <img
                      src={imgprjt7}
                      alt=""
                      className={styles.project_video}
                    />
                  </a>
                  <div className={styles.project_btn}>
                    <a href="" className={styles.button}>
                      Visit Code
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <hr className={styles.divider} />

        <section className={styles.contact}>
          <EmailForm />
          <div className={styles.contact_contacts}>
            <div className={styles.contact_contacts_info}>
              <FaMobileAlt className={styles.info_icon} />
              <h1>+244 024 411 3073</h1>
            </div>
            <div className={styles.contact_contacts_info}>
              <FaEnvelope className={styles.info_icon} />
              <h1>alexotoous@gmail.com</h1>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
