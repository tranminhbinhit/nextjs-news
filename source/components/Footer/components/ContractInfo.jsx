/* eslint-disable */
import Link from "next/link";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  formatPhone,
  getImageCdn,
  getSettingValue,
  isEmpty,
} from "../../../utils/utils";

const ContractInfo = ({ config }) => {
  const {
    WEB_LOGO_IMAGE,
    CONTRACT_ADDRESS,
    CONTRACT_HOTLINE,
    CONTRACT_FANPAGE,
    CONTRACT_EMAIL,
    CONTRACT_COMPANY,
  } = config || {};

  const websiteName = getSettingValue(CONTRACT_COMPANY);
  const websiteLogo = getSettingValue(WEB_LOGO_IMAGE);
  const websiteAddress = getSettingValue(CONTRACT_ADDRESS);
  const websiteHotline = getSettingValue(CONTRACT_HOTLINE);
  const websiteEmail = getSettingValue(CONTRACT_EMAIL);
  const websiteFanpage = getSettingValue(CONTRACT_FANPAGE);
  return (
    <React.Fragment>
      <div className="row row-full-width align-equal">
        <div className="col f-info medium-4 small-12 large-4 col-divided">
          <div className="col-inner text-center">
            <div className="row">
              <div className="col small-12 large-12">
                <div className="col-inner text-center">
                  <div className="has-hover x md-x lg-x y md-y lg-y">
                    <div className="img-inner dark">
                      <img src={getImageCdn(websiteLogo)} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text text-left">
              <h4>{websiteName}</h4>
              {!isEmpty(websiteAddress) ? (
                <p>
                  <strong>Địa chỉ</strong>: {websiteAddress}
                </p>
              ) : (
                ""
              )}
              {!isEmpty(websiteHotline) ? (
                <p>
                  <strong>Hotline</strong>: {formatPhone(websiteHotline)}
                </p>
              ) : (
                ""
              )}

              {!isEmpty(websiteEmail) ? (
                <p>
                  <strong>Email</strong>: {websiteEmail}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="col medium-8 small-12 large-8">
          <div className="col-inner">
            <div className="row">
              <div className="col medium-4 small-12 large-4">
                <div className="col-inner">
                  <h4 className="uppercase">{websiteName}</h4>
                  <ul className="sidebar-wrapper ul-reset">
                    <div className="col pb-0 widget widget_nav_menu">
                      <div className="menu-ve-nut-corner-container">
                        <ul className="menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2395">
                            <Link href="/">
                              <a>Giới thiệu</a>
                            </Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3471">
                            <Link href="/">
                              <a>Chính sách bảo mật</a>
                            </Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3472">
                            <Link href="/">
                              <a>Chính Sách Đổi Trả Hàng</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>

              {/* <div className="col medium-3 small-12 large-3">
                <div className="col-inner">
                  <h4 className="uppercase">Sản Phẩm</h4>
                  <ul className="sidebar-wrapper ul-reset">
                    <div className="col pb-0 widget widget_nav_menu">
                      <div className="menu-danh-muc-san-pham-container">
                        <ul className="menu">
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2390">
                            <a href="https://nutscorner.net/qua-tet/">
                              Quà Tặng Tết
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2391">
                            <a href="https://nutscorner.net/gio-qua-tet/">
                              Giỏ Quà Tết
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2392">
                            <a href="https://nutscorner.net/hop-qua-tet/">
                              Hộp Quà Tết
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </div>
              </div> */}
              {!isEmpty(websiteFanpage) ? (
                <div className="col medium-5 small-12 large-5">
                  <div className="col-inner">
                    <div className="text">
                      <div className="abc">
                        <span className="widget-title">Fanpage</span>
                        <div className="is-divider small" />
                        <div
                          className="fb-page"
                          data-href={websiteFanpage}
                          data-tabs="timeline"
                          data-width=""
                          data-height="152"
                          data-small-header="false"
                          data-adapt-container-width="true"
                          data-hide-cover="true"
                          data-show-facepile="true"
                        >
                          <blockquote
                            cite={websiteFanpage}
                            className="fb-xfbml-parse-ignore"
                          >
                            <a href={websiteFanpage}>{websiteName}</a>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  config: state.setting.config,
});
const mapDispatchToProps = (dispatch) => ({
  createConsultancyContractConnect: (params, callback) =>
    dispatch(createConsultancyContract(params, callback)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContractInfo);
