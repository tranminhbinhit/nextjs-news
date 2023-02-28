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
    const topcontrol = $(".header .header-wrapper");
    $(window).on("scroll", () => {
      if ($(window).scrollTop() > 700) {
        topcontrol.addClass("stuck");
      } else {
        topcontrol.removeClass("stuck");
      }
    });
  };

  componentDidMount() {
    this.showHeaderWhenScroll();
  }

  onchangeStatePopup = (controlKey, value) => {
    const { changeStatePopupConnect } = this.props;
    changeStatePopupConnect(controlKey, value);
  };

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

    const listLanguage = EnumLanguage.map((lang) => {
      const { id, code, name } = lang;
      return (
        <div
          key={id}
          className="dropdown-item"
          onClick={() => changeLanguageConnect(code)}
        >
          <span className={`icon icon-lag-${code === "vi" ? "vn" : code}`} />
          <span className="language-item">{name}</span>
        </div>
      );
    });

    return (
      <React.Fragment>
        <header className="header has-sticky sticky-jump">
          <div className="header-wrapper">
            <div className="header-main">
              <div
                className="header-inner flex-row container logo-left medium-logo-center"
                role="navigation"
              >
                <div id="logo" className="flex-col logo">
                  <Link href={"/"} title={websiteTitle} className="cursor">
                    <a>
                      <img
                        width="356"
                        height="120"
                        src={getImageCdn(websiteLogo)}
                        className="header_logo header-logo"
                        alt={websiteTitle}
                      />
                      <img
                        width="356"
                        height="120"
                        src={getImageCdn(websiteLogo)}
                        className="header-logo-dark"
                        alt={websiteTitle}
                      />
                    </a>
                  </Link>
                </div>

                <div className="flex-col show-for-medium flex-left">
                  <ul className="mobile-nav nav nav-left" />
                </div>
                <SearchForm />
                <div className="flex-col hide-for-medium flex-right">
                  <ul className="header-nav header-nav-main nav nav-right nav-size-large nav-uppercase">
                    <li className="header-block">
                      <div className="header-block-block-1">
                        <div className="icon-box featured-box h-info icon-box-left text-left">
                          <div className="icon-box-img w35">
                            <div className="icon">
                              <div
                                className="icon-inner"
                                style={{ color: "rgb(241, 145, 16)" }}
                              >
                                <svg
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 469.333 469.333"
                                  style={{
                                    enableBackground: "new 0 0 469.333 469.333",
                                  }}
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
                            <div className="text h-hotline">
                              <p>
                                <span className="sub-title">Hotline</span>
                                <strong>
                                  <span
                                    className="title"
                                    data-text-color="primary"
                                  >
                                    {formatPhone(
                                      getSettingValue(CONTRACT_HOTLINE),
                                      "."
                                    )}
                                  </span>
                                </strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <li className="account-item has-icon">
                      <div className="header-button">
                        <a className="nav-top-link nav-top-not-logged-in icon primary button circle is-small">
                          <i className="icon-user" />
                        </a>
                      </div>
                    </li> */}
                    {isOrderCart ? <WebPopupCart /> : ""}

                    {/* <li className="account-item has-icon">
                      <div className="header-button dropdown cursor">
                        <a
                          className="dropdown-toggle"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span
                            className={`icon icon-lag-${
                              language === 'vi' ? 'vn' : language
                            }`}
                          />
                          <i className="fas fa-globe-africa fs20" />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton"
                        >
                          {listLanguage}
                        </div>
                      </div>
                    </li> */}
                  </ul>
                </div>

                <div className="flex-col show-for-medium flex-right">
                  <ul className="mobile-nav nav nav-right">
                    <li className="header-search header-search-lightbox has-icon">
                      <div className="header-button">
                        <a
                          className="icon primary button circle is-small"
                          onClick={() =>
                            this.onchangeStatePopup("isPopupMobileSearch", true)
                          }
                        >
                          <i className="icon-search fs16" />
                        </a>
                      </div>
                      <MobilePopupSearch />
                    </li>
                    {isOrderCart ? (
                      <li className="cart-item has-icon">
                        <a
                          className="header-cart-link off-canvas-toggle nav-top-link is-small"
                          title="Giỏ hàng"
                          onClick={() =>
                            this.onchangeStatePopup("isPopupMobileCart", true)
                          }
                        >
                          <i
                            className="icon-shopping-basket"
                            data-icon-label="3"
                          >
                            {" "}
                          </i>
                        </a>
                        <MobilePopupCart />
                      </li>
                    ) : (
                      ""
                    )}

                    <li className="nav-icon has-icon">
                      <div className="header-button">
                        <a
                          className="icon primary button circle is-small"
                          onClick={() =>
                            this.onchangeStatePopup("isPopupMobileMenu", true)
                          }
                        >
                          <i className="icon-menu" />
                        </a>
                      </div>
                      <MobilePopupMenu menus={menus} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <WebMenu menus={menus} />

            <div className="header-bg-container fill">
              <div className="header-bg-image fill" />
              <div className="header-bg-color fill" />
            </div>
          </div>
        </header>
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
