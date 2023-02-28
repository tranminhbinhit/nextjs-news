import Link from "next/link";
import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import { EnumLanguage } from "../../constants/enum";
import { changeStatePopup } from "../../redux/action/mainAction";
import { wrapper } from "../../redux/store";
import { formatPhone, getImageCdn, getSettingValue } from "../../utils/utils";
import MobilePopupCart from "./components/MobilePopupCart";
import MobilePopupMenu from "./components/MobilePopupMenu";
import MobilePopupSearch from "./components/MobilePopupSearch";
import SearchForm from "./components/SearchForm";
import WebMenu from "./components/WebMenu";
import WebPopupCart from "./components/WebPopupCart";

/* eslint-disable */
class Header extends Component {
  static async getInitialProps(ctx) {}

  showHeaderWhenScroll = () => {
    // const topcontrol = $(".header .header-wrapper");
    // $(window).on("scroll", () => {
    //   if ($(window).scrollTop() > 700) {
    //     topcontrol.addClass("stuck");
    //   } else {
    //     topcontrol.removeClass("stuck");
    //   }
    // });
  };

  // componentDidMount() {
  //   this.showHeaderWhenScroll();
  // }

  // onchangeStatePopup = (controlKey, value) => {
  //   const { changeStatePopupConnect } = this.props;
  //   changeStatePopupConnect(controlKey, value);
  // };

