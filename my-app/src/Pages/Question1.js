import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import TextToSpeech from '../Tools/TextToSpeech';
import Navbar from '../components/Navbar';

import { useNavigate } from "react-router-dom";


function Question1() {
    const [isClicked, setIsClicked] = useState(false);
    const text = "What do we call the money you earn from your job or allowance? Income. Expenses. Credit.";
    const navigate = useNavigate();

    const handleClick = () => {
        setIsClicked(!isClicked);
        setTimeout(() => { navigate("/finish") }, 3000);
    };
    return (
        <div class="pb-10 container bg-backgroundColour">

            <div className="pt-10 pl-5">
                <Link to="/learningcorner">
                    <img src="arrow.svg" />
                </Link>
            </div>
            <div className="mx-auto text-center pt-2 pb-10">
                <h className="text-5xl font-bold text-black pb-5">Build Your Knowledge</h>

                <div className="flex items-center justify-center">
                    <img src="coins.png" className="justify-self-center" />

                </div>
                <div className="flex items-center justify-center">
                    <TextToSpeech text={text} />
                </div>
                <div className="mx-auto text-center pb-10 pt-5">
                    <p className="text-2xl font-nunito">What do we call the money you earn from your job or allowance?</p>
                </div>

                <div className="text-white mx-auto flex items-center justify-center grid grid-flow-row gap-5 ">
                    <div className="card w-96 bg-buttonColour">
                        <div className={`card-body ${isClicked ? 'bg-rightColour' : ''}`} onClick={handleClick}>
                            <h2 className="font-nunito card-title text-center flex justify-center items-center">Income</h2>
                        </div>
                    </div>
                    <div className="card w-96 bg-buttonColour">
                        <div className="card-body">
                            <h2 className="font-nunito card-title text-center flex justify-center items-center">Expenses</h2>
                        </div>
                    </div>
                    <div className="card w-96 bg-buttonColour">
                        <div className="card-body">
                            <h2 className="font-nunito card-title text-center flex justify-center items-center">Credit</h2>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar />

        </div>
    );
}

export default Question1;


