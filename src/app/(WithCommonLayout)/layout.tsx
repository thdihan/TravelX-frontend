import { Navbar } from "@/src/components/UI/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
