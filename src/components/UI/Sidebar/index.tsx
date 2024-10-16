"use client";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";

import CreatePostModal from "../CreatePost";

import { adminLinks, userLinks } from "./constants";
import { SidebarOptions } from "./SidebarOptions";

import { useUser } from "@/src/contest/user.provider";

const Sidebar = () => {
    const { user } = useUser();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <CreatePostModal
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
                userId={user?._id}
            />
            <div className="rounded-xl bg-white border border-gray-200 p-4">
                <div className="h-[330px] w-full rounded-md">
                    <img alt="" src={user?.profilePhoto} />
                </div>
                <div className="my-3">
                    <h1 className="text-2xl font-semibold">{user?.name}</h1>
                    <p className="break-words text-sm">{user?.email}</p>
                </div>
                <Button
                    className="mt-2 w-full rounded-md bg-[#eb6b56] text-white "
                    onPress={onOpen}
                >
                    Create a post
                </Button>
                <div className="flex justify-between py-3">
                    <h2 className="bg-[#F4F4F5] px-2 py-1 rounded-lg">
                        <span className="font-semibold">Follower</span> : 100
                    </h2>
                    <h2 className="bg-[#F4F4F5] px-2 py-1 rounded-lg">
                        <span className="font-semibold">Following</span> : 100
                    </h2>
                </div>
            </div>
            <div className="mt-3 space-y-2 rounded-xl bg-default-100 p-2">
                <SidebarOptions
                    links={user?.role === "user" ? userLinks : adminLinks}
                />
            </div>
        </div>
    );
};

export default Sidebar;
