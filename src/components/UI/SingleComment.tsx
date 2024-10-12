import { Divider } from "@nextui-org/divider";
import React from "react";

import { useDeleteComment } from "@/src/hooks/comment.hook";
import { TCommentValue } from "@/src/types";
import { TrashIcon2 } from "@/src/assets/icons";

export default function SingleComment({
    comment,
    userId,
}: {
    comment: TCommentValue;
    userId: string;
}) {
    const { mutate: handleCommentDelete } = useDeleteComment();

    const handleDelete = (commentId: string) => {
        handleCommentDelete(commentId);
    };

    return (
        <>
            <Divider />
            <div className="space-y-2">
                <div className="flex justify-between">
                    <h3 className="font-semibold">{comment?.userId?.name}</h3>

                    {userId === comment?.userId?._id && (
                        <button onClick={() => handleDelete(comment?._id)}>
                            <TrashIcon2 />
                        </button>
                    )}
                </div>

                <p>{comment?.comment}</p>
            </div>
        </>
    );
}
