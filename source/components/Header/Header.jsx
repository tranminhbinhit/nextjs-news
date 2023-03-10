import Link from "next/link";
import React, { Component, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { EnumLanguage, EnumRoutingPage } from "../../constants/enum";
import { changeStatePopup } from "../../redux/action/mainAction";
import { wrapper } from "../../redux/store";
import AdsRow728 from '../Ads/AdsRow728';
import { formatDate, formatDateTimeView, getDate, getImage, getLinkUrl, isEmptyObject } from "../../utils/utils";
import MobilePopupMenu from './components/MobilePopupMenu';
import { useRouter } from "next/router";
import MobilePopupSearch from "./components/MobilePopupSearch";
import SearchForm from "./components/SearchForm";

/* eslint-disable */
const Header = (props) => {
  const router = useRouter();
  const [isOpenSearchMobile, setIsOpenSearchMobile] = useState(false);

  const onchangeStatePopup = (controlKey, value) => {
    const { changeStatePopupConnect } = props;
    changeStatePopupConnect(controlKey, value);
  };

  const { config, changeLanguageConnect, language } = props;
  const { ListCategoryJson: listCategory, ConfigJson: setting } = config;
  const {
    WebDescription,
    WebImage,
    WebTitle,
    WebLogo,
    WebName,
    WebIcon,
    WebEmail,
  } = setting || {};

  const dateTimeView = formatDate(getDate(0));
  return (
    <React.Fragment>
      {/* header */}
      <div className="jeg_header_wrapper">
        <div className="jeg_header_instagram_wrapper"></div>
        <div className="jeg_header normal">
          <div className="jeg_topbar jeg_container dark">
            <div className="container">
              <div className="jeg_nav_row">
                <div className="jeg_nav_col jeg_nav_left  jeg_nav_grow">
                  <div className="item_wrap jeg_nav_alignleft">
                    <div className="jeg_nav_item jeg_top_date">
                      {dateTimeView}
                    </div>
                  </div>
                </div>
                <div className="jeg_nav_col jeg_nav_center  jeg_nav_normal">
                  <div className="item_wrap jeg_nav_aligncenter"></div>
                </div>
                <div className="jeg_nav_col jeg_nav_right  jeg_nav_normal">
                  <div className="item_wrap jeg_nav_alignright">
                    <div className="jeg_nav_item jeg_nav_html">
                      {WebEmail}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="jeg_midbar jeg_container dark">
            <div className="container">
              <div className="jeg_nav_row">
                <div className="jeg_nav_col jeg_nav_left jeg_nav_normal">
                  <div className="item_wrap jeg_nav_alignleft">
                    <div className="jeg_nav_item jeg_logo jeg_desktop_logo">
                      <h1 className="site-title">
                        <Link href="/">
                          <a
                            title={WebName}
                          >
                            <img
                              className="jeg_logo_img"
                              src={getImage(WebLogo)}
                              alt={WebName}
                            />
                          </a>
                        </Link>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="jeg_nav_col jeg_nav_center jeg_nav_normal">
                  <div className="item_wrap jeg_nav_aligncenter"></div>
                </div>
                <div className="jeg_nav_col jeg_nav_right jeg_nav_grow">
                  <div className="item_wrap jeg_nav_alignright">
                    <AdsRow728 page="all" position="center_1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="jeg_bottombar jeg_navbar jeg_container jeg_navbar_wrapper jeg_navbar_normal jeg_navbar_dark">
            <div className="container">
              <div className="jeg_nav_row">
                <div className="jeg_nav_col jeg_nav_left jeg_nav_grow">
                  <div className="item_wrap jeg_nav_alignleft">
                    <div className="jeg_nav_item jeg_main_menu_wrapper">
                      <div className="jeg_mainmenu_wrap">
                        <ul
                          className="jeg_menu jeg_main_menu jeg_menu_style_4 sf-js-enabled sf-arrows"
                        >
                          <li
                            className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-1956 menu-item-1963 bgnav ${true ? '' : 'current-menu-item'}`}
                            data-item-row="default"
                          >
                            <Link href="/">
                              <a>
                                Trang chủ
                              </a>
                            </Link>
                          </li>
                          {!isEmptyObject(listCategory) ? listCategory.map(m => {
                            const { PageNameRewrite, PageName } = m;
                            return (
                              <li
                                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-1956 menu-item-1963 bgnav`}
                                key={`key-c-${PageNameRewrite}`}
                              >
                                <Link href={getLinkUrl(EnumRoutingPage.CATEGORY_NEWS.id, PageNameRewrite)}>
                                  <a>
                                    {PageName}
                                  </a>
                                </Link>
                              </li>
                            )
                          }) : ''}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="jeg_nav_col jeg_nav_center jeg_nav_normal">
                  <div className="item_wrap jeg_nav_aligncenter"></div>
                </div>
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Scroll thi hien thi   */}
      <div className="jeg_header_sticky">
        <div className="jeg_header normal">
          <div className="jeg_container">
            <div
              data-mode="scroll"
              className="jeg_stickybar jeg_navbar jeg_navbar_wrapper jeg_navbar_normal jeg_navbar_dark"
            >
              <div className="container">
                <div className="jeg_nav_row">
                  <div className="jeg_nav_col jeg_nav_left jeg_nav_grow">
                    <div className="item_wrap jeg_nav_alignleft">
                      <div className="jeg_nav_item jeg_logo">
                        <div className="site-title">
                          <Link href="/">
                            <a
                              title={WebName}
                            >
                              <img
                                className="jeg_logo_img"
                                src={getImage(WebLogo)}
                                alt={WebName}
                              />{" "}
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="jeg_nav_item jeg_main_menu_wrapper">
                        <div className="jeg_mainmenu_wrap">
                          <ul
                            className="jeg_menu jeg_main_menu jeg_menu_style_4 sf-js-enabled sf-arrows"
                            data-animation="animate"
                          >
                            <li
                              id="menu-item-1963"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1956 current_page_item menu-item-1963 bgnav"
                              data-item-row="default"
                            >
                              <Link href="/">
                                <a>
                                  Trang chủ
                                </a>
                              </Link>
                            </li>
                            {!isEmptyObject(listCategory) ? listCategory.map(m => {
                              const { PageNameRewrite, PageName } = m;
                              return (
                                <li
                                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2000 bgnav"
                                  key={`key-c-${PageNameRewrite}`}
                                >
                                  <Link href={getLinkUrl(EnumRoutingPage.CATEGORY_NEWS.id, PageNameRewrite)}>
                                    <a>
                                      {PageName}
                                    </a>
                                  </Link>
                                </li>
                              )
                            }) : ''}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jeg_nav_col jeg_nav_center jeg_nav_normal">
                    <div className="item_wrap jeg_nav_aligncenter"></div>
                  </div>
                  <SearchForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile */}
      <div className="jeg_navbar_mobile_wrapper ">
        <div className="jeg_navbar_mobile" data-mode="scroll">
          <div className={`jeg_mobile_bottombar jeg_mobile_midbar jeg_container dark ${isOpenSearchMobile ? "jeg_search_expanded" : ""}`}>
            <div className="container">
              <div className="jeg_nav_row">
                <div className="jeg_nav_col jeg_nav_left jeg_nav_normal">
                  <div className="item_wrap jeg_nav_alignleft">
                    <div className="jeg_nav_item">
                      <a
                        className="toggle_btn jeg_mobile_toggle"
                        onClick={() =>
                          onchangeStatePopup("isPopupMobileMenu", true)
                        }
                      >
                        <i className="fa fa-bars"></i>
                      </a>

                    </div>
                  </div>
                </div>
                <div className="jeg_nav_col jeg_nav_center jeg_nav_grow">
                  <div className="item_wrap jeg_nav_aligncenter">
                    <div className="jeg_nav_item jeg_mobile_logo">
                      <div className="site-title">
                        <Link href="/">
                          <a >
                            <img
                              className="jeg_logo_img"
                              src={getImage(WebLogo)}
                              alt={WebName}
                            />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="jeg_nav_col jeg_nav_right jeg_nav_normal">
                  <MobilePopupSearch setIsOpenSearchMobile={setIsOpenSearchMobile} isOpenSearchMobile={isOpenSearchMobile} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobilePopupMenu />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  config: state.setting.config,
});

const mapDispatchToProps = (dispatch) => ({
  changeStatePopupConnect: (controlKey, value) => {
    dispatch(changeStatePopup(controlKey, value));
  },
});

export default wrapper.withRedux(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
