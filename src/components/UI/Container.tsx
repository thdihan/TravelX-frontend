const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container mx-auto w-full md:max-w-7xl pt-4  px-2 md:px-6 flex-grow">
            {children}
        </div>
    );
};

export default Container;
