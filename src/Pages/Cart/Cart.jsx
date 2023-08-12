import React, {useContext} from 'react'
import { PRODUCTS } from '../../product'
import { ShopContext } from '../../Context/Shopcontext';
import CartItem from './CartItem';
import "./Cart.css";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  
const {cartItems, getTotalCartAmount} = useContext(ShopContext);
const totalAmount = getTotalCartAmount();

const navigate = useNavigate();
  return (
    <>
      <div className="cart">
        <div>
          <h2 className='fw-bold mt-4'>Your Cart Items</h2>
        </div>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
             if (cartItems[product.id] !== 0) {
              return <CartItem data={product}/>;
             }
          })}
        </div>

        {totalAmount > 0 ? (
        <div className="checkout">
        <p className="fw-bold">Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={() => navigate("/checkout")}>Checkout</button>
        </div>
        ) : (
          <h2>Your Cart is Empty!!!</h2>
          )}
      </div>
    </>
  )
}

export default Cart