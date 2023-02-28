/* eslint-disable */
import React, { Component } from 'react';
import { formatPhone, getSettingValue, isEmptyObject } from '../../utils/utils';
import { connect } from 'react-redux';

const RightInfoProduct = ({config}) => {
  const { CONTRACT_HOTLINE } = config;
  return (
    <div className="col large-3 hide-for-medium">
      <aside
        className="widget block_widget"
      >
        <div className="row">
          <div className="col small-12 large-12">
            <div className="col-inner">
              <div className="icon-box featured-box icon-box-left text-left mb10">
                <div className="icon-box-img">
                  <div className="icon">
                    <div className="icon-inner">
                      <img
                        width="100"
                        height="100"
                        src={'/images/f3.jpg'}
                        className="attachment-medium size-medium"
                        alt="Giao hàng nhanh chóng"
                      />
                    </div>
                  </div>
                </div>
                <div className="icon-box-text last-reset">
                  <p>
                    <strong>Giao hàng nhanh chóng</strong>
                    <br />
                    <span>COD-Nhận hàng thanh toán</span>
                  </p>
                </div>
              </div>

              <div className="icon-box featured-box icon-box-left text-left mb10">
                <div className="icon-box-img">
                  <div className="icon">
                    <div className="icon-inner">
                      <img
                        width="100"
                        height="100"
                        src={'/images/f5.jpg'}
                        className="attachment-medium size-medium"
                        alt="Sản phẩm chính hãng"
                      />
                    </div>
                  </div>
                </div>
                <div className="icon-box-text last-reset">
                  <p>
                    <strong>Sản phẩm chính hãng</strong>
                    <br />
                    <span>Sản phẩm nhập khẩu 100%</span>
                  </p>
                </div>
              </div>

              <div className="icon-box featured-box icon-box-left text-left mb10">
                <div className="icon-box-img">
                  <div className="icon">
                    <div className="icon-inner">
                      <img
                        width="100"
                        height="100"
                        src={'/images/f4.jpg'}
                        className="attachment-medium size-medium"
                        alt="Mua hàng tiết kiệm"
                      />
                    </div>
                  </div>
                </div>
                <div className="icon-box-text last-reset">
                  <p>
                    <strong>Mua hàng tiết kiệm</strong>
                    <br />
                    <span>Rẻ hơn từ 10% - 30%</span>
                  </p>
                </div>
              </div>

              <div className="icon-box featured-box icon-box-left text-left">
                <div className="icon-box-img">
                  <div className="icon">
                    <div className="icon-inner">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 469.333 469.333"
                      >
                        <g>
                          <g>
                            <g>
                              <path
                                d="M234.667,0C105.271,0,0,114.844,0,256v106.667c0,5.896,4.771,10.667,10.667,10.667s10.667-4.771,10.667-10.667V256
            c0-129.396,95.698-234.667,213.333-234.667S448,126.604,448,256v106.667c0,5.896,4.771,10.667,10.667,10.667
            c5.896,0,10.667-4.771,10.667-10.667V256C469.333,114.844,364.063,0,234.667,0z"
                              />
                              <path
                                d="M117.333,256h-32c-23.531,0-42.667,19.135-42.667,42.667v128c0,23.531,19.135,42.667,42.667,42.667h32
            c5.896,0,10.667-4.771,10.667-10.667v-192C128,260.771,123.229,256,117.333,256z M106.667,448H85.333
            C73.573,448,64,438.427,64,426.667v-128c0-11.76,9.573-21.333,21.333-21.333h21.333V448z"
                              />
                              <path
                                d="M384,256h-32c-5.896,0-10.667,4.771-10.667,10.667v192c0,5.896,4.771,10.667,10.667,10.667h32
            c23.531,0,42.667-19.135,42.667-42.667v-128C426.667,275.135,407.531,256,384,256z M405.333,426.667
            c0,11.76-9.573,21.333-21.333,21.333h-21.333V277.333H384c11.76,0,21.333,9.573,21.333,21.333V426.667z"
                              />
                            </g>
                          </g>
                        </g>
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="icon-box-text last-reset">
                  <p>
                    <strong>Hotline mua hàng</strong>
                    <br />
                    <span>{formatPhone(getSettingValue(CONTRACT_HOTLINE),'.')}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

const mapStateToProps = state => ({
  config: state.setting.config,
});

export default connect(mapStateToProps)(RightInfoProduct);
