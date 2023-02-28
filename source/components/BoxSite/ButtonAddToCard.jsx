/* eslint-disable*/
import React, { Component, useState } from "react";
import { NotificationManager } from "react-notifications";
import { connect } from "react-redux";
import { orderAddToCart } from "../../redux/action/cartAction";
import { getSettingValue, parseToInt } from "../../utils/utils";

const ButtonAddToCard = (props) => {
  const {
    config,
    isHaveQuatity,
    className = "single_add_to_cart_button",
    title = "Thêm vào giỏ hàng",
    orderAddToCartConnect,
    product,
  } = props;

  const { WEB_ORDER_CART } = config || {};
  const isOrderCart = getSettingValue(WEB_ORDER_CART);

  const addToCart = () => {
    const itemCart = {
      ...product,
      Quantity: parseToInt(quantity),
    }
    orderAddToCartConnect(itemCart);
    NotificationManager.success("Thêm vào giỏ hàng thành công","",700);
  };

  const [quantity, setQuantity] = useState(1);

  const changeValueQuality = (value) => {
    let result = parseToInt(quantity + value);
    setQuantity(result <= 0 ? 1 : result);
  }

  return isOrderCart ? (
    <React.Fragment>
      {isHaveQuatity ? (
          <div className="quantity buttons_added">
            <input type="button" value="-" className="minus button is-form" onClick={() => changeValueQuality(-1)} />
            <input
              type="number"
              className="input-text qty text"
              step="1"
              min="1"
              max=""
              name="quantity"
              value={quantity}
              title="SL"
              size="4"
              placeholder=""
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
            />
            <input type="button" value="+" className="plus button is-form" onClick={() => changeValueQuality(1)} />
          </div>
        ) : (
          ''
        )}
      <button
        type="button"
        name="add-to-cart"
        className={`button ${className}`}
        onClick={() => addToCart()}
      >
        {title}
      </button>
    </React.Fragment>
  ) : (
    ""
  );
};

const mapStateToProps = (state) => ({
  config: state.setting.config,
});
const mapDispatchToProps = (dispatch) => {
  return {
    orderAddToCartConnect: (item) => {
      dispatch(orderAddToCart(item));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddToCard);
