function Dashboard() {
  return (
    <div>
      <h1 class="text-5xl font-bold m-5 pt-6"> Hi Jane, </h1>
      <p class="text-2xl m-5"> Welcome to Budget Buddies! </p>
      <img
        class="flex justify-center m-5 max-w-screen-xlg"
        src="dashboard_image.svg"
      ></img>
      <hl class="text-5xl font-bold m-5 pt-6"> Learning Corner </hl>
      <p class="text-2xl m-5"> Achieve your financial goals! </p>

      <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        <div class="carousel-item">
          <img src="saving_image.svg" alt="Shoes" />
        </div>
        <div class="carousel-item">
          <div class="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img src="saving_image.svg" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Saving & Budgeting!</h2>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Credit Cards!</h2>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Investing!</h2>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Saving & Budgeting!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
