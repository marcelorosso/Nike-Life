import home2 from "../home_picture2.jpg"
import home3 from "../home_picture3.jpg"
import home4 from "../home_picture4.jpg"

const Slider = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={home4} className="App-logo" alt="Nike Collection" />
            <div className="carousel-caption">
              <h2>Welcome to Nike Life</h2>
              <p>Discover exclusive sneakers crafted by the world's best designers</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={home2} className="App-logo" alt="Nike Collection" />
            <div className="carousel-caption">
              <h2>Step Into Greatness</h2>
              <p>Limited edition kicks that define your style</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={home3} className="App-logo" alt="Nike Collection" />
            <div className="carousel-caption">
              <h2>Just Do It</h2>
              <p>Premium sneakers delivered to your door</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Slider
