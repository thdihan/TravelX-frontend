"use client";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { RiUserFollowFill } from "react-icons/ri";
import { GiShadowFollower } from "react-icons/gi";

import CreatePostModal from "../CreatePost";
import FollowModal from "../FollowModal";

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
                userId={user?._id}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
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
                    <FollowModal
                        count={100}
                        icon={<GiShadowFollower />}
                        text="Follower"
                    />

                    <FollowModal
                        count={100}
                        icon={<RiUserFollowFill />}
                        text="Following"
                    />
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
