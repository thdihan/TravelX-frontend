import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { addVote, removeVote, updateVote } from "../services/Votes";
import { TVotes } from "../types";

export const useMakeVote = (voteFunc: string) => {
    return useMutation<any, Error, TVotes>({
        mutationKey: ["UPDATE_VOTE"],
        mutationFn: async (postData) => {
            if (voteFunc === "add") {
                return await addVote(postData);
            } else if (voteFunc === "remove") {
                return await removeVote(postData);
            } else if (voteFunc === "update") {
                return await updateVote(postData);
            }
        },
        onSuccess: () => {
            toast.success("Vote Updated successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};
