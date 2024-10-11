"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import loginValidationSchema from "@/src/schemas/login.schema";
import { useUserLogin } from "@/src/hooks/auth.hook";
import LoadingSpinner from "@/src/components/UI/Loading";
import { useUser } from "@/src/contest/user.provider";

const LoginPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const redirect = searchParams.get("redirect");

    const { setIsLoading: userLoading } = useUser();

    const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        userLoading(true);
        handleUserLogin(data);
    };

    useEffect(() => {
        if (!isPending && isSuccess) {
            if (redirect) {
                router.push(redirect);
            } else {
                router.push("/");
            }
        }
    }, [isPending, isSuccess]);

    return (
        <>
            {isPending && <LoadingSpinner />}
            <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
                <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
                <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
                <div className="w-[35%]">
                    <FXForm
                        resolver={zodResolver(loginValidationSchema)}
                        onSubmit={onSubmit}
                    >
                        <div className="py-3">
                            <FXInput label="Email" name="email" type="email" />
                        </div>
                        <div className="py-3">
                            <FXInput
                                label="Password"
                                name="password"
                                type="password"
                            />
                        </div>

                        <Button
                            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
                            size="lg"
                            type="submit"
                        >
                            Login
                        </Button>
                    </FXForm>
                    <div className="text-center">
                        Don&lsquo;t have account ?{" "}
                        <Link href={"/register"}>Register</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;