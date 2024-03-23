import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[2.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}
      style={{ marginBottom: "1.5rem" }} // Adjust margin bottom here
    >
      <img className="w-5 h-4 mr-4" src={loading} alt="Loading" />
      Your English is Improving ...
    </div>
  );
};

export default Generating;