  render() {
    const { config, changeLanguageConnect, language, menus } = this.props;

    const {
      PD_SEO_DESCRIPTION,
      PD_SEO_IMAGE,
      PD_SEO_KEYWORD,
      PD_SEO_WEBSITE_TITLE,
      PD_SEO_WEBSITE_NAME,
      WEB_LOGO_IMAGE,
      CONTRACT_HOTLINE,
      WEB_ORDER_CART,
      WEB_FAVICON_IMAGE,
    } = config || {};
    const websiteTitle = getSettingValue(PD_SEO_WEBSITE_TITLE);
    const websiteDescription = getSettingValue(PD_SEO_DESCRIPTION);
    const websiteKeyword = getSettingValue(PD_SEO_KEYWORD);
    const websiteImage = getSettingValue(PD_SEO_IMAGE);
    const websiteName = getSettingValue(PD_SEO_WEBSITE_NAME);
    const websiteLogo = getSettingValue(WEB_LOGO_IMAGE);
    const websiteFavicon = getSettingValue(WEB_FAVICON_IMAGE);
    const isOrderCart = getSettingValue(WEB_ORDER_CART);

    // const listLanguage = EnumLanguage.map((lang) => {
    //   const { id, code, name } = lang;
    //   return (
    //     <div
    //       key={id}
    //       className="dropdown-item"
    //       onClick={() => changeLanguageConnect(code)}
    //     >
    //       <span className={`icon icon-lag-${code === "vi" ? "vn" : code}`} />
    //       <span className="language-item">{name}</span>
    //     </div>
    //   );
    // });

    return (
      <React.Fragment>
        <div className="jeg_header_wrapper">
          <div className="jeg_header_instagram_wrapper"></div>
          <div className="jeg_header normal">
            <div className="jeg_topbar jeg_container dark">
              <div className="container">
                <div className="jeg_nav_row">
                  <div className="jeg_nav_col jeg_nav_left  jeg_nav_grow">
                    <div className="item_wrap jeg_nav_alignleft">
                      <div className="jeg_nav_item jeg_top_date">
                        Thứ Tư, Tháng Hai 22, 2023
                      </div>
                    </div>
                  </div>
                  <div className="jeg_nav_col jeg_nav_center  jeg_nav_normal">
                    <div className="item_wrap jeg_nav_aligncenter"></div>
                  </div>
                  <div className="jeg_nav_col jeg_nav_right  jeg_nav_normal">
                    <div className="item_wrap jeg_nav_alignright">
                      <div className="jeg_nav_item jeg_nav_html">
                        quangcao@ngoisaoexpress.net
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
                          <a
                            href="/"
                          >
                            <img
                              className="jeg_logo_img"
                              src="/images/logo_NgoiSaoExpress.png"
                              alt="Ngôi Sao Express"
                            />
                            {/* <span>
                              Ngôi Sao Express
                            </span>{" "} */}
                          </a>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="jeg_nav_col jeg_nav_center jeg_nav_normal">
                    <div className="item_wrap jeg_nav_aligncenter"></div>
                  </div>
                  <div className="jeg_nav_col jeg_nav_right jeg_nav_grow">
                    <div className="item_wrap jeg_nav_alignright">
                      <div className="jeg_nav_item jeg_ad jeg_ad_top jnews_header_ads">
                        <div className="ads-wrapper">
                          <a
                            href="https://www.youtube.com/watch?v=b8xTHR6bNxE"
                            rel="noopener"
                            className="adlink ads_image"
                          >
                            <img
                              src="/images/Biore_728x90px.jpg"
                              className=" lazyloaded"
                              alt="Advertisement"
                              data-pin-no-hover="true"
                            />
                          </a>
                        </div>
                      </div>
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
                            data-animation="animate"
                          >
                            <li
                              id="menu-item-1963"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1956 current_page_item menu-item-1963 bgnav"
                              data-item-row="default"
                            >
                              <a href="/">
                                Trang chủ
                              </a>
                            </li>
                            <li
                              id="menu-item-2000"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2000 bgnav"
                              data-item-row="default"
                            >
                              <a href="/chuyen-muc/chuyen-lang-sao/">
                                danh muc
                              </a>
                            </li>
                            <li
                              id="menu-item-2000"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2000 bgnav"
                              data-item-row="default"
                            >
                              <a href="/dan-ong-trong-long-nho-nhung-phu-nu-se-co-4-bieu-hien-nay-gia-vo-khong-duoc">
                                Chi tiết
                              </a>
                            </li>
                            <li
                              id="menu-item-2000"
                              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2000 bgnav"
                              data-item-row="default"
                            >
                              <a href="/tim-kiem?key=11">
                                tim kiem
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jeg_nav_col jeg_nav_center jeg_nav_normal">
                    <div className="item_wrap jeg_nav_aligncenter"></div>
                  </div>
                  <div className="jeg_nav_col jeg_nav_right jeg_nav_normal">
                    <div className="item_wrap jeg_nav_alignright">
                      <div className="jeg_nav_item jeg_nav_search">
                        <div className="jeg_search_wrapper jeg_search_no_expand rounded">
                          <a
                            href="https://ngoisaoexpress.net/#"
                            className="jeg_search_toggle"
                          >
                            <i className="fa fa-search"></i>
                          </a>
                          {/* <form
                            action="https://ngoisaoexpress.net/"
                            method="get"
                            className="jeg_search_form"
                            target="_top"
                          >
                            <input
                              name="s"
                              className="jeg_search_input"
                              placeholder="Tìm kiếm..."
                              type="text"
                              value=""
                              autocomplete="off"
                            />
                            <button
                              aria-label="Search Button"
                              type="submit"
                              className="jeg_search_button btn"
                            >
                              <i className="fa fa-search"></i>
                            </button>
                          </form> */}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                            <a href="https://ngoisaoexpress.net/">
                              <img
                                className="jeg_logo_img"
                                src="/images/logo_NgoiSaoExpress.png"
                                alt="Ngôi Sao Express"
                              />{" "}
                            </a>
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
                                <a href="https://ngoisaoexpress.net/">
                                  Trang chủ
                                </a>
                              </li>
                              <li
                                id="menu-item-2000"
                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2000 bgnav"
                                data-item-row="default"
                              >
                                <a href="https://ngoisaoexpress.net/category/chuyen-lang-sao/">
                                  Chuyện làng sao
                                </a>
                              </li>
                              <li
                                id="menu-item-2001"
                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2001 bgnav"
                                data-item-row="default"
                              >
                                <a href="https://ngoisaoexpress.net/category/lam-dep/">
                                  Làm đẹp
                                </a>
                              </li>
                              <li
                                id="menu-item-2002"
                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2002 bgnav"
                                data-item-row="default"
                              >
                                <a href="https://ngoisaoexpress.net/category/suc-khoe/">
                                  Sức khoẻ
                                </a>
                              </li>
                              <li
                                id="menu-item-2003"
                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2003 bgnav"
                                data-item-row="default"
                              >
                                <a href="https://ngoisaoexpress.net/category/nam-gioi/">
                                  Nam giới
                                </a>
                              </li>
                              <li
                                id="menu-item-2004"
                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2004 bgnav"
                                data-item-row="default"
                              >
                                <a href="https://ngoisaoexpress.net/category/phim-nhac/">
                                  Phim nhạc
                                </a>
                              </li>
                              <li
                                id="menu-item-2005"
                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2005 bgnav"
                                data-item-row="default"
                              >
                                <a href="https://ngoisaoexpress.net/category/nu-gioi/">
                                  Nữ giới
                                </a>
                              </li>
                              <li
                                id="menu-item-2006"
                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2006 bgnav"
                                data-item-row="default"
                              >
                                <a href="https://ngoisaoexpress.net/category/thoi-trang/">
                                  Thời trang
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="jeg_nav_col jeg_nav_center jeg_nav_normal">
                      <div className="item_wrap jeg_nav_aligncenter"></div>
                    </div>
                    <div className="jeg_nav_col jeg_nav_right jeg_nav_normal">
                      <div className="item_wrap jeg_nav_alignright">
                        <div className="jeg_nav_item jeg_search_wrapper search_icon jeg_search_popup_expand">
                          <a
                            href="https://ngoisaoexpress.net/#"
                            className="jeg_search_toggle"
                          >
                            <i className="fa fa-search"></i>
                          </a>
                          {/* <form
                            action="https://ngoisaoexpress.net/"
                            method="get"
                            className="jeg_search_form"
                            target="_top"
                          >
                            <input
                              name="s"
                              className="jeg_search_input"
                              placeholder="Tìm kiếm..."
                              type="text"
                              value=""
                              autocomplete="off"
                            />
                            <button
                              aria-label="Search Button"
                              type="submit"
                              className="jeg_search_button btn"
                            >
                              <i className="fa fa-search"></i>
                            </button>
                          </form> */}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jeg_navbar_mobile_wrapper">
          <div className="jeg_navbar_mobile" data-mode="scroll">
            <div className="jeg_mobile_bottombar jeg_mobile_midbar jeg_container dark">
              <div className="container">
                <div className="jeg_nav_row">
                  <div className="jeg_nav_col jeg_nav_left jeg_nav_normal">
                    <div className="item_wrap jeg_nav_alignleft">
                      <div className="jeg_nav_item">
                        <a
                          href="https://ngoisaoexpress.net/#"
                          className="toggle_btn jeg_mobile_toggle"
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
                          <a href="https://ngoisaoexpress.net/">
                            <img
                              className="jeg_logo_img"
                              src="/images/logo_NgoiSaoExpress.png"
                              alt="Ngôi Sao Express"
                            />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jeg_nav_col jeg_nav_right jeg_nav_normal">
                    <div className="item_wrap jeg_nav_alignright">
                      <div className="jeg_nav_item jeg_search_wrapper jeg_search_popup_expand">
                        <a
                          href="https://ngoisaoexpress.net/#"
                          className="jeg_search_toggle"
                        >
                          <i className="fa fa-search"></i>
                        </a>
                        {/* <form
                          action="https://ngoisaoexpress.net/"
                          method="get"
                          className="jeg_search_form"
                          target="_top"
                        >
                          <input
                            name="s"
                            className="jeg_search_input"
                            placeholder="Tìm kiếm..."
                            type="text"
                            value=""
                            autocomplete="off"
                          />
                          <button
                            aria-label="Search Button"
                            type="submit"
                            className="jeg_search_button btn"
                          >
                            <i className="fa fa-search"></i>
                          </button>
                        </form> */}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  config: state.setting.config,
  menus: state.app.menus,
  language: state.setting.language,
});

const mapDispatchToProps = (dispatch) => ({
  changeStatePopupConnect: (controlKey, value) => {
    dispatch(changeStatePopup(controlKey, value));
  },
  // changeLanguageConnect: language => {
  //   dispatch(changeLanguage(language));
  // },
});

export default wrapper.withRedux(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
