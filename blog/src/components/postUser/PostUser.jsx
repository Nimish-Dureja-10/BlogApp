import { getUser } from "@/lib/data";
import Image from "next/image";
import styles from "./postUser.module.css";

// Fetch Data with an api
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     return error;
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
    // Fetch data with an api
    // const data = await getData(userId);

    // Fetch data without an api
    const data = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image className={styles.avatar} src={data.img ? data.img : "/noavatar.png"} alt="Blog-Img" width={50} height="50" />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{data?.username}</span>
      </div>

    </div>
  );
};

export default PostUser;
