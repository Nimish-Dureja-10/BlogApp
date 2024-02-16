import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";
// import { getPost } from "@/lib/temoData";
import Image from "next/image";
import { Suspense } from "react";
import styles from "./singlePost.module.css";

// Fetch data with an api
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`,{cache:"no-store"});
//   if(!res.ok) {
//     return error;
//   }
//   return res.json();
// }

export const generateMetadata = async ({params}) => {
  const {slug} = params;
  const post = await getPost(slug);
  return {
    title : post.title,
    description : post.desc,
  }
}

const SinglePostPage = async ({params}) => {
  const {slug} = params;
  // Fetch data with an api
  // const data = await getData(slug);

  // fetch data without an api
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && <div className={styles.imgContainer}>
        <Image className={styles.img} src={post.img} alt="Blog-Img" fill />
      </div>}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && <Suspense fallback={<div>Loading....</div>}>
            <PostUser userId={post?.userId} />
          </Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detialTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className={styles.content}>
            {post?.desc}
          </div>
      </div>
    </div>
  )
}

export default SinglePostPage