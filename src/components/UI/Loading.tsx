import { Spinner } from "@nextui-org/spinner";

const LoadingSpinner = () => {
    return (
        <div className=" h-screen bg-black/10 fixed inset-0 z-[9999] backdrop-blur-sm flex justify-center items-center">
            <Spinner size="lg" />
        </div>
    );
};

export default LoadingSpinner;
