import Container from "@/src/components/UI/Container";
import { Navbar } from "@/src/components/UI/navbar";
import Sidebar from "@/src/components/UI/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar />
            <Container>
                <div className="flex w-full gap-12">
                    {/* <div className="w-2/6">
                        <Sidebar />
                    </div>
                    <div className="w-5/6">{children}</div> */}
                    {children}
                </div>
            </Container>
        </div>
    );
};

export default Layout;
