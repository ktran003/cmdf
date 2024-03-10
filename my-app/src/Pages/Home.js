function Home() {
  return (
    <div>
      <h1 class="text-5xl font-bold m-5 pt-6"> Hi Jane, </h1>
      <p class="text-2xl m-5"> Welcome to Budget Buddies! </p>
      <div class="flex justify-center items-center mb-10">
        <img class="object-fill" src="dashboard_image.svg" />
      </div>
      <hl class="text-5xl font-bold flex justify-center items-center">
        {" "}
        Learning Corner{" "}
      </hl>
      <p class="text-2xl m-5"> Achieve your financial goals! </p>

      <div class="carousel carousel-center max-w-md p-4 space-x-4 rounded-box">
        <div class="carousel-item">
          <img src="money.svg" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="saving.svg" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="budgeting.svg" class="rounded-box" />
        </div>
        <div class="carousel-item">
          <img src="investing.svg" class="rounded-box" />
        </div>
      </div>
    </div>
  );
}

export default Home;
