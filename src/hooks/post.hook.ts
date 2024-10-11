import { useMutation } from "@tanstack/react-query";

import { createPost } from "../services/Post";

export const useCreatePost = () => {
    return useMutation<any, Error, FormData>({
        mutationKey: ["CREATE_POST"],
        mutationFn: async (postData) => await createPost(postData),
        onSuccess: () => {
            console.log("Post created successfully");
        },
        onError: (error) => {
            console.log(error.message);
        },
    });
};
