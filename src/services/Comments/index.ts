"use server";
import { revalidateTag } from "next/cache";

import envConfig from "@/src/config/envConfig";
import { axiosInstance } from "@/src/lib/AxiosInstance";
import { TComment } from "@/src/types";

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

export const deleteComment = async (commentId: string) => {
    try {
        const { data } = await axiosInstance.delete(
            `/comment/delete/${commentId}`
        );

        revalidateTag("comments");

        return data;
    } catch (error: any) {
        throw new Error("Failed to delete comment");
    }
};

export const updateDelete = async (commentId: string, comment: TComment) => {
    try {
        const { data } = await axiosInstance.put(
            `/comment/update/${commentId}`,
            comment
        );

        revalidateTag("comments");

        return data;
    } catch (error: any) {
        throw new Error("Failed to update comment");
    }
};
