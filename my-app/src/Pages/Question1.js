import { React, useState } from 'react';
import TextToSpeech from '../Tools/TextToSpeech';
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";

function Question1() {
    const [isClicked, setIsClicked] = useState(false);
    const text = "What do we call the money you earn from your job or allowance? Income. Expenses. Credit.";
    const navigate = useNavigate();

    const handleClick = () => {
        setIsClicked(!isClicked);
        navigate("/finish");
    };
    return (
        <div class="pb-10 container bg-backgroundColour">
            <div className="mx-auto text-center pt-10 pb-5">
                <h className="text-5xl font-bold">Build Your Knowledge</h>
            </div>
            <div className="flex items-center justify-center">
                <img src="coins.png" className="justify-self-center" />

            </div>
            <div className="flex items-center justify-center">
                <TextToSpeech text={text} />
            </div>
            <div className="mx-auto text-center my-10">
                <p className="text-2xl">What do we call the money you earn from your job or allowance?</p>
            </div>

            <div className="text-white mx-auto flex items-center justify-center grid grid-flow-row gap-5 ">
                <div className="card w-96 bg-buttonColour">
                    <div className={`card-body ${isClicked ? 'bg-rightColour' : ''}`} onClick={handleClick}>
                        <h2 className="card-title text-center flex justify-center items-center">Income</h2>
                    </div>
                </div>
                <div className="card w-96 bg-buttonColour">
                    <div className="card-body">
                        <h2 className="card-title text-center flex justify-center items-center">Expenses</h2>
                    </div>
                </div>
                <div className="card w-96 bg-buttonColour">
                    <div className="card-body">
                        <h2 className="card-title text-center flex justify-center items-center">Credit</h2>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    );
}

export default Question1;


