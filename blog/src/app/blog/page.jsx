import Postcard from "@/components/postCard/Postcard";
import styles from "./blog.module.css";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <Postcard />
      </div>
      <div className={styles.post}>
        <Postcard />
      </div>
      <div className={styles.post}>
        <Postcard />
      </div>
      <div className={styles.post}>
        <Postcard />
      </div>
    </div>
  )
}

export default BlogPage