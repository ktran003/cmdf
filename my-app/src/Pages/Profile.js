import Navbar from "../components/Navbar";

function Profile() {
    return (
        <div className="container bg-backgroundColour">
            
            <div className="ml-8 pt-10 pb-5">
                <h className="text-5xl font-bold text-black mb-5">Profile</h>
            </div>
            <div className="flex items-center justify-center mb-5">
                <img src="ProfileBadge.svg" />
            </div>
            <div className="flex items-center justify-center">
                <img src="Profile1.svg" />
            </div>
            <div className="flex items-center justify-center">
                <img src="Frame29.svg" />
            </div>
            <div className="flex items-center justify-center">
                <img src="Frame30.svg" />
            </div>
            <Navbar />
        </div>
    );
}

export default Profile;