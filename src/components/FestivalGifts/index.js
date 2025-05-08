import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../context/context';
import './index.css'

const FestivalGifts = () => {
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
            name: 'Container Set of 2 Diyas',
            img: 'https://m.media-amazon.com/images/I/61QIr-gypwL._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
        {
            name: 'Brass Diyas',
            img: 'https://m.media-amazon.com/images/I/51CX4XyHB9L._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
        {
            name: 'Colourful Container Diyas',
            img: 'https://m.media-amazon.com/images/I/81VKKLl4lFL._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
        {
            name: 'Glass Diyas',
            img: 'https://m.media-amazon.com/images/I/71DvbMEiPML._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
        {
            name: 'Gold Brass Diyas',
            img:'https://m.media-amazon.com/images/I/71mBNrGBZVL._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
        {
            name: 'Silver Diyas',
            img:'https://m.media-amazon.com/images/I/81hDQwb+hnL._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
        {
            name: 'Gold Diya Set of 10',
            img:'https://m.media-amazon.com/images/I/91UpT4l-nGL._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
        {
            name: 'Silver Set of 2',
            img:'https://momentz.in/cdn/shop/files/Untitleddesign_5_50a83c02-50e2-43a3-a765-c6be70891638_600x.png?v=1728920756',
            price: 1000
        },
        {
            name: 'Silver Combo',
            img:'https://momentz.in/cdn/shop/files/MZ-24627-502_8c6aa308-d3a1-467c-adfd-ad529c4afb4d_900x.png?v=1741174198',
            price: 1000
        },
        {
            name: 'Container Set of 2 Diyas',
            img: 'https://m.media-amazon.com/images/I/61QIr-gypwL._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
    ];
    
    
    return (
        <div className="festival-prod-container">
            <div className="festival-results">
                <h4 className="festival-para-1">Festival Gifts</h4>
                <div className="festival-headphones-2">
                    {products.map((product, index) => (
                        <div key={index} className="festival-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="festival-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='festival-prod-para'>{product.name}</p>
                                <p className='festival-prod-para'>{product.price}</p>
                                <p className='festival-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default FestivalGifts