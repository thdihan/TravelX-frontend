import ProfilePosts from "@/src/components/UI/ProfilePosts";
import { getRecentPosts } from "@/src/services/RecentPosts";
import { getVotes } from "@/src/services/Votes";

async function page() {
    const { data: posts } = await getRecentPosts({});
    const { data: votes } = await getVotes();
    return (
        <>
            <ProfilePosts posts={posts} votes={votes} />
        </>
    );
}

export default page;
