import React  from "react"

const Context = React.createContext({
    isLoginSuccessful: () => {},
    cartList: [],
    addCartBtnClicked: () => {},
    setCartList: () => {},
    total: 0,
})

export default Context