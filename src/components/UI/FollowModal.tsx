"use client";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/modal";
import React, { ReactNode } from "react";
import { RiUserUnfollowLine } from "react-icons/ri";

export default function FollowModal({
    text,
    icon,
    count,
}: {
    text: string;
    icon: ReactNode;
    count: number;
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <button
                onClick={onOpen}
                className="bg-[#F4F4F5] px-2 py-1 rounded-lg text-sm flex items-center space-x-2"
            >
                <span className="font-semibold flex space-x-1 items-center">
                    {icon}
                    <span>{text}</span>
                </span>
                <span>{count}</span>
            </button>
            <Modal
                placement={"center"}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex  items-center gap-1 text-[#eb6b56] font-bold   ">
                                <span>{icon}</span> <span>{text}</span>
                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    <div className="text-sm flex justify-between py-2">
                                        <p className="font-semibold hover:text-[#eb6b56] cursor-pointer transition-all duration-250">
                                            ABCDE EFGH
                                        </p>
                                        <RiUserUnfollowLine />
                                    </div>
                                    <Divider />
                                    <div className="text-sm flex justify-between py-2">
                                        <p className="font-semibold hover:text-[#eb6b56] cursor-pointer transition-all duration-250">
                                            ABCDE EFGH
                                        </p>
                                        <RiUserUnfollowLine />
                                    </div>
                                    <Divider />
                                    <div className="text-sm flex justify-between py-2">
                                        <p className="font-semibold hover:text-[#eb6b56] cursor-pointer transition-all duration-250">
                                            ABCDE EFGH
                                        </p>
                                        <RiUserUnfollowLine />
                                    </div>
                                    <Divider />
                                    <div className="text-sm flex justify-between py-2">
                                        <p className="font-semibold hover:text-[#eb6b56] cursor-pointer transition-all duration-250">
                                            ABCDE EFGH
                                        </p>
                                        <RiUserUnfollowLine />
                                    </div>
                                    <Divider />
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
