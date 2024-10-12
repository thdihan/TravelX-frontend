import React from "react";

import { getVotes } from "@/src/services/Votes";
import SinglePost from "@/src/components/UI/SinglePost";

async function PostDetails({
    params,
}: {
    params: Record<string, string | string[] | undefined>;
}) {
    // console.log(params);

    const { data: votes } = await getVotes();

    return (
        <>
            <SinglePost postId={params.post as string} votes={votes} />
        </>
    );
}

export default PostDetails;
