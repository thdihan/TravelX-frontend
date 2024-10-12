"use client";
import { useEffect, useState } from "react";

import Card from "@/src/components/UI/Card";
import { useUser } from "@/src/contest/user.provider";
import { IPost } from "@/src/types";

function ProfilePosts({ posts }: { posts: IPost[] }) {
    const { user } = useUser();
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

    useEffect(() => {
        let filtered: IPost[] = [...posts];

        if (user) {
            filtered = posts.filter((post) => post.user._id === user._id);
        }
        setFilteredPosts(filtered);
    }, [posts, user]);

    return (
        <div className="flex space-y-4 flex-col w-full">
            {filteredPosts?.map((post: IPost) => (
                <div key={post._id} className="w-full flex flex-col">
                    <Card post={post} />
                </div>
            ))}
        </div>
    );
}

export default ProfilePosts;
