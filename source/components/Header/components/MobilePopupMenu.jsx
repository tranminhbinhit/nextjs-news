/* eslint-disable */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { EnumRoutingPage } from "../../../constants/enum";
import LayoutPopupMobile from "../../../layouts/LayoutPopupMobile";
import { changeStatePopup } from "../../../redux/action/mainAction";
import { wrapper } from "../../../redux/store";
import { getLinkUrl, getMenuUrl, isEmptyObject } from "../../../utils/utils";

const MobilePopupMenu = (props) => {
  //For search
  const router = useRouter();
  const [keySearch, setKeySearch] = useState('');
  const { changeStatePopupConnect, config } = props;
  const controlKey = 'isPopupMobileMenu';


  const changeStatePopup = (value) => {
    changeStatePopupConnect(controlKey, value);
  }

  const handleSubmit = async (event) => {
    //debugger
    event.preventDefault();
    router.push(getLinkUrl(EnumRoutingPage.SEARCH.id, keySearch));
    setKeySearch('');
    changeStatePopup(false);
  };
  
  const { ListCategoryJson: listCategory, ConfigJson: setting } = config;

  const {
    CompanyName
 } = setting || {};
  return (
    <LayoutPopupMobile controlKey={controlKey} position="left">
      <div className="nav_wrap">
        <div className="item_main">
          <div className="jeg_aside_item jeg_search_wrapper jeg_search_no_expand rounded">
            <a href="#" className="jeg_search_toggle"><i className="fa fa-search"></i></a>
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
          <div className="jeg_aside_item">
            <ul className="jeg_mobile_menu sf-js-enabled sf-arrows">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1956 current_page_item menu-item-1982">
                <Link href="/">
                  <a onClick={() => changeStatePopup(false)}>Trang chủ</a>
                </Link>
              </li>

              {!isEmptyObject(listCategory) ? listCategory.map(m => {
                const { PageNameRewrite, PageName } = m;
                return (
                  <li
                    className={`menu-item menu-item-type-taxonomy menu-item-object-category`}
                    key={`key-c-${PageNameRewrite}`}
                  >
                    <Link href={getLinkUrl(EnumRoutingPage.CATEGORY_NEWS.id, PageNameRewrite)}>
                      <a onClick={() => changeStatePopup(false)}>
                        {PageName}
                      </a>
                    </Link>
                  </li>
                )
              }) : ''}
            </ul>
          </div>
        </div>
        <div className="item_bottom">
          {/* <div className="jeg_aside_item socials_widget nobg">
            <a href="" target="_blank" rel="external noopener nofollow" className="jeg_facebook"><i className="fa fa-facebook"></i> </a>
          </div> */}
          <div className="jeg_aside_item jeg_aside_copyright">
            <p>© 2020 Bản quyền {CompanyName}</p>
          </div>
        </div>
      </div>
    </LayoutPopupMobile>
  );
};

const mapStateToProps = (state) => ({
  config: state.setting.config,
});

const mapDispatchToProps = (dispatch) => ({
  changeStatePopupConnect: (controlKey, value) => {
    dispatch(changeStatePopup(controlKey, value));
  }
});

export default wrapper.withRedux(
  connect(mapStateToProps, mapDispatchToProps)(MobilePopupMenu)
);
