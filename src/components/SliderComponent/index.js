import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'
import "./index.css";

const SliderComponent = () => {
    const settings = {
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px"
                }
            }
        ]
    };

    return (
        <div>
            <h2 className="carousel-title">Center Mode</h2>
            <Slider {...settings} className="carousel">
                <Link to='/housewarming-gifts'>
                <div className="slide">
                    <img className="top-section-img-2" src='https://m.media-amazon.com/images/I/71xjyRPnalL._SY695_.jpg' alt='Potli Bags'/>
                    <p className='top-para-2'>Potli Bags</p>
                </div>
                </Link>
                <Link to='/housewarming-gifts'>
                <div className="slide">
                <img className="top-section-img-2" src='https://m.media-amazon.com/images/I/71RABflgNCL._SL1418_.jpg' alt='Devine Gifts'/>
                    <p className='top-para-2'>Devine Gifts</p>
                </div>
                </Link>
                <Link to='/housewarming-gifts'>
                <div className="slide">
                <img className="top-section-img-2" src='https://m.media-amazon.com/images/I/91WxI+fcA3L._SY695_.jpg' alt='Hand Bags'/>
                <p className='top-para-2'>Hand Bags</p>
                </div>
                </Link>
                <Link to='/housewarming-gifts'>
                <div className="slide">
                <img className="top-section-img-2" src='https://m.media-amazon.com/images/I/813QQudKypL._SL1500_.jpg' alt='Kamadenu'/>
                <p className='top-para-2'>Kamadenu</p>
                </div>
                </Link>
                <Link to='/housewarming-gifts'>
                <div className="slide">
                <img className="top-section-img-2" src='https://m.media-amazon.com/images/I/818z8mZLS2L._SL1500_.jpg' alt='Containers'/>
                <p className='top-para-2'>Containers</p>
                </div>
                </Link>
                <Link to='/housewarming-gifts'>
                <div className="slide">
                <img className="top-section-img-2" src='https://m.media-amazon.com/images/I/61DYKiEmMWL._SL1500_.jpg' alt='Marble Gifts'/>
                <p className='top-para-2'>Marble Gifts</p>
                </div>
                </Link>
            </Slider>
        </div>
    );
};

export default SliderComponent;
