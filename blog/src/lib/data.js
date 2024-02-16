import { Post, User } from "./models";
import { connectDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
    try {
        connectDB();
        const posts = await Post.find();
        return posts;
    }catch(err) {
        console.log(err);
        throw new Error("Failed to fetch posts");
    }
}

export const getPost = async (slug) => {
    try {
        connectDB();
        // If We do find we would returned with an array but as we know
        // it is an unique value so we use findOne instead of only find.
        const post = await Post.findOne({slug});
        return post;
    }catch(err) {
        console.log(err);
        throw new Error("Failed to fetch post");
    }
}

export const getUsers = async () => {
    try {
        connectDB();
        const users = await User.find();
        return users;
    }catch(err) {
        console.log(err);
        throw new Error("Failed to fetch all user details");
    }
}

export const getUser = async (id) => {
    noStore();
    try {
        connectDB();
        const user = await User.findById(id);
        return user;
    }catch(err) {
        console.log(err);
        throw new Error("Failed to fetch user details");
    }
}