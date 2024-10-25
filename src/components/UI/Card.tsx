"use client";
import { Avatar } from "@nextui-org/avatar";
import {
    Card as NextJsCard,
    CardBody,
    CardFooter,
    CardHeader,
} from "@nextui-org/card";
import parse from "html-react-parser";
import Link from "next/link";

import FollowButton from "./FollowButton";

import { IPost, TVotes } from "@/src/types";
import { DownArrowVote, UpArrowVote } from "@/src/assets/icons";
import { useMakeVote } from "@/src/hooks/vote.hook";
import { useUser } from "@/src/contest/user.provider";

const Card = ({
    post,
    upVotes,
    downVotes,
}: {
    post: IPost;
    upVotes: TVotes[];
    downVotes: TVotes[];
}) => {
    const { user, followinglist, setFollowingLoading } = useUser();
    const { mutate: handleAddVote } = useMakeVote("add");
    const { mutate: handleRemoveVote } = useMakeVote("remove");

    const handleVote = (vote: "up" | "down") => {
        if (upVotes.find((v) => v.userId === user?._id) && vote === "up") {
            console.log("upvote delete called");
            const postData = {
                postId: post._id,
                userId: user?._id!,
                vote,
            };

            handleRemoveVote(postData);

            return;
        }

        if (downVotes.find((v) => v.userId === user?._id) && vote === "down") {
            const postData = {
                postId: post._id,
                userId: user?._id!,
                vote,
            };

            handleRemoveVote(postData);

            return;
        }

        const postData = {
            postId: post._id,
            userId: user?._id!,
            vote,
        };

        handleAddVote(postData);
    };

    // console.log("Following List : ", followinglist);
    const following = followinglist.map((item) => item.followingId);

    return (
        <NextJsCard className="w-full p-4">
            <CardHeader className="justify-between flex-col md:flex-row items-start gap-2">
                <div className="flex gap-5">
                    <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src={post?.user?.profilePhoto}
                    />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <div className="flex  items-center gap-2">
                            <h4 className="text-small font-semibold leading-none text-default-600">
                                {post?.user?.name}
                            </h4>
                            {user?._id !== post?.user?._id && (
                                <FollowButton
                                    followingId={post?.user?._id!}
                                    setFollowingLoading={setFollowingLoading}
                                    userId={user?._id as string}
                                    action={
                                        !following.includes(post?.user?._id)
                                            ? "follow"
                                            : "unfollow"
                                    }
                                />
                            )}
                        </div>

                        <h5 className="text-small tracking-tight text-default-400">
                            {post?.user?.email}
                        </h5>
                    </div>
                </div>
                <div className="text-sm bg-[#eb6b56] py-1 px-2 text-white font-semibold rounded-full">
                    {post?.category?.name}
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400 w-[100%]">
                <div className="h-[300px] py-4">
                    <img
                        alt=""
                        className="rounded-xl w-full h-full object-cover object-center"
                        src={post?.images![0]}
                    />
                </div>
                <h2 className="font-semibold text-lg text-gray-800 hover:text-[#eb6b56]">
                    <Link href={`/posts/${post?._id}`}>{post?.title}</Link>
                </h2>
                <span className="w-full text-gray-600">
                    {parse(post?.content.slice(0, 10000))}...
                </span>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex space-x-3">
                    <div
                        className={`flex gap-1 ${
                            upVotes.find((vote) => vote.userId === user?._id) &&
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
                            downVotes.find(
                                (vote) => vote.userId === user?._id
                            ) && "text-red-600"
                        } items-center`}
                        // className="flex gap-1 text-red-600"
                    >
                        <button onClick={() => handleVote("down")}>
                            <DownArrowVote />
                        </button>
                        <p className="font-semibold  text-small">
                            {downVotes?.length}
                        </p>
                        <p className=" text-small">Downvotes</p>
                    </div>
                </div>
            </CardFooter>
        </NextJsCard>
    );
};

export default Card;
