"use client";
import { Divider } from "@nextui-org/divider";
import React from "react";

import CommentInput from "./CommentInput";

import { useUser } from "@/src/contest/user.provider";
import { TCommentValue } from "@/src/types";

async function CommentBox({
    postId,
    comments,
}: {
    postId: string;
    comments: TCommentValue[];
}) {
    const { user } = useUser();

    return (
        <div className="p-4 bg-white border border-gray-300 shadow-lg rounded-lg space-y-4">
            <CommentInput postId={postId} userId={user?._id as string} />
            {comments.map((comment) => (
                <>
                    <Divider />
                    <div className="space-y-2">
                        <h3 className="font-semibold">
                            {comment?.userId?.name}
                        </h3>
                        <p>{comment?.comment}</p>
                    </div>
                </>
            ))}
        </div>
    );
}

export default CommentBox;
