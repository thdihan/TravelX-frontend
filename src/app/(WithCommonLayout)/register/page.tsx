"use client";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useEffect } from "react";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import registerValidationSchema from "@/src/schemas/register.schema";
import FXTextarea from "@/src/components/form/FXTextarea";

export default function RegisterPage() {
    const { mutate: handleUserRegistration, isPending } = useUserRegistration();

    useEffect(() => {
        if (isPending) {
            // Handle Loading satate
        }
    }, [isPending]);

    // const {
    //     mutate: handleUserRegistration,
    //     isPending,
    //     data,
    //     isError,
    //     isSuccess,
    // } = useMutation({
    //     mutationKey: ["USER_REGISTRATION"],
    //     mutationFn: registerUser,
    // });

    // console.log({ isPending, isSuccess });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const userData = {
            ...data,
            profilePhoto:
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        };

        console.log("Inside form user data: ", userData);

        // registerUser(userData);

        handleUserRegistration(userData);
    };

    if (isPending) {
        //  handle loading state
    }

    return (
        <div className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-center">
            <h3 className="my-2 text-xl font-bold">Register with TravelX</h3>
            <p className="mb-4">Help Lost Items Find Their Way Home</p>
            <div className="w-[80%] md:w-[50%] lg:w-[30%]  bg-white p-8 border border-gray-300 rounded-xl">
                <FXForm
                    //! Only for development
                    resolver={zodResolver(registerValidationSchema)}
                    onSubmit={onSubmit}
                >
                    <div className="py-3">
                        <FXInput label="Name" name="name" size="sm" />
                    </div>
                    <div className="py-3">
                        <FXInput label="Email" name="email" size="sm" />
                    </div>
                    <div className="py-3">
                        <FXInput
                            label="Mobile Number"
                            name="mobileNumber"
                            size="sm"
                        />
                    </div>
                    <div className="py-3">
                        <FXInput
                            label="Password"
                            name="password"
                            size="sm"
                            type="password"
                        />
                    </div>
                    <div className="py-3">
                        <FXTextarea label="Address" name="address" />
                    </div>

                    <Button
                        className="my-3 w-full rounded-lg bg-[#eb6b56] font-semibold  text-white"
                        size="lg"
                        type="submit"
                    >
                        Registration
                    </Button>
                </FXForm>
                <div className="text-center">
                    Already have an account ?{" "}
                    <Link
                        className="text-[#eb6b56] font-semibold"
                        href={"/login"}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
