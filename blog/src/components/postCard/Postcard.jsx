import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

const Postcard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src={"https://images.pexels.com/photos/8458768/pexels-photo-8458768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="Blog-Img" fill />
            </div>
            <span className={styles.date}>
                23.01.2024
            </span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>
                Title
            </h1>
            <p className={styles.desc}>Description</p>
            <Link className={styles.link} href={"/blog/post"}>READ MORE</Link>
        </div>
    </div>
  )
}

export default Postcard