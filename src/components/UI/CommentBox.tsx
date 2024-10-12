import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Textarea } from "@nextui-org/input";
import React from "react";

export default function CommentBox() {
    return (
        <div className="p-4 bg-white border border-gray-300 shadow-lg rounded-lg space-y-4">
            <div className="space-y-2">
                <Textarea name="comment" label="Comment"></Textarea>
                <div className="text-end">
                    <Button className="bg-[#eb6b56] text-white">Comment</Button>
                </div>
            </div>
            <Divider />
            <div className="space-y-2">
                <h3 className="font-semibold">Username</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque nemo sapiente minus, suscipit saepe, ipsum
                    eveniet molestias quis eaque dolorem, adipisci cumque
                    debitis et eligendi placeat ab? Vitae consectetur animi
                    iusto, tempora et recusandae nisi dolorem nobis sed
                    explicabo voluptates.
                </p>
            </div>
            <Divider />
            <div className="space-y-2">
                <h3 className="font-semibold">Username</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque nemo sapiente minus, suscipit saepe, ipsum
                    eveniet molestias quis eaque dolorem, adipisci cumque
                    debitis et eligendi placeat ab? Vitae consectetur animi
                    iusto, tempora et recusandae nisi dolorem nobis sed
                    explicabo voluptates.
                </p>
            </div>
        </div>
    );
}
