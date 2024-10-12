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
import { ArrowIcon } from "@/src/assets/icons";

const NavbarDropDown = () => {
    const router = useRouter();
    const { setIsLoading: userLoading, user } = useUser();
    const pathname = usePathname();

    const handleLogout = () => {
        logout();
        userLoading(true);

        if (protectedRoute.some((route) => pathname.match(route))) {
            router.push("/login");
        }
    };

    const handleNavigation = (pathname: string) => {
        router.push(pathname);
    };

    return (
        <Dropdown>
            <DropdownTrigger>
                <div className="flex items-center  bg-white border border-gray-300 px-1 space-x-2  py-1 rounded-full">
                    <Avatar
                        className="cursor-pointer"
                        size="sm"
                        src={user?.profilePhoto}
                    />
                    <h2 className="pe-2 text-sm">{user?.name}</h2>
                    <ArrowIcon />
                </div>
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
