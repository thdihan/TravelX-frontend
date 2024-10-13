import { Divider } from "@nextui-org/divider";
import React from "react";
import { useDisclosure } from "@nextui-org/modal";

import CommentUpdateModal from "./CommentUpdateModal";

import { useDeleteComment } from "@/src/hooks/comment.hook";
import { TCommentValue } from "@/src/types";
import { TrashIcon2, WriteIcon } from "@/src/assets/icons";

export default function SingleComment({
    comment,
    userId,
}: {
    comment: TCommentValue;
    userId: string;
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { mutate: handleCommentDelete } = useDeleteComment();

    const handleDelete = (commentId: string) => {
        handleCommentDelete(commentId);
    };

    return (
        <>
            <Divider />
            <CommentUpdateModal
                comment={comment}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />
            <div className="space-y-2">
                <div className="flex justify-between">
                    <h3 className="font-semibold">{comment?.userId?.name}</h3>

                    {userId === comment?.userId?._id && (
                        <div className="flex space-x-2">
                            <button onClick={onOpen}>
                                <WriteIcon />
                            </button>
                            <button onClick={() => handleDelete(comment?._id)}>
                                <TrashIcon2 />
                            </button>
                        </div>
                    )}
                </div>

                <p>{comment?.comment}</p>
            </div>
        </>
    );
}
