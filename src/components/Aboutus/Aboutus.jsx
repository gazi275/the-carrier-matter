import { FaAddressCard } from "react-icons/fa";
import { MdOutlineCardMembership } from "react-icons/md";
import { PiCardholderFill } from "react-icons/pi";
const Aboutus = () => {
  return (
    <div className="mt-24 w-full lg:w-[1200px] mx-auto   py-10    lg:top-0">
      <div className="grid  grid-cols-1  lg:grid-cols-3 gap-3">
        {/* Expert Agent div */}
        <div>
          <p className="flex justify-center text-6xl text-blue-600 hover:-translate-y-3 hover:scale-110  duration-300 ">
            <FaAddressCard></FaAddressCard>
          </p>
          <p className="uppercase text-center text-3xl font-Roboto py-2">
            Expert Agent
          </p>
          <p className="font-Unbounded text-center">
            {" "}
            We have Many expert agent in our Carrer hub company .Any kinds of
            People can get help through the agent .{" "}
          </p>
        </div>

        {/* Quality standard */}

        <div>
          <p className="flex justify-center text-6xl text-blue-500 hover:-translate-y-3 hover:scale-110  duration-300">
            <MdOutlineCardMembership></MdOutlineCardMembership>
          </p>
          <p className="uppercase text-center font-Roboto  text-3xl py-2  ">
            {" "}
            Quality standard{" "}
          </p>
          <p className="font-Unbounded text-center">
            {" "}
            We have the standard quality of our jobs and anyone can get help
            through this{" "}
          </p>
        </div>

        {/* certified method */}

        <div>
          <p className="text-6xl text-blue-500 flex justify-center hover:-translate-y-3 hover:scale-110  duration-300">
            {" "}
            <PiCardholderFill />
          </p>
          <p className="uppercase text-center py-2 font-Roboto text-3xl">
            certified method
          </p>
          <p className="font-Unbounded">
            {" "}
            A vast certified method has being applied in our every section of
            this Website{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
