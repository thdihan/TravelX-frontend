import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { createComment } from "../services/Comments";
import { TComment } from "../types";

export const useCreateComment = () => {
    return useMutation<any, Error, TComment>({
        mutationKey: ["CREATE_POST"],
        mutationFn: async (postData) => await createComment(postData),
        onSuccess: () => {
            toast.success("Comment created successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
