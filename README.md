# 🎁 TheGiftShop – A Gift Shopping Platform

**TheGiftShop** is a responsive and user-friendly online gift store built with **React.js**, offering a seamless shopping experience across categories such as Wedding Gifts, Festival Gifts, Housewarming Gifts, and Combo Packs. The platform features a cart, payment page, user/admin login, and order tracking – making it a complete gift-shopping solution.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, React Router
* **State Management:** React Context, useState, useEffect
* **Styling:** CSS
* **Routing:** React Router DOM

---

## 📦 Features

### 🛍️ Core Functionalities

* **User Login**: Login flow with session persistence (stored in localStorage).
* **Admin Login**: Separate admin access simulation.
* **Category Pages**: Dedicated sections for Wedding, Festival, Housewarming Gifts, and Combos.
* **Search Products**: Search by name with dynamic filter rendering.
* **Cart Management**: Add to cart with dynamic total price calculation.
* **Checkout Flow**: Cart → Form → Payment → Order Summary.
* **Responsive Layout**: Mobile-friendly user interface.

---

## 🔄 Component Breakdown

| Component           | Description                           |
| ------------------- | ------------------------------------- |
| `Home`              | Landing page with featured sections   |
| `UserLogin`         | Login interface for users             |
| `AdminLogin`        | Admin authentication simulation       |
| `Cart`              | Displays products added to the cart   |
| `PaymentPage`       | Simulated payment UI                  |
| `ProductPage`       | Detailed view of selected product     |
| `OrderDetails`      | Order confirmation and summary        |
| `FormDetails`       | User information form before payment  |
| `SearchListPage`    | Search results based on product query |
| `Header` & `Footer` | Common layout components              |
| `ContactPage`       | Contact information or form           |
| `AboutPage`         | Static info about the platform        |
| `WeddingGifts`      | Displays curated wedding gift items   |
| `HousewarmingGifts` | Housewarming product category         |
| `FestivalGifts`     | Festival gifts display page           |
| `GiftCombos`        | Combined gift sets                    |

---

## 🧠 Application State

Handled via **React Context**:

* `cartList`: List of items in the cart.
* `total`: Dynamically calculated total based on cart items.
* `isLoginSuccessful`: Stores login state (initially fetched from localStorage).
* `searchQuery`: Captures input from header search bar.

```jsx
<Context.Provider value={{
  isLoginSuccessful,
  setIsLoginSuccessful,
  cartList,
  setCartList,
  setAddCartBtnClicked,
  total,
  setTotal,
}}>
```

---

## 🧭 Routing Overview

| Path                  | Component           | Description                     |
| --------------------- | ------------------- | ------------------------------- |
| `/`                   | `Home`              | Homepage                        |
| `/user-login`         | `UserLogin`         | User login screen               |
| `/admin-login`        | `AdminLogin`        | Admin login screen              |
| `/contact`            | `ContactPage`       | Contact details                 |
| `/about`              | `AboutPage`         | About the platform              |
| `/search-list-page`   | `SearchListPage`    | Product search results          |
| `/wedding-gifts`      | `WeddingGifts`      | Wedding gifts                   |
| `/housewarming-gifts` | `HousewarmingGifts` | Housewarming gift collection    |
| `/festival-gifts`     | `FestivalGifts`     | Festival gift items             |
| `/gift-combos`        | `GiftCombos`        | Combo pack gifts                |
| `/cart`               | `Cart`              | Cart items view                 |
| `/product-page`       | `ProductPage`       | Product detail page             |
| `/payment-page`       | `PaymentPage`       | Checkout/payment screen         |
| `/order-details`      | `OrderDetails`      | Final order summary             |
| `/form-details`       | `FormDetails`       | Pre-payment address and details |

---

## 💡 Highlights

* **Auto Price Update**: Total price automatically recalculates using `useEffect` whenever `cartList` changes.
* **Search Propagation**: Search query passed from `Header` to `SearchListPage` using props.
* **Login State**: Login is simulated using `localStorage` and managed with `isLoginSuccessful`.

---

## 📝 How to Run Locally

```bash
git clone https://github.com/yourusername/thegiftshop.git
cd thegiftshop
npm install
npm start
```

---

## 🔮 Future Scope

* Add real backend with Node.js & MongoDB/Firebase
* Implement JWT-based auth for users and admins
* Add real-time chat or support widget
* Add discount coupons, filter by price and brand
* SEO optimization for product pages

---

## 📸 Screenshots (Optional)

You can add image snippets of your app here:

```markdown
![Home Page](./screenshots/home.png)
![Cart Page](./screenshots/cart.png)
``
