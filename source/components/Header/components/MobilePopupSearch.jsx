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
  const [keySearch, setKeySearch] = useState('');
  const { isOpenSearchMobile, setIsOpenSearchMobile } = props;

  const handleSubmit = async (event) => {
    //debugger
    event.preventDefault();
    router.push(getLinkUrl(EnumRoutingPage.SEARCH.id, keySearch));
    setKeySearch('');
  };


  return (
    <div className="item_wrap jeg_nav_alignright">
      <div className="jeg_nav_item jeg_search_wrapper jeg_search_popup_expand">
        <a
          className="jeg_search_toggle"
          onClick={() => setIsOpenSearchMobile(!isOpenSearchMobile)}
        >
          <i className={`fa ${!isOpenSearchMobile ? 'fa-search' :'fa-close'}`}></i>
        </a>
        <form
          onSubmit={handleSubmit}
          className="jeg_search_form"
        >
          <input
            name="s"
            className="jeg_search_input"
            placeholder="Tìm kiếm..."
            type="text"
            value={keySearch}
            onChange={event => {
              setKeySearch(event.target.value);
            }}
          />
          <button
            aria-label="Search Button"
            type="submit"
            className="jeg_search_button btn"
          >
            <i className="fa fa-search"></i>
          </button>
        </form>
        <div className="jeg_search_result jeg_search_hide with_result">
          <div className="search-result-wrapper"></div>
          <div className="search-link search-noresult">
            Không có kết quả
          </div>
          <div className="search-link search-all-button">
            <i className="fa fa-search"></i> Xem tất cả kết quả
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePopupSearch;
