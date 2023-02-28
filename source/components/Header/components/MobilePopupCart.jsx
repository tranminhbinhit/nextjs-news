/* eslint-disable */
import React, { Component } from "react";
import LayoutPopupMobile from "../../../layouts/LayoutPopupMobile";

class MobilePopupCart extends Component {
  render() {
    return (
      <LayoutPopupMobile controlKey="isPopupMobileCart" position="left">
        <div className="widget_shopping_cart">
          <div className="cart-popup-inner inner-padding">
            <div className="cart-popup-title text-center">
              <h4 className="uppercase">Giỏ hàng</h4>
              <div className="is-divider" />
            </div>
            <div className="widget_shopping_cart_content">
              <ul className="woocommerce-mini-cart cart_list product_list_widget">
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a className="remove remove_from_cart_button">×</a>
                  <a href="https://nutscorner.net/hop-qua-loc-xuan1/">
                    <img
                      width="450"
                      height="450"
                      src="https://nutscorner.net/wp-content/uploads/2021/10/Lộc-Xuân-1-450x450.jpg"
                      className="lazy-load attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                      loading="lazy"
                      srcSet=""
                    />
                    Hộp Quà Lộc Xuân 1
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        1.768.000
                        <span className="woocommerce-Price-currencySymbol">
                          ₫
                        </span>
                      </bdi>
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a className="remove remove_from_cart_button">×</a>
                  <a href="https://nutscorner.net/hop-qua-an-khang-1/">
                    <img
                      width="450"
                      height="450"
                      src="https://nutscorner.net/wp-content/uploads/2021/10/Lộc-Xuân-1-450x450.jpg"
                      className="lazy-load attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                      loading="lazy"
                      srcSet=""
                    />
                    Hộp Quà Lộc Xuân 1
                  </a>
                  <span className="quantity">
                    2 ×
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        875.000
                        <span className="woocommerce-Price-currencySymbol">
                          ₫
                        </span>
                      </bdi>
                    </span>
                  </span>
                </li>
              </ul>

              <p className="woocommerce-mini-cart__total total">
                <strong>Tổng số phụ:</strong>
                <span className="woocommerce-Price-amount amount">
                  <bdi>
                    3.518.000
                    <span className="woocommerce-Price-currencySymbol">₫</span>
                  </bdi>
                </span>
              </p>

              <p className="woocommerce-mini-cart__buttons buttons">
                <a
                  href="https://nutscorner.net/gio-hang/"
                  className="button wc-forward"
                >
                  Xem giỏ hàng
                </a>
                <a
                  href="https://nutscorner.net/thanh-toan/"
                  className="button checkout wc-forward"
                >
                  Thanh toán
                </a>
              </p>
            </div>
            <div className="cart-sidebar-content relative" />
          </div>
        </div>
      </LayoutPopupMobile>
    );
  }
}

export default MobilePopupCart;
