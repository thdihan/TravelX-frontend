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

interface IUserProviderValues {
    user: IUser | null;
    isLoading: boolean;
    setUser: (user: IUser | null) => void;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}
const UserContext = createContext<IUserProviderValues | undefined>(undefined);
const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleUser = async () => {
        const user = await getCurrentUser();

        setUser(user);
        setIsLoading(false);
    };

    useEffect(() => {
        handleUser();
    }, [isLoading]);

    return (
        <UserContext.Provider
            value={{ user, setUser, isLoading, setIsLoading }}
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