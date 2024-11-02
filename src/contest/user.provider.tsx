import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";

import { IUser } from "../types";
import { getCurrentUser } from "../services/AuthServices";
import { getFollower, getFollowing } from "../services/Follow";

interface IUserProviderValues {
    user: IUser | null;
    isLoading: boolean;
    setUser: (user: IUser | null) => void;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    followinglist: TFollowing[];
    followerlist: TFollowing[];
    setFollowingLoading: Dispatch<SetStateAction<boolean>>;
}
type TFollowing = {
    followingId: string;
    name: string;
};
const UserContext = createContext<IUserProviderValues | undefined>(undefined);
const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const [followinglist, setFollowingList] = useState<TFollowing[]>([]);
    const [followerlist, setFollowerList] = useState<TFollowing[]>([]);
    const [followingLoading, setFollowingLoading] = useState(false);

    const handleUser = async () => {
        const user = await getCurrentUser();
        const following = await getFollowing(user?._id);
        const follower = await getFollower(user?._id as string);

        // console.log("Following Data : ", following);
        setUser(user);
        setFollowingList(following);
        setFollowerList(follower);
        setIsLoading(false);
    };

    const handleFollowing = async () => {
        const following = await getFollowing(user?._id as string);
        const follower = await getFollower(user?._id as string);
        // console.log("Following Data : ", following);

        setFollowingList(following);
        setFollowerList(follower);
        setFollowingLoading(false);
    };

    useEffect(() => {
        handleUser();
    }, [isLoading]);

    useEffect(() => {
        if (user) {
            handleFollowing();
        }
    }, [followingLoading]);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                isLoading,
                setIsLoading,
                followinglist,
                followerlist,
                setFollowingLoading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }

    return context;
};

export default UserProvider;
