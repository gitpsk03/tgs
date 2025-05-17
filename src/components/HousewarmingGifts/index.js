import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BsCurrencyRupee } from "react-icons/bs";
import Context from '../../context/context';
import './index.css'

const HousewarmingGifts = () => {
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
            name: 'Wall Clock',
            img: 'https://m.media-amazon.com/images/I/41v8NO8BGlL._SX300_SY300_QL70_FMwebp_.jpg',
            price: 1000
        },
        {
            name: 'Buddha Idol',
            img: 'https://m.media-amazon.com/images/I/71HPIOgIShL._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
        {
            name: 'Coffee Maker',
            img: 'https://m.media-amazon.com/images/I/51q9WR-LfHL._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
        {
            name: 'Tea Cups Set',
            img: 'https://m.media-amazon.com/images/I/510K9F9eqML._SX300_SY300_QL70_FMwebp_.jpg',
            price: 1000
        },
        {
            name: 'Peacock Wall Clock',
            img:'https://img.etimg.com/photo/msid-99147920,imgsize-114206/DISHINHomeDecorationEuropeanPeacockWallClock.jpg',
            price: 1000
        },
        {
            name: 'Air Fryer',
            img:'https://cdn.shopify.com/s/files/1/0551/8009/9722/files/Lifestyle_shot_of_Air_Fryer_-1_87a84782-d3cb-46be-a73b-bcf09d50ccd1_480x480.png?v=1716735985',
            price: 1000
        },
        {
            name: 'Steel Hot Cold Bottle',
            img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689019296-bissel-handheld-cordless-vacuum-64ac637b56b07.jpg?crop=0.9919893190921228xw:1xh;center,top&resize=980:*',
            price: 1000
        },
        {
            name: 'Home symbol',
            img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1717791066-91-dVv4252L.jpg?crop=1xw:1xh;center,top&resize=980:*',
            price: 1000
        },
        {
            name: 'Coffee Mugs',
            img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1635376211-le-creuset-mugs-o.jpg?crop=1xw:1.00xh;center,top&resize=980:*',
            price: 1000
        },
        {
            name: 'Wall Clock',
            img: 'https://m.media-amazon.com/images/I/41v8NO8BGlL._SX300_SY300_QL70_FMwebp_.jpg',
            price: 1000
        },
    ];
    
    return (
        <div className="house-prod-container">
            <div className="house-results">
                <h4 className="house-para-1">Housewarming Gifts</h4>
                <div className="house-headphones-2">
                    {products.map((product, index) => (
                        <div key={index} className="house-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="house-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='house-prod-para'>{product.name}</p>
                                <p className='house-prod-para'><BsCurrencyRupee/>{product.price}</p>
                                <p className='house-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default HousewarmingGifts