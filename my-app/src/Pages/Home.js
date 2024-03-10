import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="bg-[url('home_background.svg')]">
      <div class="pb-10">
        <h1 class="text-5xl font-bold pl-5 pt-10 text-white font-MadimiOne"> Hi Jane, </h1>
        <p class="text-2xl m-5 text-white"> Welcome to Budget Buddies! </p>
        <img class="pl-5 m pb-0 mb-0" src="badge_count.svg" />
        <div class="grid grid-cols-2">
          <img class="col-start-3 mt-0 py-0 px-10" src="pig_logo.svg" />
        </div>
      </div>
      <div class="py-10">
        <hl class="text-5xl font-bold flex pl-5 font-MadimiOne">
          Your Friends
        </hl>
        <img src="friends_carousel.svg" />
      </div>

      <hl class="text-5xl font-bold flex pl-5 font-MadimiOne">
        Learning Corner
      </hl>
      <p class="text-2xl mt-2 m-5"> Achieve your financial goals! </p>

      <div class="carousel carousel-center max-w-md p-4 space-x-4 rounded-box">
        <div class="carousel-item">
          <Link to='/learningcorner'> <img src="money.svg" class="rounded-box" /></Link>
        </div>
        <div class="carousel-item">
          <Link to='/learningcorner'> <img src="saving.svg" class="rounded-box" /> </Link>
        </div>
        <div class="carousel-item">
          <Link to='/learningcorner'> <img src="budgeting.svg" class="rounded-box" /></Link>
        </div>
        <div class="carousel-item">
          <Link to='/learningcorner'> <img src="investing.svg" class="rounded-box" /></Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Home;
