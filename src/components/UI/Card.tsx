"use client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
    Card as NextJsCard,
    CardBody,
    CardFooter,
    CardHeader,
} from "@nextui-org/card";

import { IPost } from "@/src/types";
import { useState } from "react";

const Card = () => {
    const [isFollowed, setIsFollowed] = useState(false);

    return (
        <NextJsCard className="w-full p-4">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src="https://nextui.org/avatars/avatar-1.png"
                    />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">
                            Zoey Lang
                        </h4>
                        <h5 className="text-small tracking-tight text-default-400">
                            @zoeylang
                        </h5>
                    </div>
                </div>
                {/* <Button
                            className={
                                isFollowed
                                    ? "bg-transparent text-foreground border-default-200"
                                    : ""
                            }
                            color="primary"
                            radius="full"
                            size="sm"
                            variant={isFollowed ? "bordered" : "solid"}
                            onPress={() => setIsFollowed(!isFollowed)}
                        >
                            {isFollowed ? "Unfollow" : "Follow"}
                        </Button> */}
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
                <div className="h-[300px] py-4">
                    <img
                        className="rounded-xl w-full h-full object-cover object-center"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTVW7qIPLFJ_alveDA1xU-P0mGXH0CF98Fw&s"
                        alt=""
                    />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    rerum vero, laboriosam non placeat distinctio animi omnis
                    tenetur consequuntur corporis repellendus neque rem!
                    Consectetur ab natus, repudiandae maiores recusandae
                    provident cum excepturi saepe consequuntur voluptatem
                    distinctio nemo? Repellat ipsum iste vel molestiae veniam
                    cum cupiditate, hic saepe itaque minima numquam. Dolorem
                    odio excepturi voluptatibus. Error consequuntur eius
                    asperiores, quia iusto odit nesciunt in fugit maiores
                    commodi unde impedit nam, at atque sunt. Sit enim
                    consequatur exercitationem eveniet, voluptatum vel nihil
                    earum quibusdam culpa ullam totam eligendi nemo, itaque
                    temporibus placeat in, autem et unde ratione. Similique eum
                    voluptatum eos necessitatibus?
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">
                        4
                    </p>
                    <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">
                        97.1K
                    </p>
                    <p className="text-default-400 text-small">Followers</p>
                </div>
            </CardFooter>
        </NextJsCard>
    );
};

export default Card;
