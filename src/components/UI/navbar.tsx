"use client";
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import NavbarDropDown from "./NavbarDropdown";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/UI/theme-switch";
import { Logo } from "@/src/components/icons";
import { useUser } from "@/src/contest/user.provider";
import { Avatar } from "@nextui-org/avatar";
import { Input } from "@nextui-org/input";

export const Navbar = () => {
    const { user } = useUser();

    return (
        <NextUINavbar maxWidth="xl" position="sticky" className="bg-[#F9F9F9]">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                {/* Logo  */}
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="/"
                    >
                        <h2 className="text-xl font-semibold">TravelX</h2>
                    </NextLink>
                </NavbarBrand>

                {/* <ul className="hidden lg:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul> */}
            </NavbarContent>
            <NavbarContent>
                <Input
                    name="search"
                    className="border outline-gray-300 rounded-xl"
                    placeholder="Search"
                    endContent={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            width={24}
                        >
                            <path
                                fillRule="evenodd"
                                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    }
                />
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                {/* <ThemeSwitch /> */}
                <NavbarDropDown />
            </NavbarContent>

            {/* <NavbarContent className="sm:hidden basis-1 pl-2" justify="end">
                <ThemeSwitch />

                <NavbarMenuToggle />
            </NavbarContent> */}

            {/* <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2
                                        ? "primary"
                                        : index ===
                                            siteConfig.navMenuItems.length - 1
                                          ? "danger"
                                          : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu> */}
        </NextUINavbar>
    );
};
