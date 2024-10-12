import { useCreateComment } from "@/src/hooks/comment.hook";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import React, { useState } from "react";

export default function CommentInput({
    postId,
    userId,
}: {
    postId: string;
    userId: string;
}) {
    const [comment, setComment] = useState("");
    const { mutate: createComment } = useCreateComment();
    const handleCommentPost = () => {
        const commentData = {
            postId,
            comment,
            userId,
        };

        createComment(commentData);
    };

    return (
        <div className="space-y-2">
            <Textarea
                label="Comment"
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <div className="text-end">
                <Button
                    className="bg-[#eb6b56] text-white"
                    onClick={handleCommentPost}
                >
                    Comment
                </Button>
            </div>
        </div>
    );
}
