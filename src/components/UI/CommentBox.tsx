"use client";
import { Divider } from "@nextui-org/divider";
import React from "react";

import CommentInput from "./CommentInput";

import { useUser } from "@/src/contest/user.provider";
import { TCommentValue } from "@/src/types";
import { TrashIcon2 } from "@/src/assets/icons";
import { useDeleteComment } from "@/src/hooks/comment.hook";
import SingleComment from "./SingleComment";

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
                <SingleComment
                    key={comment._id}
                    comment={comment}
                    userId={user?._id as string}
                />
            ))}
        </div>
    );
}

export default CommentBox;
