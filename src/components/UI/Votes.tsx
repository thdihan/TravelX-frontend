"use client";
import React from "react";

import { DownArrowVote, UpArrowVote } from "@/src/assets/icons";
import { useUser } from "@/src/contest/user.provider";
import { useMakeVote } from "@/src/hooks/vote.hook";
import { IPost, TVotes } from "@/src/types";

export default function Votes({
    post,
    upVotes,
    downVotes,
}: {
    post: string;
    upVotes: TVotes[];
    downVotes: TVotes[];
}) {
    const { user } = useUser();
    const { mutate: handleAddVote } = useMakeVote("add");
    const { mutate: handleRemoveVote } = useMakeVote("remove");

    const handleVote = (vote: "up" | "down") => {
        if (upVotes.find((v) => v.userId === user?._id) && vote === "up") {
            console.log("upvote delete called");
            const postData = {
                postId: post,
                userId: user?._id!,
                vote,
            };

            handleRemoveVote(postData);

            return;
        }

        if (downVotes.find((v) => v.userId === user?._id) && vote === "down") {
            const postData = {
                postId: post,
                userId: user?._id!,
                vote,
            };

            handleRemoveVote(postData);

            return;
        }

        const postData = {
            postId: post,
            userId: user?._id!,
            vote,
        };

        handleAddVote(postData);
    };

    return (
        <div className="flex space-x-3 py-4">
            <div
                className={`flex gap-1 ${
                    upVotes?.find((vote) => vote.userId === user?._id) &&
                    "text-green-600"
                } items-center`}
            >
                <button onClick={() => handleVote("up")}>
                    <UpArrowVote />
                </button>

                <div className="flex space-x-1">
                    <p className="font-semibold  text-small">
                        {upVotes?.length}
                    </p>
                    <p className="text-small">Upvotes</p>
                </div>
            </div>
            <div
                className={`flex gap-1 ${
                    downVotes?.find((vote) => vote.userId === user?._id) &&
                    "text-red-600"
                } items-center`}
                // className="flex gap-1 text-red-600"
            >
                <button onClick={() => handleVote("down")}>
                    <DownArrowVote />
                </button>
                <p className="font-semibold  text-small">{downVotes?.length}</p>
                <p className=" text-small">Downvotes</p>
            </div>
        </div>
    );
}
