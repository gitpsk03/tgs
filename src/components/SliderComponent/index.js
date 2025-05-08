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
                    <img className="top-section-img-2" src='https://theoneshop.wpenginepowered.com/wp-content/uploads/2020/09/Potli-Icon.jpg' alt='wedding gifts'/>
                    <p className='top-para-2'>Potli Bags</p>
                </div>
                </Link>
                <Link to='/housewarming-gifts'>
                <div className="slide">
                <img className="top-section-img-2" src='https://theoneshop.wpenginepowered.com/wp-content/uploads/2020/09/Divine-Icon.jpg' alt='wedding gifts'/>
                    <p className='top-para-2'>Devine Gifts</p>
                </div>
                </Link>
                <Link to='/housewarming-gifts'>
                <div className="slide">
                <img className="top-section-img-2" src='https://theoneshop.wpenginepowered.com/wp-content/uploads/2017/01/101920-min-768x768.jpg' alt='wedding gifts'/>
                <p className='top-para-2'>Hand Bags</p>
                </div>
                </Link>
                <Link to='/housewarming-gifts'>
                <div className="slide">
                <img className="top-section-img-2" src='https://theoneshop.wpenginepowered.com/wp-content/uploads/2015/03/117007B.jpg' alt='wedding gifts'/>
                <p className='top-para-2'>Kamadenu</p>
                </div>
                </Link>
                <Link to='/housewarming-gifts'>
                <div className="slide">
                <img className="top-section-img-2" src='https://theoneshop.wpenginepowered.com/wp-content/uploads/2015/03/102073.jpg' alt='wedding gifts'/>
                <p className='top-para-2'>Containers</p>
                </div>
                </Link>
                <Link to='/housewarming-gifts'>
                <div className="slide">
                <img className="top-section-img-2" src='https://theoneshop.wpenginepowered.com/wp-content/uploads/2017/09/147062A-648x648.jpg' alt='wedding gifts'/>
                <p className='top-para-2'>Marble Gifts</p>
                </div>
                </Link>
            </Slider>
        </div>
    );
};

export default SliderComponent;
