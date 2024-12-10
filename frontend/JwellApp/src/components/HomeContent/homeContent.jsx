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
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <iframe
              width="100%"
              height="430"
              src="https://www.youtube.com/embed/8EPFqerB6qU?si=6y1DXVbZI-qmrYhn"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1747560886/photo/blue-sapphire.jpg?s=1024x1024&w=is&k=20&c=sd5DcmFGk3goOxCsKJy-egAchZqaEr8Wa1DYUiEbEOE="
              className=" img1 d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1304598495/photo/beautiful-necklace-and-earrings-on-a-background-of-silk-womens-accessories.jpg?s=612x612&w=0&k=20&c=3o25AOrhvMg-wlpbVdH1aMi5YCvPOnlYlZFd4lJILj0="
              className=" img2 d-block w-100"
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
        <div className="info-blog ">
         
        </div>
        <div className="info-blogs ">
        <h1 className="mt-5"> GIFT LOVE, GIFT MANIMANJIRI</h1>
        <h3 className="mt-3">Your perfect jewellery gift awaits </h3>
        <button className="mt-3 but">Shop Now</button>
        </div>
      </div>
      <h1 className="text-white mt-5  text-center"> Trending Styles</h1>
      {/* <div className="cont-content">
        <div className="first-content bg-sucess">

        </div>
        <div className="sec-content bg-primary h-75 w-32">

        </div>
        <div className="third-content bg-seconady h-75 w-32" >

        </div>
      </div> */}
      <div className="cont-content">

     
      <div className="first-content">
        <img src="https://media.istockphoto.com/id/1446056509/photo/necklace.jpg?s=612x612&w=0&k=20&c=7eJ0k3fuClDRl6waDW0UIruoIyAGmBPEntcWknZk_d0=" alt="" />
          <h4 className="text-white text-center mt-2">Floral Necklaces</h4>
      </div>
      <div className="sec-content">
        <img src="https://media.istockphoto.com/id/1331428097/photo/diamond-ring-in-jewelry-gift-box.jpg?s=612x612&w=0&k=20&c=Afk9mXNSLKsZ2V922GpCkbyj1bGKo6s1yOuSEFUz0PQ=" alt="" />
          <h4 className="text-white text-center mt-2">Best of Manimanjiri</h4>
      </div>
      <div className="third-content">
        <img src="https://media.istockphoto.com/id/654392550/photo/engagement-rings-at-the-hands-of-the-newlyweds.jpg?s=612x612&w=0&k=20&c=GumBIPyk-QuZ-FvWY4xYGS6MOnQvWyWpHhLerQL9qFg=" alt="" />
          <h4 className="text-white text-center mt-2">Stackable Accessories</h4>
      </div>
      </div>
    </>
  );
};

export default HomeContent;
