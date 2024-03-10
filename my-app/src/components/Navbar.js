import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to='/home'> Home</Link>
            <Link to='/chatbot'> Chatbot</Link>
        </div>
    )
}

export default Navbar