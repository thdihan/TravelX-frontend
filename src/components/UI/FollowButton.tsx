import React from "react";
import _ from "lodash";

import { useCreateFollow } from "@/src/hooks/follow.hook";

export default function FollowButton({
    userId,
    followingId,
    action,
    setFollowingLoading,
}: {
    userId: string;
    followingId: string;
    action: string;
    setFollowingLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { mutate: handleCreateFollow, isPending: createUserPending } =
        useCreateFollow();

    const handleFollow = () => {
        const followData = {
            userId,
            followingId,
        };

        handleCreateFollow(followData);
        setFollowingLoading(true);
    };

    return (
        <button
            onClick={handleFollow}
            className="text-small text-[#eb6b56] font-semibold cursor-pointer"
        >
            {_.capitalize(action)}
        </button>
    );
}
