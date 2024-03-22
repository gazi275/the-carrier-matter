import Banner from "../Banner";
import Footer from "../Footer/Footer";
import Aboutus from "../components/Aboutus/Aboutus";

import Subscribe from "./Subscribe";

import Serve from "../components/serve/Serve";




const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <div className="relative top-[350px] md:top-[200px] lg:top-0">
          <Aboutus></Aboutus>

          <Subscribe></Subscribe>
          <Footer></Footer>  
          
          </div>

          <Serve></Serve>

            
        </div>
    );
};

export default Home;