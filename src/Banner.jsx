

const Banner = () => {
    return (
        <div className="relative ">
        <div className="bg-[#216AD7]  w-full h-[560px]  bg-[url('https://i.ibb.co/wd9RP4K/pattern-hero-2x.png')] [clip-path:polygon(0%_0%,100%_0%,100%_25%,0%_100%)] relative" >
            
        </div>
        <div className=" flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center gap-8 -top-7 lg:ml-44   absolute ">
            <div className="">
                <h2 className="lg:text-white my-7  lg:-mt-2   text-5xl lg:text-6xl font-bold">
                FIND YOUR DREAM JOB WITH US
                </h2>
                <p className="font-serif font-normal lg:text-white mx-auto mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                <button type="button" className="lg:text-white text-base my-11 py-5 bg-gradient-to-r from-green-400 via-green-500  to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  rounded-lg  px-8 text-center me-2 mb-2">Find Job Now</button>
                
            </div>
            <div className="[clip-path:polygon(0%_20%,100%_0%,100%_83%,0%_100%)]  lg:ml-0  lg:w-full mt-[100px]  ">
        <img className=" h-[600px] lg:auto  w-full" src="https://i.ibb.co/1mYqxdq/group-of-colleagues-working-together-e1623748076631.jpg" alt="group of people "  />
            </div>
        </div>
        <div className="lg:flex justify-start items-center gap-10 lg:mt-15 ml-40 hidden">
                   <img className="h-8 w-40" src="https://i.ibb.co/mFZVPws/partner2-1-300x45.png"  />
                   <img className="h-10 w-40" src="https://i.ibb.co/5WwTsf6/partner3-1-300x63.png"  />
                </div>
       </div>
    );
};

export default Banner