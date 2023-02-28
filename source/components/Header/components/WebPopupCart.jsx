/* eslint-disable */
import React, { Component, useState } from "react";
import { orderRemoveItemCart } from "../../../redux/action/cartAction";
import { connect } from "react-redux";
import {
  formatCurrency,
  getImageCdn,
  getLinkUrl,
  isEmptyObject,
} from "../../../utils/utils";
import { EnumRoutingPage } from "../../../constants/enum";
import LazyImage from "../../BoxSite/LazyImage";
import Link from "next/link";

const WebPopupCart = (props) => {
  const { cart, orderRemoveItemCartConnect } = props;
  const { TotalAmount, TotalItem, ListItem } = cart;
  const [classShow, setClass] = useState("");

  const orderRemoveItem = (item) => {
    orderRemoveItemCartConnect(item);
  };
  return (
    <li
      className={`cart-item has-icon dropdown  ${classShow}`}
      onMouseEnter={(e) => {
        setClass("current-dropdown");
      }}
      onMouseLeave={(e) => {
        setClass("");
      }}
    >
      <a className="header-cart-link is-small dropdown-toggle cursor" href="#">
        <i className="icon-shopping-basket" data-icon-label={TotalItem}>
          {" "}
        </i>
      </a>
      <ul
        className="nav-dropdown nav-dropdown-default"
        aria-labelledby={`dropdownCartWeb`}
      >
        {!isEmptyObject(ListItem) ? (
          <li className="html widget_shopping_cart">
            <div className="widget_shopping_cart_content">
              <ul className="woocommerce-mini-cart cart_list product_list_widget">
                {ListItem.map((m) => (
                  <li
                    className="woocommerce-mini-cart-item mini_cart_item"
                    key={`item-cart-${m.ProductId}`}
                  >
                    <a
                      className="remove remove_from_cart_button cursor"
                      onClick={() => orderRemoveItem(m)}
                    >
                      ×
                    </a>
                    <Link
                      href={getLinkUrl(
                        EnumRoutingPage.PRODUCT.id,
                        m.ProductUrl,
                        m.ProductId
                      )}
                    >
                      <a>
                        <LazyImage
                          link={getImageCdn(m.ProductImage)}
                          offset={50}
                          alt={m.ProductName}
                          title={m.ProductName}
                          className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        />
                        {m.ProductName}
                      </a>
                    </Link>
                    <span className="quantity">
                      {m.Quantity} ×
                      <span className="woocommerce-Price-amount amount">
                        <bdi>{formatCurrency(m.ProductPrice)}</bdi>
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <p className="woocommerce-mini-cart__total total">
                <strong>Tổng số phụ:</strong>
                <span className="woocommerce-Price-amount amount">
                  <bdi>{formatCurrency(TotalAmount)}</bdi>
                </span>
              </p>  

              <p className="woocommerce-mini-cart__buttons buttons">
                <Link href={getLinkUrl(EnumRoutingPage.CART.id)}>
                  <a className="button wc-forward">Thanh toán</a>
                </Link>
              </p>
            </div>
          </li>
        ) : (
          <li className="html widget_shopping_cart">
            Không có sản phẩm nào trong giỏ hàng
          </li>
        )}
      </ul>
    </li>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});
const mapDispatchToProps = (dispatch) => {
  return {
    orderRemoveItemCartConnect: (item) => {
      dispatch(orderRemoveItemCart(item));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WebPopupCart);
