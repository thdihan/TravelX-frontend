import Container from "@/src/components/UI/Container";
import Sidebar from "@/src/components/UI/Sidebar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <Container>
            <div className="my-3 flex w-full gap-12">
                <div className="w-2/6">
                    <Sidebar />
                </div>
                <div className="w-5/6">{children}</div>
            </div>
        </Container>
    );
}
