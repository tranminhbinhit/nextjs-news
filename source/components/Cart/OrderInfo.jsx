/* eslint-disable */
import Link from 'next/link';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EnumRoutingPage } from '../../constants/enum';
import { orderChangeQualityCart, orderRemoveItemCart } from '../../redux/action/cartAction';
import { formatCurrency, getImageCdn, getLinkUrl, parseToInt } from '../../utils/utils';
import LazyImage from '../BoxSite/LazyImage';

const OrderInfo = (props) => {
  const { cart, orderRemoveItemCartConnect, orderChangeQualityCartConnect } = props;
  const { TotalAmount, TotalItem, ListItem } = cart;
  const orderRemoveItem = (item) => {
    orderRemoveItemCartConnect(item);
  };

  const changeQualityCart = (item, value) => {
    item.Quantity = parseToInt(value);
    orderChangeQualityCartConnect(item);
  };

  return (
    <div className="cart-wrapper sm-touch-scroll">
      <table
        className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
        cellSpacing="0"
      >
        <thead>
          <tr>
            <th className="product-name" colSpan="3">Sản phẩm</th>
            <th className="product-price">Giá</th>
            <th className="product-quantity">Số lượng</th>
            <th className="product-subtotal">Tạm tính</th>
          </tr>
        </thead>
        <tbody>
          {ListItem.map((m) => {
            const productUrl = getLinkUrl(
              EnumRoutingPage.PRODUCT.id,
              m.ProductUrl,
              m.ProductId
            );
            return (
              <tr className="woocommerce-cart-form__cart-item cart_item" key={`item-cart2-${m.ProductId}`}>
                <td className="product-remove">
                  <a
                    onClick={() => orderRemoveItem(m)}
                    className="remove cursor"
                    title="Xóa sản phẩm này"
                  >×
                  </a>
                </td>

                <td className="product-thumbnail">
                  <Link
                    href={productUrl}
                  >
                    <a>
                      <LazyImage
                        link={getImageCdn(m.ProductImage)}
                        offset={50}
                        alt={m.ProductName}
                        title={m.ProductName}
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      />
                    </a>
                  </Link>
                </td>

                <td className="product-name" data-title="Sản phẩm">
                  <Link
                    href={productUrl}
                  >
                    <a>{m.ProductName}</a>
                  </Link>

                  <div className="show-for-small mobile-product-price">
                    <span className="mobile-product-price__qty">{m.Quantity} × </span>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        {formatCurrency(m.ProductPrice)}
                      </bdi>
                    </span>
                  </div>
                </td>

                <td className="product-price" data-title="Giá">
                  <span className="woocommerce-Price-amount amount">
                    <bdi>{formatCurrency(m.ProductPrice)}</bdi>
                  </span>
                </td>

                <td className="product-quantity" data-title="Số lượng">
                  <div className="quantity buttons_added">
                    <input type="button" value="-" className="minus button is-form" onClick={() => changeQualityCart(m, m.Quantity - 1)} />
                    <input
                      type="number"
                      className="input-text qty text"
                      step="1"
                      min="0"
                      max=""
                      value={m.Quantity}
                      title="SL"
                      size="4"
                      placeholder=""
                      inputMode="numeric"
                      onChange={(event) => {
                        changeQualityCart(m, event.target.value);
                      }}
                    />
                    <input type="button" value="+" className="plus button is-form" onClick={() => changeQualityCart(m, m.Quantity + 1)} />
                  </div>
                </td>

                <td className="product-subtotal" data-title="Tạm tính">
                  <span className="woocommerce-Price-amount amount"><bdi>{formatCurrency(m.TotalPrice)}</bdi>
                  </span>
                </td>
              </tr>);
          })}
          <tr>
            <td colSpan="5">
              <strong>
                Tổng tiền
              </strong>
            </td>
            <td>
              <span className="woocommerce-Price-amount amount">
                <bdi>{formatCurrency(TotalAmount)}</bdi>
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan="6" className="actions clear">
              <div className="continue-shopping pull-left text-left">
                <Link href={'/'}>
                  <a className="button-continue-shopping button primary is-outline"
                  >
                    ←&nbsp;Tiếp tục xem sản phẩm
                  </a>
                </Link>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});
const mapDispatchToProps = (dispatch) => {
  return {
    orderRemoveItemCartConnect: (item) => {
      dispatch(orderRemoveItemCart(item));
    },
    orderChangeQualityCartConnect: (item) => {
      dispatch(orderChangeQualityCart(item));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo);