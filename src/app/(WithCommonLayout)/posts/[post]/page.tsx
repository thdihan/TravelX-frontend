import React from "react";

import { getVotes } from "@/src/services/Votes";
import SinglePost from "@/src/components/UI/SinglePost";
import CommentBox from "@/src/components/UI/CommentBox";
import { getPostComments } from "@/src/services/Comments";

async function PostDetails({
    params,
}: {
    params: Record<string, string | string[] | undefined>;
}) {
    // console.log(params);

    const { data: votes } = await getVotes();
    const { data: comments } = await getPostComments(params.post as string);

    return (
        <div className="w-full space-y-4 mb-4">
            <SinglePost postId={params.post as string} votes={votes} />
            <CommentBox postId={params.post as string} comments={comments} />
        </div>
    );
}

export default PostDetails;
