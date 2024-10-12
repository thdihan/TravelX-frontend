import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { createComment, deleteComment } from "../services/Comments";
import { TComment } from "../types";

export const useCreateComment = () => {
    return useMutation<any, Error, TComment>({
        mutationKey: ["CREATE_POST"],
        mutationFn: async (postData) => await createComment(postData),
        onSuccess: () => {
            toast.success("Comment created successfully", {
                duration: 1000,
            });
        },
        onError: (error) => {
            toast.error(error.message, {
                duration: 1000,
            });
        },
    });
};

export const useDeleteComment = () => {
    let toastId: any;

    return useMutation<any, Error, string>({
        mutationKey: ["DELETE_POST"],
        mutationFn: async (commentId) => await deleteComment(commentId),
        onSuccess: () => {
            toastId = toast.success("Comment deleted successfully", {
                duration: 1000,
            });
        },
        onError: (error) => {
            toast.error(error.message, {
                duration: 1000,
                id: toastId,
            });
        },
    });
};
