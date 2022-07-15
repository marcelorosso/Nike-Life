import home2 from "../home_picture2.jpg"
import home3 from "../home_picture3.jpg"
import home4 from "../home_picture4.jpg"

const Slider = () => {
  let greeting = "Welcome to Nike - Life Shop";
  let slogan = "You will see the shoes created by the best designers"
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
              <img src={home4} className="App-logo" alt="logo" />
              <div className="carousel-caption">
              <h2> {greeting} </h2>
              <p> {slogan} </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={home2} className="App-logo" alt="logo" />
            <div className="carousel-caption">
              <h2> {greeting} </h2>
              <p> {slogan} </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={home3} className="App-logo" alt="logo" />
            <div className="carousel-caption">
              <h2> {greeting} </h2>
              <p> {slogan} </p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <img src="https://img.icons8.com/fluency-systems-filled/24/EBEBEB/double-left.png" alt="leftArrow"/>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <img src="https://img.icons8.com/fluency-systems-filled/24/EBEBEB/double-right.png" alt="rightArrow"/>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </> 
  )
}

export default Slider