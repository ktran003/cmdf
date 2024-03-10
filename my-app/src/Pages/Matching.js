import React from 'react';
import { useState } from 'react';

function Matching() {

    return (
        <div className="container bg-backgroundColour">
            <div className="mx-auto text-center pt-10">
                <h className="font-bold text-5xl text-black">Matching</h>
                <p className="mt-3 text-black">Match the word with it's definition</p>
            </div>

            <div className="grid grid-flow-row">
                <div className="grid col-span-3 w-50 h-30 gap-5 mx-auto items-center mb-10">
                    <label className="swap swap-flip text-9xl col-start-1">
                        <input type="checkbox" />
                    
                        <div className="swap-on">
                            <img src="/Question1.svg" />
                        </div>
                        <div className="swap-off">
                            <img src="/purpleCard.png" />
                        </div>
                    </label>

                    <label className="swap swap-flip text-9xl col-start-2">
                        <input type="checkbox" />
                        
                        <div className="swap-on">
                            <img src="/whiteCard.png" />
                        </div>
                        <div className="swap-off">
                            <img src="/purpleCard.png" />
                        </div>
                    </label>
                    <label className="swap swap-flip text-9xl col-start-3">
                        <input type="checkbox" />
                        <div className="swap-on">
                            <img src="/whiteCard.png" />
                        </div>
                        <div className="swap-off">
                            <img src="/purpleCard.png" />
                        </div>
                    </label>
                    
                </div>
                <div className="grid col-span-3 w-50 h-30 gap-5 mx-auto items-center mb-10">
                    <label className="swap swap-flip text-9xl col-start-1">
                        <input type="checkbox" />
                        <div className="swap-on">
                            <img src="/whiteCard.png" />
                        </div>
                        <div className="swap-off">
                            <img src="/purpleCard.png" />
                        </div>
                    </label>

                    <label className="swap swap-flip text-9xl col-start-2">
                        <input type="checkbox" />
                        <div className="swap-on">
                            <img src="/whiteCard.png" />
                        </div>
                        <div className="swap-off">
                            <img src="/purpleCard.png" />
                        </div>
                    </label>

                    <label className="swap swap-flip text-9xl col-start-3">
                        <input type="checkbox" />
                        <div className="swap-on">
                            <img src="/Answer1.svg" />
                        </div>
                        <div className="swap-off">
                            <img src="/purpleCard.png" />
                        </div>
                    </label>

                </div>
                <div className="grid col-span-3 w-50 h-30 gap-5 mx-auto items-center mb-10">
                    <label className="swap swap-flip text-9xl col-start-1">
                        <input type="checkbox" />
                        <div className="swap-on">
                            <img src="/whiteCard.png" />
                        </div>
                        <div className="swap-off">
                            <img src="/purpleCard.png" />
                        </div>
                    </label>

                    <label className="swap swap-flip text-9xl col-start-2">
                        <input type="checkbox" />
                        <div className="swap-on">
                            <img src="/Question2.svg" />
                        </div>
                        <div className="swap-off">
                            <img src="/purpleCard.png" />
                        </div>
                    </label>

                    <label className="swap swap-flip text-9xl col-start-3">
                        <input type="checkbox" />
                        <div className="swap-on">
                            <img src="/whiteCard.png" />
                        </div>
                        <div className="swap-off">
                            <img src="/purpleCard.png" />
                        </div>
                    </label>


                </div>
                <div className="grid col-span-3 w-50 h-30 gap-5 mx-auto items-center ">
                    <label className="swap swap-flip text-9xl col-start-1">
                        <input type="checkbox" />
                        <div className="swap-on">
                            <img src="/whiteCard.png" />
                        </div>
                        <div className="swap-off">
                            <img src="/purpleCard.png" />
                        </div>
                    </label>

                    <label className="swap swap-flip text-9xl col-start-2">
                        <input type="checkbox" />
                        <div className="swap-on">
                            <img src="/Answer2.svg" />
                        </div>
                        <div className="swap-off">
                            <img src="/purpleCard.png" />
                        </div>
                    </label>

                    <label className="swap swap-flip text-9xl col-start-3">
                        <input type="checkbox" />
                        <div className="swap-on">
                            <img src="/whiteCard.png" />
                        </div>
                        <div className="swap-off">
                            <img src="/purpleCard.png" />
                        </div>
                    </label>


                </div>
            </div>
            <div className="mx-auto text-center py-10">

                <button className="btn btn-lg">Start</button>
            </div>

        </div>
    );
}

export default Matching;
