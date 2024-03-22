

const Subscribe = () => {
    return (
        <div className="bg-[#EFF8FF] flex justify-center items-center h-[320px] ">
            <div className="text-center space-y-2">
                <h2 className="text-[#000000] font-bold text-4xl"> SUBSCRIBE NEWSLETTER </h2>
                <p className="text-center text-[#7A7A7A]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore magna</p>
                <input className="shadow appearance-none border rounded w-72  py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-6"  type="email" id="email" pattern=".+@example\.com"  placeholder="Enter your Email" />
                <button type="submit" className="bg-[#22D3A6]  hover:bg-blue-700 text-white font-bold py-[10px] px-5 rounded focus:outline-none focus:shadow-outline">Sign UP</button>
            </div>
        </div>
    );
};

export default Subscribe;