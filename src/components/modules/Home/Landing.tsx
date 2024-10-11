import { Input } from "@nextui-org/input";

import { SearchIcon } from "../../icons";

const Landing = () => {
    return (
        <div className="h-[calc(100vh-64px)] w-full bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30440.jpg?w=1380&t=st=1728057957~exp=1728058557~hmac=5c51a813bf0a8be25e8678ee328921935755e259e433464f7e31b1613353be0c')] bg-cover bg-center">
            <div className="w-1/3 text-center mx-auto py-8">
                <form>
                    <Input
                        aria-label="search"
                        classNames={{
                            inputWrapper: "bg-default-100",
                            input: "text-sm",
                        }}
                        labelPlacement="outside"
                        placeholder="Search..."
                        size="lg"
                        startContent={
                            <SearchIcon className="pointer-events-none flex-shrink-0" />
                        }
                        type="text"
                    />
                </form>
            </div>
        </div>
    );
};

export default Landing;
