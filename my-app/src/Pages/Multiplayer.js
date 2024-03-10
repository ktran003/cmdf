import {Link} from 'react-router-dom';
import React from 'react';

function Multiplayer() {
    return (
        <div className="pb-10 container bg-backgroundColour">
            <div className="pt-10 pl-5">
            <Link to="/learningcorner">
                <img src="arrow.svg"/>
                </Link>
            </div>
            <div className="ml-8 pt-2 pb-5">
                <h className="text-5xl font-bold text-black mb-5">Multiplayer</h>
                <p className="mt-2">Play online or with a friend!</p>
            </div>
            <div className="grid grid-cols-4">
                <img src="Level.svg" className="col-start-2 col-span-2"/>
                <img src="Points.svg" className="col-start-4 "/>
            </div>
            <div className="flex justify-center items-center">
                <img src="Illlustration.svg" className="pr-10" />
            </div>
            <div className="grid grid-cols-4">
                <img src="Guide.svg" className="col-start-2 "/>
                <img src="Profile.svg" className="col-start-3 "/>
            </div>
            <div>
                <h className="font-bold text-2xl pl-8">Find a friend</h>
            </div>
            <div>
                <img src="Carousel.svg"/>
            </div>
        </div>
    );
}

export default Multiplayer