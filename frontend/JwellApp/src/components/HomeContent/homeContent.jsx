import "./homeContent.css";

const HomeContent = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/1446056509/photo/necklace.jpg?s=612x612&w=0&k=20&c=7eJ0k3fuClDRl6waDW0UIruoIyAGmBPEntcWknZk_d0="
              className="img1 d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/654392550/photo/engagement-rings-at-the-hands-of-the-newlyweds.jpg?s=612x612&w=0&k=20&c=GumBIPyk-QuZ-FvWY4xYGS6MOnQvWyWpHhLerQL9qFg="
              className="img2 d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="bg-dark d-flex flex-row ">
        <div className="info-blog"></div>
        <div className="info-blogs ">
          <h1 className="mt-5">GIFT LOVE, GIFT MANIMANJIRI</h1>
          <h3 className="mt-3">Your perfect jewellery gift awaits </h3>
          <button className="mt-3 but">Shop Now</button>
        </div>
      </div>
      <h1 className="text-white mt-5  text-center"> Trending Styles</h1>
      <div className="cont-content">
        <div>
          <img
            src="https://media.istockphoto.com/id/1446056509/photo/necklace.jpg?s=612x612&w=0&k=20&c=7eJ0k3fuClDRl6waDW0UIruoIyAGmBPEntcWknZk_d0="
            alt=""
            className="img-fluid"
          />
          <h4 className="text-white text-center mt-2">Floral Necklaces</h4>
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1331428097/photo/diamond-ring-in-jewelry-gift-box.jpg?s=612x612&w=0&k=20&c=Afk9mXNSLKsZ2V922GpCkbyj1bGKo6s1yOuSEFUz0PQ="
            alt=""
            className="img-fluid"
          />
          <h4 className="text-white text-center mt-2">Best of Manimanjiri</h4>
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/654392550/photo/engagement-rings-at-the-hands-of-the-newlyweds.jpg?s=612x612&w=0&k=20&c=GumBIPyk-QuZ-FvWY4xYGS6MOnQvWyWpHhLerQL9qFg="
            alt=""
            className="img-fluid"
          />
          <h4 className="text-white text-center mt-2">Stackable Accessories</h4>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
