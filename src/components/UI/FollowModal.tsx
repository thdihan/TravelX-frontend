"use client";
import { Divider } from "@nextui-org/divider";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/modal";
import React, { ReactNode } from "react";

export default function FollowModal({
    text,
    icon,
    count,
    data,
}: {
    text: string;
    icon: ReactNode;
    count: number;
    data: {
        id: string;
        name: string;
    }[];
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const { setFollowingLoading } = useUser();

    // const { mutate: handleCreateFollow, isPending: followPending } =
    //     useCreateFollow();

    // const { mutate: handleRemoveFollow, isPending: unfollowPending } =
    //     useRemoveFollow();

    // const handleFollow = (followingId: string) => {
    //     const followData = {
    //         userId,
    //         followingId,
    //     };

    //     handleCreateFollow(followData);
    //     setFollowingLoading(true);
    // };

    // const handleUnfollow = (followingId: string) => {
    //     const followData = {
    //         userId,
    //         followingId,
    //     };

    //     handleRemoveFollow(followData);
    //     setFollowingLoading(true);
    // };

    return (
        <>
            <button
                className="bg-[#F4F4F5] px-2 py-1 rounded-lg text-sm flex items-center space-x-2"
                onClick={onOpen}
            >
                <span className="font-semibold flex space-x-1 items-center">
                    {icon}
                    <span>{text}</span>
                </span>
                <span>{count}</span>
            </button>
            <Modal
                isOpen={isOpen}
                placement={"center"}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex  items-center gap-1 text-[#eb6b56] font-bold   ">
                                <span>{icon}</span> <span>{text}</span>
                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    {data?.map((item) => (
                                        <div key={item.id}>
                                            <div className="text-sm flex justify-between py-2">
                                                <p className="font-semibold hover:text-[#eb6b56] cursor-pointer transition-all duration-250">
                                                    {item?.name}
                                                </p>

                                                {/* <RiUserUnfollowLine
                                                    onClick={() =>
                                                        handleUnfollow(item.id)
                                                    }
                                                    className="hover:text-[#eb6b56] cursor-pointer transition-all duration-250"
                                                /> */}
                                            </div>
                                            <Divider />
                                        </div>
                                    ))}
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
