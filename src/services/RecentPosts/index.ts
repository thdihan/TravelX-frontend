"use server";
import envConfig from "@/src/config/envConfig";

export const getRecentPosts = async (query: any) => {
    const fetchOption = {
        next: {
            tags: ["posts"],
        },
    };
    let queryString: string = "";

    if (query) {
        queryString = new URLSearchParams(query).toString();
        console.log(queryString);
    }
    const res = await fetch(
        `${envConfig.baseApi}/post?${queryString}
        `,
        fetchOption
    );

    // await delay(5000);

    return res.json();
};
