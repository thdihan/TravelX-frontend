import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export interface IUser {
    _id: string;
    name: string;
    role: string;
    email: string;
    status: string;
    phone: string;
    address: string;
    profilePhoto?: string;
    dob: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

export interface IPost {
    _id: string;
    title: string;
    content: string;
    category: ICategory;
    user: IUser;
    images?: string[];
    isPremium: boolean;
}

export interface ICategory {
    _id: string;
    name: string;
    __v: number;
}

export interface IInput {
    variant?: "flat" | "bordered" | "faded" | "underlined";
    size?: "sm" | "md" | "lg";
    required?: boolean;
    type?: string;
    label: string;
    name: string;
    disabled?: boolean;
}

export type TVotes = {
    postId: string;
    userId: string;
    vote: "up" | "down";
};

export type TComment = {
    postId: string;
    userId: string;
    comment: string;
};

export type TCommentValue = {
    _id: string;
    postId: IPost;
    userId: IUser;
    comment: string;
};
