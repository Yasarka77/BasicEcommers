import "react-responsive-carousel/lib/styles/carousel.min.css"; //require a loader
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'

const Banner = () => {
  return (
    <Carousel autoPlay showThumbs={false} interval={3000} infiniteLoop showIndicators={false} showStatus={false}>
        <div className="banner-container">
            <img src="/image/banner-01.jpeg" alt="" />
        </div>
        <div className="banner-container">
            <img src="/image/banner-02.jpeg" alt="" />
        </div>
        <div className="banner-container">
            <img src="/image/banner-05.jpeg" alt="" />
        </div>
        </Carousel>
  )
}

export default Banner