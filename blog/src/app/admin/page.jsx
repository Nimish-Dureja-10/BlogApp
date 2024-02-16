import styles from "./admin.module.css";
import {Suspense} from "react";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUser from "@/components/adminUser/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.column}>
          <AdminPostForm userId={session.user.id}/>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUser />
          </Suspense>
        </div>
        <div className={styles.column}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  )
}

export default AdminPage