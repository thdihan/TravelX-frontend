import ProfilePosts from "@/src/components/UI/ProfilePosts";
import { getRecentPosts } from "@/src/services/RecentPosts";

async function page() {
    const { data: posts } = await getRecentPosts({});
    return (
        <>
            <ProfilePosts posts={posts} />
        </>
    );
}

export default page;
