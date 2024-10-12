"use client";
import { Avatar } from "@nextui-org/avatar";
import React from "react";
import parse from "html-react-parser";

import Votes from "./Votes";

import { useGetPost } from "@/src/hooks/post.hook";
import { TVotes } from "@/src/types";
import LoadingSpinner from "./Loading";

export default function SinglePost({
    postId,
    votes,
}: {
    postId: string;
    votes: TVotes[];
}) {
    console.log(postId);
    const { data: post, isPending: postFetchPending } = useGetPost(
        postId as string
    );

    const upVotes = votes.filter((v) => v.vote === "up" && v.postId === postId);
    const downVotes = votes.filter(
        (v) => v.vote === "down" && v.postId === postId
    );

    return (
        <>
            {postFetchPending && <LoadingSpinner />}
            <div className="border border-gray-200 w-full rounded-lg shadow-md p-8 bg-white">
                <div className="flex justify-between items-center">
                    <div className="flex gap-5">
                        <Avatar
                            isBordered
                            radius="full"
                            size="md"
                            src={post?.data?.user?.profilePhoto}
                        />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">
                                {post?.data?.user?.name}
                            </h4>
                            <h5 className="text-small tracking-tight text-default-400">
                                {post?.data?.user?.email}
                            </h5>
                        </div>
                    </div>
                    <div className="text-sm bg-[#eb6b56] py-1 px-2 text-white font-semibold rounded-full">
                        {post?.data?.category?.name}
                    </div>
                </div>

                <div className="pt-8 pb-2">
                    <h2 className="text-xl font-semibold">
                        {post?.data?.title}
                    </h2>
                </div>

                <div className="">
                    <img
                        alt=""
                        className="w-full rounded-lg"
                        src={post?.data?.images[0]}
                    />
                </div>

                <div className="py-4">
                    <span>
                        {post?.data?.content && parse(post?.data?.content)}
                    </span>
                </div>

                <Votes
                    downVotes={downVotes}
                    post={post?.data?._id}
                    upVotes={upVotes}
                />
            </div>
        </>
    );
}
