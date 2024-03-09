import React, { useState, useEffect } from "react";
import "../App.css";

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    synth.speak(utterance);

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  return (
    // <div>
    //   <button className="btn" onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</button>
    //   <button className="btn btn-blue" onClick={handlePause}>Pause</button>
    //   <button className="btn btn-blue" onClick={handleStop}>Stop</button>
    // </div>
    <div>
    <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</button>
    <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePause}>Pause</button>
    <button className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleStop}>Stop</button>
  </div>
  );
};

export default TextToSpeech;