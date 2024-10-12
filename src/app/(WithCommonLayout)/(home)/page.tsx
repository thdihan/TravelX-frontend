import Card from "@/src/components/UI/Card";
import { getRecentPosts } from "@/src/services/RecentPosts";
import { IPost } from "@/src/types";

const Home = async () => {
    const { data: posts } = await getRecentPosts(undefined);
    // console.log(posts);

    return (
        <div className="flex space-y-4 flex-col w-full py-4">
            {posts?.map((post: IPost) => (
                <div key={post._id} className="w-full flex flex-col">
                    <Card post={post} />
                </div>
            ))}
        </div>
    );
};

export default Home;
