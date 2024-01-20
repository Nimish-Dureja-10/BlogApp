import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>
          About BlogiFY
        </h2>
        <h1 className={styles.title}>
          You can share your creative blogs with the outer world.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nisi, earum ipsum. Saepe cupiditate placeat alias fugiat 
          asperiores illo. Lorem ipsum dolor sit. Lorem, ipsum.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>Since 2024</h1>
            <p>Successfully Running</p>
          </div>
          <div className={styles.box}>
            <h1>10K+ Users</h1>
            <p>On Our Platform</p>
          </div>
          <div className={styles.box}>
            <h1>50K+ Blog</h1>
            <p>Posted Here</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="Blogify_img" fill />
      </div>
    </div>
  )
}

export default AboutPage