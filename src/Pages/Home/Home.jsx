import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div className="space-y-36">
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;