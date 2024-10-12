"use client";

import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from "@nextui-org/link";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@nextui-org/modal";
import { ChangeEvent, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Select, SelectItem } from "@nextui-org/select";
import { FieldValues, SubmitHandler } from "react-hook-form";

const categoryOption = [
    { label: "Category 1", key: "category1" },
    { label: "Category 2", key: "category2" },
    { label: "Category 3", key: "category3" },
];

export default function CreatePostModal({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onOpen: () => void;
    placeholder?: string;
}) {
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [category, setCategory] = useState<string>("");
    const [isPremium, setIsPremium] = useState<boolean>(false);
    const editor = useRef(null);
    const [content, setContent] = useState("");

    const onSubmit = () => {
        const formData = new FormData();

        const postData = {
            content: content,
            category: "category1",
            isPremium: false,
        };

        formData.append("data", JSON.stringify(postData));

        for (let image of imageFiles) {
            formData.append("itemImages", image);
        }

        console.log(formData.get("data"));
        console.log(formData.get("itemImages"));

        // handleCreatePost(formData);
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0];

        setImageFiles((prev) => [...prev, file]);

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePreviews((prev) => [...prev, reader.result as string]);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            placement="top-center"
            size="5xl"
            onOpenChange={onOpenChange}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Create Post
                        </ModalHeader>
                        <ModalBody>
                            <JoditEditor
                                ref={editor}
                                value={content}
                                // tabIndex={1} // tabIndex of textarea
                                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={(newContent) => {}}
                            />
                            {imagePreviews.length > 0 && (
                                <div className="flex gap-5 my-5 flex-wrap">
                                    {imagePreviews.map((imageDataUrl) => (
                                        <div
                                            key={imageDataUrl}
                                            className="relative size-48 rounded-xl border-2 border-dashed border-default-300 p-2"
                                        >
                                            <img
                                                alt="item"
                                                className="h-full w-full object-cover object-center rounded-md"
                                                src={imageDataUrl}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="min-w-fit flex-1">
                                <label
                                    className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
                                    htmlFor="image"
                                >
                                    Upload image
                                </label>
                                <input
                                    multiple
                                    className="hidden"
                                    id="image"
                                    type="file"
                                    onChange={(e) => handleImageChange(e)}
                                />
                            </div>

                            <div className="min-w-fit flex-1">
                                {/* <FXSelect
                                    // disabled={!categorySuccess}
                                    label="Category"
                                    name="category"
                                    options={categoryOption}
                                /> */}
                                <Select
                                    className="min-w-full sm:min-w-[225px]"
                                    // isDisabled={disabled}
                                    label="Category"
                                    value={category}
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                >
                                    {categoryOption.map((option) => (
                                        <SelectItem key={option.key}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </div>

                            <div className="flex py-2 px-1 justify-between">
                                <Checkbox
                                    checked={isPremium}
                                    classNames={{
                                        label: "text-small",
                                    }}
                                    onChange={(e) =>
                                        setIsPremium(e.target.checked)
                                    }
                                >
                                    Premium
                                </Checkbox>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="flat"
                                onPress={onClose}
                            >
                                Close
                            </Button>
                            <Button
                                color="primary"
                                onPress={() => {
                                    onSubmit();
                                    onClose();
                                }}
                            >
                                Sign in
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
