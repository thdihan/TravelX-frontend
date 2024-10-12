"use client";
import { Avatar } from "@nextui-org/avatar";
import {
    Card as NextJsCard,
    CardBody,
    CardFooter,
    CardHeader,
} from "@nextui-org/card";
import parse from "html-react-parser";

import { IPost } from "@/src/types";

const Card = ({ post }: { post: IPost }) => {
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
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">
                        4
                    </p>
                    <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">
                        97.1K
                    </p>
                    <p className="text-default-400 text-small">Followers</p>
                </div>
            </CardFooter>
        </NextJsCard>
    );
};

export default Card;
