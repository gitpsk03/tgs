import { Link } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import { BsCurrencyRupee } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import Context from '../../context/context';
import './index.css';

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
        name: 'Product15',
        img:'https://img.etimg.com/photo/msid-99147920,imgsize-114206/DISHINHomeDecorationEuropeanPeacockWallClock.jpg',
        price: 1000
    },
    {
        name: 'Peacock Wall Clock',
        img:'https://cdn.shopify.com/s/files/1/0551/8009/9722/files/Lifestyle_shot_of_Air_Fryer_-1_87a84782-d3cb-46be-a73b-bcf09d50ccd1_480x480.png?v=1716735985',
        price: 1000
    },
    {
        name: 'Air Fryer',
        img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689019296-bissel-handheld-cordless-vacuum-64ac637b56b07.jpg?crop=0.9919893190921228xw:1xh;center,top&resize=980:*',
        price: 1000
    },
    {
        name: 'Steel Hot Cold Bottle',
        img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1717791066-91-dVv4252L.jpg?crop=1xw:1xh;center,top&resize=980:*',
        price: 1000
    },
    {
        name: 'Home symbol',
        img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1635376211-le-creuset-mugs-o.jpg?crop=1xw:1.00xh;center,top&resize=980:*',
        price: 1000
    },
    {
        name: 'Coffee Mugs',
        img: 'https://m.media-amazon.com/images/I/41v8NO8BGlL._SX300_SY300_QL70_FMwebp_.jpg',
        price: 1000
    },
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
    {
        name: 'Container Set of 2 Diyas',
        img: 'https://m.media-amazon.com/images/I/61QIr-gypwL._AC_UL480_FMwebp_QL65_.jpg',
        price: 1000
    },
    {
        name: 'Brass Diya',
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
const SearchListPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("query") || "";
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { setAddCartBtnClicked } = useContext(Context);
    const {isLoginSuccessful} = useContext(Context)
    useEffect(() => {
        const searchedProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(searchedProducts);
    }, [searchQuery]);

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

    return (
        <div className="search-prod-container">
            <div className="search-results">
                <h4 className="search-para-1">Results</h4>
                <div className="search-headphones-2">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <div key={index} className="search-headphone-box-3">
                                <Link to='/product-page' state={{product}}>
                                    <img className="search-headphone-img-2" src={product.img} alt={product.name} />
                                    <p className='search-prod-para'>{product.name}</p>
                                    <p className='search-prod-para'><BsCurrencyRupee/>{product.price}</p>
                                    <p className='search-prod-para-sm'>Free delivery by 9th Apr</p>
                                </Link>
                                <button className='prod-add-cart-btn bg-warning' onClick={() => onAddToCart(product)}>Add to Cart</button>
                            </div>
                        ))
                    ) : (<p>No results found</p>)
                }
                </div>
            </div>
        </div>
    );
};

export default SearchListPage;