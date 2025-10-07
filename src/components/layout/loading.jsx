import { FaSpinner } from "react-icons/fa6";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex gap-4 justify-center items-center ania">
        {/* <FaSpinner className="animate-spin"/>
        <p>Loading</p> */}
        <div className="w-10 h-2 bg-blue-600 animate-spin " style={{animationDelay: ""}}></div>
        <div className="w-10 h-2 bg-blue-600 animate-spin " style={{animationDelay: "100ms"}}></div>
        <div className="w-10 h-2 bg-blue-600 animate-spin " style={{animationDelay: "200ms"}}></div>
        <div className="w-10 h-2 bg-blue-600 animate-spin " style={{animationDelay: "300ms"}}></div>
        <div className="w-10 h-2 bg-blue-600 animate-spin " style={{animationDelay: "400ms"}}></div>
        <div className="w-10 h-2 bg-blue-600 animate-spin " style={{animationDelay: "500ms"}}></div>
      </div>
    </div>
  );
};

export default Loading;
