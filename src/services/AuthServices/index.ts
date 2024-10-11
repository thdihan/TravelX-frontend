"use server";

import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

import { axiosInstance } from "@/src/lib/AxiosInstance";

export const registerUser = async (userData: FieldValues) => {
    try {
        console.log("userData", userData);
        const { data } = await axiosInstance.post("/auth/signup", userData);

        console.log(data);
        if (data.success) {
            cookies().set("accessToken", data?.token);
            // cookies().set("refreshToken", data?.data?.refreshToken);
        }

        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const loginUser = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/auth/login", userData);

        if (data.success) {
            cookies().set("accessToken", data?.token);
            // cookies().set("refreshToken", data?.data?.refreshToken);
        }

        return data;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const logout = () => {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
};

export const getCurrentUser = async () => {
    const accessToken = cookies().get("accessToken")?.value;

    let decodedToken = null;

    if (accessToken) {
        decodedToken = await jwtDecode(accessToken);

        return {
            _id: decodedToken._id,
            name: decodedToken.name,
            email: decodedToken.email,
            role: decodedToken.role,
            status: decodedToken.status,
            mobileNumber: decodedToken.mobileNumber,
            profilePhoto: decodedToken.profilePhoto,
        };
    }

    return decodedToken;
};
