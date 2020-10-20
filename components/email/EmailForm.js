import React from "react";
import emailjs from "emailjs-com";

import styles from "./emailForm.module.scss";

function EmailForm() {
  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_o423fbj",
  //       "template_8ht8i2r",
  //       e.target,
  //       "user_U6nR3pwtZTcb8hGE5GoHi"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }

  return (
    <form
      className={styles.form}
      action="/pages/submited"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" placeholder="your name" />
      <label>Email</label>
      <input type="email" name="user_email" placeholder="example@mail.com" />
      <label>Message</label>
      <textarea name="message" />
      <input className="submit" type="submit" value="Send" />
    </form>
  );
}

export default EmailForm;
