import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';


const CartItems = () => {
    const {getTotalAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className='cartItems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Qty</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-qty'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className="carticon-remove-icon" src={remove_icon} alt="remove" onClick={() => removeFromCart(e.id)} />
                        </div>
                        <hr />
                    </div>
                }
                return null;

            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div className='cartitems-total-item'>
                        <p>Subtotal</p>
                        <p>${getTotalAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total{getTotalAmount}</h3>
                        <h3>{getTotalAmount()}</h3>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Have Promocode?</p>
                    <div className='cartitem-promobox'>
                        <input type="text" placeholder='promocode'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CartItems;