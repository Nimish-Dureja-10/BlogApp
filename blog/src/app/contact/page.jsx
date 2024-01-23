import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/contact.png"} alt="contact_img" className={styles.img} fill />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type={"text"} placeholder="Full Name" />
          <input type={"email"} placeholder="Your Email Address" />
          <input type={"text"} placeholder="Phone Number" />
          <textarea cols={'30'} rows="10" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage