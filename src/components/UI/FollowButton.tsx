import React from "react";

import { useCreateFollow } from "@/src/hooks/follow.hook";

export default function FollowButton({
    userId,
    followingId,
}: {
    userId: string;
    followingId: string;
}) {
    const { mutate: handleCreateFollow, isPending: createUserPending } =
        useCreateFollow();

    const handleFollow = () => {
        const followData = {
            userId,
            followingId,
        };

        handleCreateFollow(followData);
    };

    return (
        <button
            onClick={handleFollow}
            className="text-small text-[#eb6b56] font-semibold cursor-pointer"
        >
            Follow
        </button>
    );
}
