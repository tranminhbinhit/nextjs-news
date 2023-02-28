/* eslint-disable */
import Link from 'next/link';
import React, { Component, useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import { orderRemoveCart, orderRemoveItemCart } from '../../redux/action/cartAction';
import { startAppLoading, stopAppLoading } from '../../redux/action/mainAction';
import { createOrder } from '../../service/orderService';

const PaymentInfo = (props) => {
  const { cart, startAppLoadingConnect, stopAppLoadingConnect, orderRemoveCartConnect } = props;
  const { TotalAmount, TotalItem, ListItem } = cart;

  const [recieverName, setRecieverName] = useState('');
  const [recieverPhone, setRecieverPhone] = useState('');
  const [recieverEmail, setRecieverEmail] = useState('');
  const [note, setNote] = useState('');
  const [recieverAddress, setRecieverAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reqParams = {
      RecieverName: recieverName,
      RecieverPhone: recieverPhone,
      RecieverEmail: recieverEmail,
      Note: note,
      RecieverAddress: recieverAddress,
      ListOrderDetail: ListItem
    }

    startAppLoadingConnect();
    var res = await createOrder(reqParams);
    if (res.ID > 0) {
      NotificationManager.success("Đặt hàng thành công");
      orderRemoveCartConnect();
      stopAppLoadingConnect();
    } else {
      NotificationManager.error("Đặt hàng thất bại");
      stopAppLoadingConnect();
    }
  };

  return (
    <div className="cart-sidebar col-inner ">
      <form className="woocommerce-cart-form" onSubmit={handleSubmit}>
        <div className="cart_totals ">
          <table cellSpacing="0">
            <thead>
              <tr>
                <th className="product-name" colSpan="2">THÔNG TIN ĐẶT HÀNG</th>
              </tr>
            </thead>
          </table>

          <div className="woocommerce-billing-fields__field-wrapper">
            <div
              className="form-row form-row-wide validate-required"
            >
              <div className="woocommerce-input-wrapper">
                <div className="fl-wrap fl-wrap-input">
                  <label htmlFor="billing_last_name" className="fl-label">Họ
                    tên
                  </label>
                  <input
                    type="text"
                    className="input-text fl-input"
                    name="billing_last_name"
                    placeholder="Họ tên (*)"
                    value={recieverName}
                    onChange={event => {
                      setRecieverName(event.target.value);
                    }}
                    required
                  />
                </div>
              </div>
            </div>
            <div
              className="form-row form-row-last validate-required row"
            >
              <div className="woocommerce-input-wrapper large-5 col">
                <div className="fl-wrap fl-wrap-input">
                  <label htmlFor="billing_address_1" className="fl-label">Số điện thoại
                  </label>
                  <input
                    type="text"
                    className="input-text fl-input"
                    name="billing_address_1"
                    placeholder="VD: 0937 xxx xxx"
                    required
                    value={recieverPhone}
                    onChange={event => {
                      setRecieverPhone(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="woocommerce-input-wrapper large-7 col">
                <div className="fl-wrap fl-wrap-input">
                  <label htmlFor="billing_address_1" className="fl-label">Email
                  </label>
                  <input
                    type="text"
                    className="input-text fl-input"
                    name="billing_address_1"
                    placeholder="vd: nguyenvana@gmail.com"
                    value={recieverEmail}
                    onChange={event => {
                      setRecieverEmail(event.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className="form-row form-row-last validate-required"
            >
              <div className="woocommerce-input-wrapper">
                <div className="fl-wrap fl-wrap-input">
                  <label htmlFor="billing_address_1" className="fl-label">Địa chỉ
                  </label>
                  <input
                    type="text"
                    className="input-text fl-input"
                    name="billing_address_1"
                    placeholder="Địa chỉ (*)"
                    value={recieverAddress}
                    onChange={event => {
                      setRecieverAddress(event.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="form-row form-row-last validate-required"
            >
              <div className="woocommerce-input-wrapper">
                <div className="fl-wrap fl-wrap-input">
                  <label htmlFor="billing_address_1" className="fl-label">Ghi chú
                  </label>
                  <textarea
                    rows={1}
                    type="text"
                    className="input-text fl-input"
                    name="billing_address_1"
                    placeholder="Nội dung"
                    value={note}
                    onChange={event => {
                      setNote(event.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="woocommerce-billing-fields__field-wrapper">
            <button
              type="submit"
              className="button alt"
              value="Đặt hàng"
            >Đặt hàng
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});
const mapDispatchToProps = (dispatch) => {
  return {
    startAppLoadingConnect: () => {
      dispatch(startAppLoading());
    },
    stopAppLoadingConnect: () => {
      dispatch(stopAppLoading());
    },
    orderRemoveCartConnect: () => {
      dispatch(orderRemoveCart());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PaymentInfo);