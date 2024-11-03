"use client";

import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/modal";
import { ChangeEvent, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Select, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/input";

import LoadingSpinner from "./Loading";

import { useGetCategories } from "@/src/hooks/categories.hook";
import { useUpdatePost } from "@/src/hooks/post.hook";
import { WriteIcon } from "@/src/assets/icons";
import { IPost } from "@/src/types";

type TProps = {
    userId?: string;
    post: IPost;
};
export default function UpdatePost({ userId, post }: TProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>(
        post.images || []
    );
    const [category, setCategory] = useState<string>(post.category._id);
    const [isPremium, setIsPremium] = useState<boolean>(post.isPremium);
    const editor = useRef(null);
    const [content, setContent] = useState(post.content);
    const [title, setTitle] = useState(post.title);

    const { mutate: handleUpdatePost, isPending: updatePending } =
        useUpdatePost(post._id);

    const {
        data: categoryData,
        isSuccess: categorySuccess,
        isPending: getCategoryPending,
    } = useGetCategories();

    let categoryOption: { key: string; label: string }[] = [];

    if (categoryData?.data && categorySuccess) {
        categoryOption = categoryData?.data.map(
            (category: { _id: string; name: string }) => {
                return {
                    key: category._id,
                    label: category.name,
                };
            }
        );
    }

    const onSubmit = () => {
        const formData = new FormData();

        const postData = {
            title: title,
            user: userId,
            content: content,
            category: category,
            isPremium: isPremium,
        };

        // console.log("post data", postData);
        formData.append("data", JSON.stringify(postData));

        for (let image of imageFiles) {
            formData.append("itemImages", image);
        }

        console.log("form data", formData.get("itemImages"));

        handleUpdatePost(formData);
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
        <>
            {(getCategoryPending || updatePending) && <LoadingSpinner />}
            <WriteIcon className="cursor-pointer text-red" onClick={onOpen} />
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
                                <Input
                                    label="Title"
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    // tabIndex={1} // tabIndex of textarea
                                    onChange={(newContent) =>
                                        setContent(newContent)
                                    } // preferred to use only this option to update the content for performance reasons
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
                                    <Select
                                        className="min-w-full sm:min-w-[225px]"
                                        defaultSelectedKeys={[category]}
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
                                        // checked={isPremium}
                                        isSelected={isPremium}
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
                                    Update Post
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
