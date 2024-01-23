import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={"https://images.pexels.com/photos/19899425/pexels-photo-19899425/free-photo-of-mt-machhapuchree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="Blog-Img" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src={"https://images.pexels.com/photos/8458768/pexels-photo-8458768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="Blog-Img" width={50} height="50" />
          <div className={styles.detailText}>
            <span className={styles.detialTitle}>Author</span>
            <span className={styles.detailValue}>Nimish Dureja</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detialTitle}>Published</span>
            <span className={styles.detailValue}>22.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Facere, itaque saepe unde mollitia asperiores ea,
            eligendi expedita sunt sapiente odio natus veniam 
            consequuntur enim tenetur!
          </div>
      </div>
    </div>
  )
}

export default SinglePostPage