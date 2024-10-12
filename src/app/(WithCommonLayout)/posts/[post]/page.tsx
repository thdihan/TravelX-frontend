import React from "react";

import { getVotes } from "@/src/services/Votes";
import SinglePost from "@/src/components/UI/SinglePost";
import CommentBox from "@/src/components/UI/CommentBox";

async function PostDetails({
    params,
}: {
    params: Record<string, string | string[] | undefined>;
}) {
    // console.log(params);

    const { data: votes } = await getVotes();

    return (
        <div className="w-full space-y-4 mb-4">
            <SinglePost postId={params.post as string} votes={votes} />
            <CommentBox />
        </div>
    );
}

export default PostDetails;
