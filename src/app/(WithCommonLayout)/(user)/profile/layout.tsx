import { ReactNode } from "react";

import Container from "@/src/components/UI/Container";
import Sidebar from "@/src/components/UI/Sidebar";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <Container>
            <div className="my-3 flex flex-col md:flex-row w-full md:gap-12">
                <div className="w-full md:w-2/6 mb-4 md:mb-0">
                    <Sidebar />
                </div>
                <div className="w-full md:w-5/6">{children}</div>
            </div>
        </Container>
    );
}
