"use client";

import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps {
    variant?: "flat" | "bordered" | "faded" | "underlined";
    size?: "sm" | "md" | "lg";
    required?: boolean;
    type?: string;
    label: string;
    name: string;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
}

export default function FXInput({
    variant = "bordered",
    size = "md",
    required = false,
    type = "text",
    label,
    name,
    startContent,
    endContent,
}: IProps) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <Input
            {...register(name)}
            endContent={endContent}
            errorMessage={errors[name] ? (errors[name].message as string) : ""}
            isInvalid={!!errors[name]}
            label={label}
            required={required}
            size={size}
            startContent={startContent}
            type={type}
            variant={variant}
        />
    );
}
