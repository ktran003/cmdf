import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div class=" sticky bottom-0 navbar bg-base-100">
            <div class="flex flex-1 space-x-10 justify-center items-center">
                <Link to='/home'> <img src="home_button.svg" /></Link>
                <Link to='/chatbot'> <img src="chatbot_button.svg" /></Link>
                <Link to='/profile'> <img src="profile_button.svg" /></Link>
            </div>
        </div>
    )
}



export default Navbar