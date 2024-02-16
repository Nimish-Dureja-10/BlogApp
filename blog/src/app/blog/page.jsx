import Postcard from "@/components/postCard/Postcard";
import { getPosts } from "@/lib/data";
// import { getPosts } from "@/lib/temoData";
import styles from "./blog.module.css";

// Fetching data with an api
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if(!res.ok) {
//     return error;
//   }
//   return res.json();
// }

const BlogPage = async () => {
  // Fetch data with an api
  // const posts = await getData();

  // Fetch data without an api
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <Postcard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
