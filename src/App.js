import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from "react";
import Home from './components/Home'
import UserLogin from './components/UserLogin'
import AdminLogin from './components/AdminLogin'
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'
import SearchListPage from './components/SearchListPage';
import WeddingGifts from './components/WeddingGifts';
import HousewarmingGifts from './components/HousewarmingGifts';
import FestivalGifts from './components/FestivalGifts';
import GiftCombos from './components/GiftCombos';
import Context from './context/context';
import Cart from './components/Cart';
import './App.css';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import PaymentPage from './components/PaymentPage';
import OrderDetails from './components/OrderDetails';
import Footer from './components/Footer';
import FormDetails from './components/FormDetails'

const App = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [cartList, setCartList] = useState([])
    const [total, setTotal] = useState(0)
    const setAddCartBtnClicked = (product) => {
        setCartList((prevCartList) => [...prevCartList, product])
    }
    const [isLoginSuccessful, setIsLoginSuccessful] = useState(
        localStorage.getItem('isAuthenticated') === 'false'
    )
    const onSetSearchQuery = (query) => {
        setSearchQuery({ searchQuery: query });
      };
      const onSetIsLoginSuccessful = (value) => {
        setIsLoginSuccessful(value)
      }
      useEffect(() => {
        const calculatedTotal = cartList.reduce((acc, each) => acc + Number(each.price), 0)
        setTotal(calculatedTotal)
    }, [cartList, setTotal])
    return (
        <Context.Provider value={{
            isLoginSuccessful, setIsLoginSuccessful,
            cartList, setCartList,
            setAddCartBtnClicked,
            total, setTotal,
            }}>
            <BrowserRouter>
                <Header onSetSearchQuery={onSetSearchQuery}/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/user-login' element={<UserLogin onSetIsLoginSuccessful={onSetIsLoginSuccessful}/>}/>
                    <Route path='/admin-login' element={<AdminLogin onSetIsLoginSuccessful={onSetIsLoginSuccessful}/>}/>
                    <Route path='/contact' element={<ContactPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/search-list-page' element={<SearchListPage searchQuery={searchQuery} />} />
                    <Route path='/wedding-gifts' element={<WeddingGifts/>}/>
                    <Route path='/housewarming-gifts' element={<HousewarmingGifts/>}/>
                    <Route path='/festival-gifts' element={<FestivalGifts/>}/>
                    <Route path='/gift-combos' element={<GiftCombos/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='product-page' element={<ProductPage/>}/>
                    <Route path='/payment-page' element={<PaymentPage/>}/>
                    <Route path='/order-details' element={<OrderDetails/>}/>
                    <Route path='/form-details' element={<FormDetails/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
    </Context.Provider>
)
}

export default App;
