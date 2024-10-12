import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { createPost, getSinglePost } from "../services/Post";

export const useCreatePost = () => {
    return useMutation<any, Error, FormData>({
        mutationKey: ["CREATE_POST"],
        mutationFn: async (postData) => await createPost(postData),
        onSuccess: () => {
            toast.success("Post created successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};

export const useGetPost = (postId: string) => {
    return useQuery({
        queryKey: ["SINGLE_POST"],
        queryFn: async () => await getSinglePost(postId),
    });
};
