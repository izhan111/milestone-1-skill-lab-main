import React from "react";
import "./styles/Homepage.css";
import "./styles/Menupage.css";
import "./styles/Cart.css";
import "./styles/Footer.css";
import "./styles/Auth.css";
import "./styles/Feedback.css";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import ShoppingCart from "./Pages/Cart";
import Auth from "./Pages/Auth";
import Footer from "./Pages/Footer";
import FeedbackForm from "./Pages/FeedBack";

const App = () => {
  return <>
  <HomePage />
  <MenuPage />
  <ShoppingCart />
  <Auth />
  <FeedbackForm />
  <Footer />
  </>
}

export default App;