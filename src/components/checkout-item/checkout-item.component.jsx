import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCartAction, addItemAction, removeItemAction, } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItemAction, removeItemAction }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={ imageUrl } alt="item"/>
            </div>
            <span className="name">{ name }</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItemAction(cartItem)}>
                    &#10094;
                </div>
                <span className="value">{ quantity }</span>
                <div className="arrow" onClick={() => addItemAction(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{ price }</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCartAction(item)),
    addItemAction: item => dispatch(addItemAction(item)),
    removeItemAction: item => dispatch(removeItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
