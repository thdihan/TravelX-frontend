"use server";
import { revalidateTag } from "next/cache";

import { axiosInstance } from "@/src/lib/AxiosInstance";
import { TVotes } from "@/src/types";

export const addVote = async (postData: TVotes) => {
    try {
        console.log(postData);
        const { data } = await axiosInstance.post("/vote/add", postData);

        revalidateTag("posts");

        return data;
    } catch (error: any) {
        throw new Error("Failed to vote");
    }
};

export const removeVote = async (postData: TVotes) => {
    try {
        const { data } = await axiosInstance.delete(
            `/vote/delete?postId=${postData.postId}&userId=${postData.userId}`
        );

        revalidateTag("posts");

        return data;
    } catch (error: any) {
        throw new Error("Failed to vote");
    }
};

export const updateVote = async (postData: TVotes) => {
    try {
        const { data } = await axiosInstance.put("/vote/update", postData);

        revalidateTag("posts");

        return data;
    } catch (error: any) {
        throw new Error("Failed to vote");
    }
};

export const getVotes = async () => {
    try {
        const { data } = await axiosInstance.get(`/vote`);

        return data;
    } catch (error: any) {
        throw new Error("Failed to get votes");
    }
};
