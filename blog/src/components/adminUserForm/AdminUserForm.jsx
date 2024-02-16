"use client";
import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type={"text"} placeholder={"Username"} name={"username"} />
      <input type={"email"} placeholder={"Email Address"} name={"email"} />
      <input type={"password"} placeholder={"Password"} name={"password"} />
      <input type={"text"} placeholder={"Image_Url"} name={"img"} />
      <select name='isAdmin'>
        <option value={'false'}>isAdmin?</option>
        <option value={'false'}>No</option>
        <option value={'true'}>Yes</option>
      </select>
      <button>Add User</button>
      {/* {state && state?.error} */}
    </form>
  );
};

export default AdminUserForm;
