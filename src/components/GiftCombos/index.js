import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../context/context';
import './index.css'

const GiftCombos = () => {
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
            name: 'Combo1',
            img: 'https://m.media-amazon.com/images/I/91je5667K7L._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
        {
            name: 'Combo2',
            img: 'https://m.media-amazon.com/images/I/81FcweBdEWL._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
        {
            name: 'Combo3',
            img: 'https://m.media-amazon.com/images/I/71jnRbupR9L._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
        {
            name: 'Combo4',
            img: 'https://m.media-amazon.com/images/I/51RhS164mOL._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
        {
            name: 'Combo5',
            img:'https://m.media-amazon.com/images/I/81pNw6a4ifL._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
        {
            name: 'Combo6',
            img:'https://m.media-amazon.com/images/I/91je5667K7L._SX679_.jpg',
            price: 1000
        },
        {
            name: 'Combo7',
            img:'https://www.giftify.in/cdn/shop/files/image14_020b6bd4-c2d1-446c-ba72-a4f3188d7ac4.jpg?v=1685268013&width=600',
            price: 1000
        },
        {
            name: 'Combo8',
            img:'https://m.media-amazon.com/images/I/81tgWwgyiAL._SX679_.jpg',
            price: 1000
        },
        {
            name: 'Combo9',
            img:'https://m.media-amazon.com/images/I/81abW3Rw36L._SX679_.jpg',
            price: 1000
        },
        {
            name: 'Combo10',
            img: 'https://m.media-amazon.com/images/I/91je5667K7L._AC_UL480_FMwebp_QL65_.jpg',
            price: 1000
        },
    ];
    
    
    return (
        <div className="combo-prod-container">
            <div className="combo-results">
                <h4 className="combo-para-1">Gift Combos</h4>
                <div className="combo-headphones-2">
                    {products.map((product, index) => (
                        <div key={index} className="combo-headphone-box-3">
                            <Link to='/product-page' state={{product}}>
                                <img className="combo-headphone-img-2" src={product.img} alt={product.name} />
                                <p className='combo-prod-para'>{product.name}</p>
                                <p className='combo-prod-para'>{product.price}</p>
                                <p className='combo-prod-para-sm'>Free delivery by 9th Apr</p>
                            </Link>
                            <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GiftCombos