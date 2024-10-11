import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { updateProfile } from "../services/AuthServices";
import { toast } from "sonner";

export const useProfileUpdate = () => {
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["PROFILE_UPDATE"],
        mutationFn: async (userData) => await updateProfile(userData),
        onSuccess: () => {
            toast.success("Profile Update Success");
        },
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });
};
