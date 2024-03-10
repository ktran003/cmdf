function Finish() {
    return (
        <div className="container bg-backgroundColour">
            <div className="mx-auto text-center pt-10">
                <h className="text-5xl font-bold text-black pb-5 font-MadimiOne">Nice Work!</h>
                <p className="pt-2">You&apos;ve just completed Money 101.</p>
            </div>
            <div className="flex justify-center items-center pt-5">
                <img src="piggyBank.svg"/>
            </div>
            <div className="flex justify-center items-center pt-5">
                <img src="Star.svg"/>
            </div>
            <div>
                <p className="mx-auto text-center pt-5">You earned 80 points!</p>
            </div>
            <div className="flex justify-center items-center pt-5 pb-10">
                <img src="button.svg"/>
            </div>

        </div>
    );
}

export default Finish;