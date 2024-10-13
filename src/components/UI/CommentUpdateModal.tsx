import { useUpdateComment } from "@/src/hooks/comment.hook";
import { TComment, TCommentValue } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@nextui-org/modal";
import React, { useState } from "react";
import { set } from "react-hook-form";

export default function CommentUpdateModal({
    isOpen,
    onOpenChange,
    comment,
}: {
    isOpen: boolean;
    onOpenChange: () => void;
    comment: TCommentValue;
}) {
    const [updatedComment, setUpdatedComment] = useState<string>(
        comment?.comment
    );

    const { mutate: updateComment } = useUpdateComment();

    const handleCommentUpdate = () => {
        // Update the comment
        const newComment: TComment = {
            comment: updatedComment,
            userId: comment.userId._id,
            postId: comment.postId._id,
        };

        updateComment({ commentId: comment._id, comment: newComment });
    };

    return (
        <Modal isOpen={isOpen} placement={"center"} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Update Comment
                        </ModalHeader>
                        <ModalBody>
                            <Textarea
                                name="comment"
                                label="Comment"
                                value={updatedComment}
                                onChange={(e) =>
                                    setUpdatedComment(e.target.value)
                                }
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button
                                className="bg-[#eb6b56] text-white"
                                // onPress={onClose}
                                onClick={() => {
                                    handleCommentUpdate();
                                    onClose();
                                }}
                            >
                                Update
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
