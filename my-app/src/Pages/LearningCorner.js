import { Link } from "react-router-dom";

function LearningCorner() {
    return (
        <div class="bg-[url('learning_corner_bg.svg')]">
            <div className="mx-auto text-center pt-10">
                <h className="text-5xl mb-5 text-black font-bold">Learning Corner</h>
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
                <img src="/Group15.png" className=" justify-self-center" />
                <img src="/Group16.png" className=" justify-self-center" />
            </div>



        </div>
    );
}

export default LearningCorner;