import { ReactNode } from "react";

const layout = ({
    children,
}: {
    children: ReactNode;
    recentPosts: ReactNode;
}) => {
    return <>{children}</>;
};

export default layout;
