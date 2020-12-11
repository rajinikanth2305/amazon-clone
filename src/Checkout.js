import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg"
        />
        <div>
          {user && <h3>hello,{user.email}</h3>}
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((product, index) => {
            return (
              <CheckoutProduct
                key={index}
                title={product.title}
                price={product.price}
                image={product.image}
                id={product.id}
                rating={product.rating}
              />
            );
          })}

          {/*CheckoutProduct */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
