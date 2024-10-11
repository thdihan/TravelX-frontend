"use client";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import React from "react";
import {
    FieldValues,
    FormProvider,
    SubmitHandler,
    useForm,
} from "react-hook-form";

import FXDatePicker from "@/src/components/form/FXDatePicker";
import FXInput from "@/src/components/form/FXInput";
import FXTextarea from "@/src/components/form/FXTextarea";
import { useUser } from "@/src/contest/user.provider";
import FXForm from "@/src/components/form/FXForm";
import { dateToIso, IsoToDate } from "@/src/utils/dateToIso";

export default function CreatePost() {
    const { user } = useUser();
    const methods = useForm();
    const { handleSubmit } = methods;

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const userData = {
            ...data,
            dob: dateToIso(data.dob),
        };
        console.log(userData);
    };

    const defaultValues = {
        name: user?.name,
        phone: user?.phone,
        dob: IsoToDate(user?.dob as string),
        address: user?.address,
    };

    console.log(user);

    return (
        <>
            {/* {(createPostPending || getCategoryPending) && <LoadingSpinner />} */}
            <div className="h-full rounded-xl bg-white border border-gray-200 from-default-100 px-8 py-12">
                <h1 className="text-2xl font-semibold">Update Profile</h1>
                <Divider className="mb-5 mt-3" />
                <FormProvider {...methods}>
                    <FXForm onSubmit={onSubmit} defaultValues={defaultValues}>
                        <div className="flex flex-wrap gap-2 py-2">
                            <div className="min-w-fit flex-1">
                                <FXInput label="Name" name="name" />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 py-2">
                            <div className="min-w-fit flex-1">
                                <FXInput label="Phone" name="phone" />
                            </div>
                            <div className="min-w-fit flex-1">
                                <FXDatePicker
                                    label="Date of Birth"
                                    name="dob"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap-reverse gap-2 py-2">
                            <div className="min-w-fit flex-1">
                                <FXTextarea label="Address" name="address" />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Button size="lg" type="submit">
                                Post
                            </Button>
                        </div>
                    </FXForm>
                </FormProvider>
            </div>
        </>
    );
}
