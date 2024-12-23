import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { TFollow } from "../types";
import { follow, unfollow } from "../services/Follow";

export const useCreateFollow = () => {
    return useMutation<any, Error, TFollow>({
        mutationKey: ["CREATE_FOLLOW"],
        mutationFn: async (followData) => await follow(followData),
        onSuccess: () => {
            toast.success("Followed successfully", {
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

export const useRemoveFollow = () => {
    return useMutation<any, Error, TFollow>({
        mutationKey: ["REMOVE_FOLLOW"],
        mutationFn: async (followData) => await unfollow(followData),
        onSuccess: () => {
            toast.success("Unfollowed successfully", {
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
