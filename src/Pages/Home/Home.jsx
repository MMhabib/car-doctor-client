import About from "./About/About";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div className="space-y-36">
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;