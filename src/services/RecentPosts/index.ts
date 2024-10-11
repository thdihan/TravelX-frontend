"use server";
import envConfig from "@/src/config/envConfig";
import { delay } from "@/src/utils/delay";

export const getRecentPosts = async () => {
    const fetchOption = {
        next: {
            tags: ["posts"],
        },
    };
    const res = await fetch(
        `${envConfig.baseApi}/items?sortBy=-createdAt&limit=3`,
        fetchOption
    );

    await delay(5000);

    return res.json();
};
