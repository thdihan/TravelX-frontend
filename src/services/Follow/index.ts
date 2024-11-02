"use server";
import { revalidateTag } from "next/cache";

import envConfig from "@/src/config/envConfig";
import { axiosInstance } from "@/src/lib/AxiosInstance";

export const follow = async (followData: any) => {
    try {
        const { data } = await axiosInstance.post("/follow", followData);

        revalidateTag("following");

        return data;
    } catch (error: any) {
        throw new Error("Failed to follow");
    }
};

export const unfollow = async (followData: any) => {
    try {
        const { data } = await axiosInstance.delete(
            `/follow?userId=${followData.userId}&followerId=${followData.followingId}`
        );

        revalidateTag("following");

        return data;
    } catch (error: any) {
        throw new Error("Failed to follow");
    }
};

export const getFollowing = async (userId: string) => {
    const fetchOption = {
        next: {
            tags: ["following"],
        },
    };

    try {
        const res = await fetch(
            `${envConfig.baseApi}/follow/following/${userId}`,
            fetchOption
        ).then((res) => res.json());
        // console.log("Following Data : ", res.data);

        const followingList = res?.data?.map((item: any) => ({
            followingId: item.followerId?._id,
            name: item.followerId?.name,
        }));

        return followingList;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getFollower = async (userId: string) => {
    const fetchOption = {
        next: {
            tags: ["follower"],
        },
    };

    try {
        // console.log("Fetching Follower Data");
        const res = await fetch(
            `${envConfig.baseApi}/follow/followers/${userId}`,
            fetchOption
        ).then((res) => res.json());
        // console.log("Following Data : ", res.data);

        const followerList = res?.data?.map((item: any) => ({
            followerId: item.userId?._id,
            name: item.userId?.name,
        }));

        return followerList;
    } catch (error: any) {
        throw new Error(error.message);
    }
};
