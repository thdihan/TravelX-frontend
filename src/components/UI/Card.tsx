"use client";
import { Avatar } from "@nextui-org/avatar";
import {
    Card as NextJsCard,
    CardBody,
    CardFooter,
    CardHeader,
} from "@nextui-org/card";
import parse from "html-react-parser";

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
    const { user } = useUser();
    const { mutate: handleAddVote } = useMakeVote("add");
    const { mutate: handleRemoveVote } = useMakeVote("remove");
    const { mutate: handleUpdateVote } = useMakeVote("update");

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

    console.log(post);

    return (
        <NextJsCard className="w-full p-4">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src={post?.user?.profilePhoto}
                    />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">
                            {post?.user?.name}
                        </h4>
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
                <h2 className="font-semibold text-lg text-gray-800">
                    {post?.title}
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
