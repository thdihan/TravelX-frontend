"use client";

import { Avatar } from "@nextui-org/avatar";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/dropdown";
import { usePathname, useRouter } from "next/navigation";

import { logout } from "@/src/services/AuthServices";
import { useUser } from "@/src/contest/user.provider";
import { protectedRoute } from "@/src/constant";

const NavbarDropDown = () => {
    const router = useRouter();
    const { setIsLoading: userLoading, user } = useUser();
    const pathname = usePathname();

    const handleLogout = () => {
        logout();
        userLoading(true);

        if (protectedRoute.some((route) => pathname.match(route))) {
            router.push("/");
        }
    };

    const handleNavigation = (pathname: string) => {
        router.push(pathname);
    };

    return (
        <Dropdown>
            <DropdownTrigger>
                <Avatar className="cursor-pointer" src={user?.profilePhoto} />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem onClick={() => handleNavigation("/profile")}>
                    Profile
                </DropdownItem>
                <DropdownItem
                    onClick={() => handleNavigation("/profile/settings")}
                >
                    Settings
                </DropdownItem>
                <DropdownItem
                    onClick={() => handleNavigation("/profile/create-post")}
                >
                    Create Post
                </DropdownItem>
                <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    onClick={() => handleLogout()}
                >
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default NavbarDropDown;
