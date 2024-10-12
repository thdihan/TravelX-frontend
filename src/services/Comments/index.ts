"use server";
import envConfig from "@/src/config/envConfig";
import { axiosInstance } from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const getPostComments = async (postId: string) => {
    const fetchOption = {
        next: {
            tags: ["comments"],
        },
    };

    const res = await fetch(
        `${envConfig.baseApi}/comment/${postId}`,
        fetchOption
    );

    return res.json();
};

export const createComment = async (commentData: any) => {
    try {
        const { data } = await axiosInstance.post("/comment", commentData);
        revalidateTag("comments");
        return data;
    } catch (error: any) {
        throw new Error("Failed to create comment");
    }
};
