import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function LearningCorner() {
    return (
        <div class="bg-[url('learning_corner_bg.svg')]">
            
            <div className="pt-10 pl-5">
            <Link to="/home">
                <img src="arrow.svg"/>
                </Link>
            </div>

            <div className="mx-auto text-center pt-2">
                <h className="text-5xl mb-5 text-black font-bold font-MadimiOne">Learning Corner</h>
                <p className="mt-5 text-black">Choose a game to learn Money 101!</p>
            </div>

            <div className="grid grid-cols-2 justify-center items-center mb-10 pl-8 pt-5">
                <Link to='/matching'> <img src="/Group11.png" className="pr-10 justify-self-center" /> </Link>
                <Link to='/quiz'> <img src="/Group12.png" className=" justify-self-center" /></Link>
            </div>

            <div className="grid grid-cols-2 mx-auto items-center mb-10">
                <img src="/Group13.png" className=" justify-self-center" />
                <img src="/Group14.png" className=" justify-self-center" />
            </div>

            <div className="grid grid-cols-2 mx-auto items-center pb-10">
            <Link to='/multiplayer'> <img src="/Group15.png" className=" pl-5 justify-self-center" /></Link>
                <img src="/Group16.png" className=" justify-self-center" />
            </div>
            <Navbar />

            <Navbar />
        </div>
        
    );
}

export default LearningCorner;