import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import {Link} from 'react-router-dom'
import SliderComponent from '../SliderComponent';
import './index.css'

const Home = () => {
    return (
    <div>
        <h6 className='home-heading'>Buy Gifts Online</h6>
        <div className='top-section'>
            <Link to='/wedding-gifts'>
            <div className='top-section-card'>
                <div className='top-img-card'>
                    <img className='top-section-img' src='https://m.media-amazon.com/images/I/61MElNd1UKL.jpg' alt='wedding gifts'/>
                </div>
                <p className='top-para'>Wedding Gifts</p>
            </div>
            </Link>
            <Link to='/housewarming-gifts'>
            <div className='top-section-card'>
                <div className='top-img-card'>
                    <img className='top-section-img' src='https://www.fnp.com//images/pr/l/v20230606144001/housewarming-hamper_1.jpg' alt='Housewarming Gifts'/>
                </div>
                <p className='top-para'>Housewarming Gifts</p>
            </div>
            </Link>
            <Link to='/gift-combos'>
            <div className='top-section-card'>
                <div className='top-img-card'>
                    <img className='top-section-img' src='https://www.fnp.com//images/pr/l/v20221004202142/all-black-personalised-gift-set_1.jpg' alt='Gift Combo'/>
                </div>
                <p className='top-para'>Gift Combos</p>
            </div>
            </Link>
            <Link to='/festival-gifts'>
                <div className='top-section-card'>
                    <div className='top-img-card'>
                        <img className='top-section-img' src='https://i.etsystatic.com/22863033/r/il/bbb681/5182872593/il_1588xN.5182872593_9wof.jpg' alt='Navratri and Diwali Gifts'/>
                    </div>
                    <p className='top-para'>Navratri and Diwali</p>
                </div>
            </Link>
        </div>
        <div className='carousel-card'>
            <Carousel className='carousel-container'>
                <Carousel.Item>
                    <Link to='/housewarming-gifts'>
                    <img className='carousel-img' src='https://indianheirloomcompany.com/cdn/shop/collections/Dinner_Sets.jpg?v=1717484605&width=1500' alt='house warming gifts'/>
                    <Carousel.Caption>
                    <h3>House Warming Gifts</h3>
                    </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to='/festival-gifts'>
                    <img className='carousel-img' src='https://www.silaii.com/cdn/shop/products/7_2048x.jpg?v=1722940861' alt='ethnic gifts'/>
                    <Carousel.Caption>
                    <h3>Ethnic Gifts</h3>
                    </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to='/wedding-gifts'>
                    <img className='carousel-img' src='https://images-cdn.ubuy.co.in/671d14cb5c70cb289616c21c-tiblue-wedding-gifts-for-couples-2024.jpg' alt='wedding gifts'/>
                    <Carousel.Caption>
                    <h3>Wedding Gifts</h3>
                    </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            </Carousel>
        </div>
        <SliderComponent/>
        <div className='section-2'>
            <h2>Gifts Below 200</h2>
            <div className='inner-sec-2'>
            <Link to='/wedding-gifts'>
            <div className='card-2'>
                <img className='img-2' src='https://m.media-amazon.com/images/I/71ZsgkrpSiL._SL1375_.jpg' alt='wedding gifts'/>
                <p>Wedding Gifts</p>
            </div>
            </Link>
            <Link to='/wedding-gifts'>
            <div className='card-2'>
                <img className='img-2'  src='https://m.media-amazon.com/images/I/81HoKPnt3+L._SL1500_.jpg' alt='HouseWarming Gifts'/>
                <p>HouseWarming Gifts</p>
            </div>
            </Link>
            <Link to='/wedding-gifts'>
            <div className='card-2'>
                <img className='img-2'  src='https://m.media-amazon.com/images/I/61wAa63lzoL._SL1500_.jpg' alt='Baby Shower Gifts'/>
                <p>Baby Shower Gifts</p>
            </div>
            </Link>
            <Link to='/wedding-gifts'>
            <div className='card-2'>
                <img className='img-2'  src='https://m.media-amazon.com/images/I/61DFLC0JLEL.jpg' alt='Gifts for Birthday Parties'/>
                <p>Gifts for Birthday Parties</p>
            </div>
            </Link>
            </div>
        </div>
        <div className='section-2'>
            <h2>Gifts for Women</h2>
            <div className='inner-sec-2'>
            <Link to='/wedding-gifts'>
            <div className='card-2'>
                <img className='img-2' src='https://m.media-amazon.com/images/I/912Qk5c8BCL._AC_UL480_FMwebp_QL65_.jpg' alt='Potli Bags and Clutches'/>
                <p>Bags</p>
            </div>
            </Link>
            <Link to='/wedding-gifts'>
            <div className='card-2'>
                <img className='img-2' src='https://m.media-amazon.com/images/I/41-nVPgWMOL.jpg' alt='Bangles'/>
                <p>Bangles</p>
            </div>
            </Link>
            <Link to='/wedding-gifts'>
            <div className='card-2'>
                <img className='img-2' src='https://m.media-amazon.com/images/I/419i1uHr8CL._SY695_.jpg' alt='Handbags'/>
                <p>Handbags</p>
            </div>
            </Link>
            <Link to='/wedding-gifts'>
            <div className='card-2'>
                <img className='img-2' src='https://m.media-amazon.com/images/I/91HYg7+j3-L._SY625_.jpg' alt='Fashion Jewellery'/>
                <p>Fashion Jewellery</p>
            </div>
            </Link>
            </div>
        </div>
        <h2 className='home-para-2'>What our clients say</h2>
        <div className='review-section'>
            <div>
            <div className='home-card-3'>
                <p>Great place to buy gifts</p>
            </div>
            <p className='home-para-3'>Sudhakar Rao</p>
            </div>
            <div>
            <div className='home-card-3'>
                <p>Amazing Experience.. and what i really appreciate is the service.</p>
            </div>
            <p className='home-para-3'>Sree Ramya </p>
            </div>
            <div>
            <div className='home-card-3'>
                <p>This is my first experience with the online gift shop, and its really nice.. Customer service is really good.</p>
            </div>
            <p className='home-para-3'>Ravi Kumar</p>
            </div>
            <div>
            <div className='home-card-3'>
                <p>Great place to buy gifts for any occation.</p>
            </div>
            <p className='home-para-3'>K. Rahul</p>
            </div>
        </div>
    </div>
)
}
export default Home