import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BsCurrencyRupee } from "react-icons/bs";
import Context from '../../context/context';
import './index.css';

const WeddingGifts = () => {
    const { setAddCartBtnClicked } = useContext(Context);
    const {isLoginSuccessful} = useContext(Context)

    const onAddToCart = (product) => {
        if(!isLoginSuccessful) {
            alert('Please login to add items to cart');
            return;
        }
        const uniqueId = `${product.id}-${Date.now()}`
        const productWithUniqueId = {...product, id: uniqueId}
        setAddCartBtnClicked(productWithUniqueId);
        alert('Item added to the cart')
    };

    const products = [
        {
            name: 'Wooden Photo',
            img: 'https://www.incrediblegifts.in/wp-content/uploads/2020/12/8x6Anniversary1-768x768.jpg',
            price: 1000
        },
        {
            name: 'Glowing Date',
            img: 'https://vivagifts.in/wp-content/uploads/2021/09/Personalized-LED-Lamp-For-Couple-1.jpeg',
            price: 1000
        },
        {
            name: 'Calender with Names',
            img: 'https://www.zwende.com/cdn/shop/files/ThinkArtly_south_Wedding_Plaques_Nameboard_PDP3.jpg?v=1705908808&width=1080',
            price: 1000
        },
        {
            name: 'Anniversery Photo Frame',
            img:'https://giftkyade.com/cdn/shop/files/happyanniversaryPF_lifestyle1_logo-533077.jpg?v=1723884935',
            price: 1000
        },
        {
            name: 'Krishna Idol',
            img:'https://svastika.in/cdn/shop/files/RadhaKrishnaMurti02.jpg?v=1738330590&width=1100',
            price: 1000
        },
        {
            name: 'Frame With Names',
            img:'https://storage.googleapis.com/loveable.appspot.com/blog/uploads/2023/08/13170129/Personalised-Wedding-Pebble-Picture-768x593.jpg',
            price: 1000
        },
        {
            name: 'Wooden Photo Frame',
            img:'https://images-cdn.ubuy.co.in/667fa1c382058656453f47b7-happy-anniversary-picture-frame-gifts.jpg',
            price: 1000
        },
        {
            name: 'Photo In Heart Symbol',
            img:'https://thepreciousgifts.in/wp-content/uploads/2022/07/thepreciousgifts.in-Heart-Crystal.jpg',
            price: 1000
        },
        {
            name: 'Couples Doll',
            img:'https://cdn.shopify.com/s/files/1/0558/3801/5637/files/71-SMubYIeL._SL1500_480x480.jpg?v=1681732105',
            price: 1000
        },
        {
            name: 'Wooden Photo',
            img: 'https://www.incrediblegifts.in/wp-content/uploads/2020/12/8x6Anniversary1-768x768.jpg',
            price: 1000
        },
    ];

    return (
        <div className="boat-prod-container">
            <div className="boat-results">
                <h4 className="boat-para-1">Wedding Gifts</h4>
                <div className="boat-headphones-2">
                    {products.map((product, index) => (
                        <div key={index} className="boat-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="boat-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='boat-prod-para'>{product.name}</p>
                                <p className='boat-prod-para'><BsCurrencyRupee/>{product.price}</p>
                                <p className='boat-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeddingGifts;
