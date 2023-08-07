import React from 'react'

export default function CartProduct({ element, wishlistToggle, cartdispatch }) {
    const setIncrease = () => {
        cartdispatch({ type: "INCREASE_QUANTITY", payload: element.id })
        // cartdispatch({type:"TOTAL_AMOUNTE"})
    }

    const setDecrease = () => {
        cartdispatch({ type: "DECREASE_QUANTITY", payload: element.id })
    }
    return (
        <>
            <div className="wishlist">
                <div className="img-and-btn">
                    <div className="img-cart">
                        <img src={element.image} alt="mobile Images" />
                    </div>
                    <div className="quantity-bin">
                        <div className="increase-btn btn" onClick={setIncrease}>
                            +
                        </div>
                        <div className="quantity btn">{element?.quantity}</div>
                        <div className="increase-btn btn" onClick={setDecrease}>
                            -
                        </div>
                    </div>
                </div>
                <div className="wishlist-text">
                    <h1>{element.title}</h1>
                    <p>{element.memory}</p>
                    <p>seller : superconnect</p>
                    <div className="phone-price phone-price2">
                        <p>₹{element.price.replace(".", ",")}</p>
                        <li>
                            ₹
                            {(
                                parseFloat(element.price) +
                                parseFloat(element.price / 10)
                            ).toFixed(3)}
                        </li>
                        <span>10%off</span>
                    </div>
                    <h4>3 offers applied</h4>
                    <div className="cart-button">
                        {wishlistToggle ? (
                            <h1
                                className="save"
                                onClick={() => {
                                    cartdispatch({
                                        type: "ADD_TO_CART",
                                        payload: element.id,
                                    });
                                }}
                            >
                                MOVE TO CART
                            </h1>
                        ) : (
                            <h1
                                className="save"
                                onClick={() => {
                                    cartdispatch({
                                        type: "ADD_TO_WISHLIST",
                                        payload: element.id,
                                    });
                                }}
                            >
                                SAVE FOR LATER
                            </h1>
                        )}
                        {wishlistToggle ? (
                            <h1
                                className="remove"
                                value={element.id}
                                onClick={() => {
                                    cartdispatch({
                                        type: "REMOVE_FROM_WISHLIST",
                                        payload: element.id,
                                    });
                                }}
                            >
                                REMOVE
                            </h1>
                        ) : (
                            <h1
                                className="remove"
                                value={element.id}
                                onClick={(e) => {
                                    cartdispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: element.id,
                                    });
                                }}
                            >
                                REMOVE
                            </h1>
                        )}
                    </div>
                </div>
                <div className="wishlist-plc">
                    <p>
                        Delivery in 2 days | Free<s>₹40</s>
                    </p>
                    <h3>7 Days Replacement Policy</h3>
                </div>
            </div>
        </>
    )
}
