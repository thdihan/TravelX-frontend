import Card from "@/src/components/UI/Card";
import { getRecentPosts } from "@/src/services/RecentPosts";
import { getVotes } from "@/src/services/Votes";
import { IPost, TVotes } from "@/src/types";

const Home = async () => {
    const { data: posts } = await getRecentPosts(undefined);
    const { data: votes } = await getVotes();
    // console.log(posts);

    return (
        <div className="flex space-y-4 flex-col w-full py-4">
            {posts?.map((post: IPost) => {
                const upVotes = votes?.filter(
                    (vote: TVotes) =>
                        vote.postId === post._id && vote.vote === "up"
                );
                const downVotes = votes?.filter(
                    (vote: TVotes) =>
                        vote.postId === post._id && vote.vote === "down"
                );

                return (
                    <div key={post._id} className="w-full flex flex-col">
                        <Card
                            post={post}
                            upVotes={upVotes}
                            downVotes={downVotes}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Home;
