/* eslint-disable */
import { useRouter } from "next/router";
import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { EnumRoutingPage } from "../../../constants/enum";
import LayoutPopupMobile from "../../../layouts/LayoutPopupMobile";
import { changeStatePopup } from "../../../redux/action/mainAction";
import { wrapper } from "../../../redux/store";
import { getLinkUrl } from "../../../utils/utils";

const MobilePopupSearch = (props) => {
  const router = useRouter();
  const [keySearch, setSearchValue] = useState("");
  const { changeStatePopupConnect } = props;
  const controlKey = 'isPopupMobileSearch';

  const searchProduct = () => {
    router.push(getLinkUrl(EnumRoutingPage.SEARCH.id, keySearch));
    setSearchValue("");
    changeStatePopupConnect(controlKey, false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchProduct();
    }
  };

  return (
    <LayoutPopupMobile controlKey={controlKey} position="undefined">
      <div className="dark text-center">
        <div className="searchform-wrapper ux-search-box relative form-flat is-large">
          <div className="searchform">
            <div className="flex-row relative">
              <div className="flex-col flex-grow">
                <label
                  className="screen-reader-text"
                  htmlFor="woocommerce-product-search-field-1"
                >
                  Tìm kiếm:
                </label>
                <input
                  type="search"
                  className="search-field mb-0"
                  placeholder="Nhập sản phẩm cần tìm"
                  value={keySearch}
                  onKeyDown={handleKeyDown}
                  onChange={(event) => {
                    setSearchValue(event.target.value);
                  }}
                  name="keySearch"
                />
              </div>
              <div className="flex-col">
                <button
                  type="submit"
                  defaultValue="Tìm kiếm"
                  className="ux-search-submit submit-button secondary button icon mb-0"
                  onClick={() => searchProduct()}
                >
                  <i className="icon-search" />
                </button>
              </div>
            </div>
            <div className="live-search-results text-left z-top" />
          </div>
        </div>
      </div>
    </LayoutPopupMobile>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeStatePopupConnect: (controlKey, value) => {
    dispatch(changeStatePopup(controlKey, value));
  }
});

export default wrapper.withRedux(
  connect(null, mapDispatchToProps)(MobilePopupSearch)
);
