import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";

import { loginUser, registerUser } from "../services/AuthServices";

export const useUserRegistration = () => {
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_REGISTRATION"],
        mutationFn: async (userData) => await registerUser(userData),
        onSuccess: () => {
            console.log("User Registration Success");
        },
    });
};
export const useUserLogin = () => {
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_LOGIN"],
        mutationFn: async (userData) => await loginUser(userData),
        onSuccess: () => {
            console.log("User Login Success");
        },
    });
};
