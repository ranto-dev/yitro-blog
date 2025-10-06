import { FaSpinner } from "react-icons/fa6";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex gap-4 justify-center items-center">
        <FaSpinner />
        <p>Loading</p>
      </div>
    </div>
  );
};

export default Loading;
