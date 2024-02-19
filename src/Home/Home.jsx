import Banner from "../Banner";
import Footer from "../Footer/Footer";
import Aboutus from "../components/Aboutus/Aboutus";
import Subscribe from "./Subscribe";



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Aboutus></Aboutus>
          <Subscribe></Subscribe>
          <Footer></Footer>  
          
            
        </div>
    );
};

export default Home;