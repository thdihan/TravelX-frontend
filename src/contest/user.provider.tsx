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
import { getFollowing } from "../services/Follow";

interface IUserProviderValues {
    user: IUser | null;
    isLoading: boolean;
    setUser: (user: IUser | null) => void;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    followinglist: string[];
    setFollowingLoading: Dispatch<SetStateAction<boolean>>;
}
const UserContext = createContext<IUserProviderValues | undefined>(undefined);
const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const [followinglist, setFollowingList] = useState<string[]>([]);
    const [followingLoading, setFollowingLoading] = useState(false);

    const handleUser = async () => {
        const user = await getCurrentUser();
        const following = await getFollowing(user?._id);

        // console.log("Following Data : ", following);
        setUser(user);
        setFollowingList(following);
        setIsLoading(false);
    };

    const handleFollowing = async () => {
        const following = await getFollowing(user?._id as string);
        console.log("Following Data : ", following);

        setFollowingList(following);
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
