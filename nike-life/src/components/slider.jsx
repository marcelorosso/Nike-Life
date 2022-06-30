import logo from "../nike_shoe.jpg"

const Slider = () => {
  let greeting = "Hello React Word - Nike page is near happens";
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logo} className="App-logo" alt="logo" />
            <h2> {greeting} </h2>
            <h1> Nike - Life </h1>
          </div>
          <div className="carousel-item">
            <img src={logo} className="App-logo" alt="logo" />
            <h2> {greeting} </h2>
            <h1> Nike - Life </h1>
          </div>
          <div className="carousel-item">
            <img src={logo} className="App-logo" alt="logo" />
            <h2> {greeting} </h2>
            <h1> Nike - Life </h1>
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