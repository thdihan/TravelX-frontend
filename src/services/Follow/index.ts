"use server";
import { axiosInstance } from "@/src/lib/AxiosInstance";

export const follow = async (followData: any) => {
    try {
        const { data } = await axiosInstance.post("/follow", followData);

        // revalidateTag("comments");

        return data;
    } catch (error: any) {
        throw new Error("Failed to follow");
    }
};
