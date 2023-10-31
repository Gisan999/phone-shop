import { useLoaderData } from "react-router-dom";
import Phones from "../Phones/Phones";


const Home = () => {

    const phones = useLoaderData();
    // console.log(phones)
    return (
        <div className="max-w-screen-xl mx-auto mt-8">
            <h2>hey bro!!!</h2>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;