import React from "react";
import _ from "lodash";

import { useCreateFollow, useRemoveFollow } from "@/src/hooks/follow.hook";
import LoadingSpinner from "./Loading";

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
    const { mutate: handleCreateFollow, isPending: followPending } =
        useCreateFollow();

    const { mutate: handleRemoveFollow, isPending: unfollowPending } =
        useRemoveFollow();

    const handleFollow = () => {
        const followData = {
            userId,
            followingId,
        };

        handleCreateFollow(followData);
        setFollowingLoading(true);
    };

    const handleUnfollow = () => {
        const followData = {
            userId,
            followingId,
        };

        handleRemoveFollow(followData);
        setFollowingLoading(true);
    };

    return (
        <>
            {(followPending || unfollowPending) && <LoadingSpinner />}
            <button
                className="text-small text-[#eb6b56] font-semibold cursor-pointer"
                onClick={action === "follow" ? handleFollow : handleUnfollow}
            >
                {_.capitalize(action)}
            </button>
        </>
    );
}
