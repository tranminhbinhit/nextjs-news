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
  const [keySearch, setSearchValue] = useState("");
  
  const { changeStatePopupConnect } = props;
  const controlKey = 'isPopupMobileMenu';

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

  const onSelectAction = () => {
    changeStatePopupConnect(controlKey, false);
  }

  //Show menu
  const showMenu = (menus) => {
    return menus.map((menu) => {
      const {
        MenuName,
        MenuUrl: url,
        MenuLink: nameRewrite,
        MenuViewTypeId: type,
        DataId: dataId,
        ListView: listView,
        MenuId: menuId,
      } = menu;

      const urlMenu = getMenuUrl(menu);
      const isHaveChild = !isEmptyObject(listView);
      const classMenu = `menu-item ${isHaveChild ? "dropdown" : ""}`;
      return (
        <li className={classMenu} key={`menu-mobile-${menuId}`}>
          <Link href={urlMenu}>
            <a
              className={`nav-top-link ${isHaveChild ? "dropdown-toggle" : ""}`}
              id={`dropdownMenu${menuId}`}
              data-toggle={isHaveChild ? "dropdown" : ""}
              aria-haspopup={isHaveChild ? "true" : ""}
              aria-expanded="false"
            >
              {MenuName}
            </a>
          </Link>
          {isHaveChild ? (
            <React.Fragment>
              <ul
                className="sub-menu nav-dropdown-default dropdown-menu"
                aria-labelledby={`dropdownMenu${menuId}`}
              >
                {showMenu(listView)}
              </ul>
            </React.Fragment>
          ) : (
            ""
          )}
        </li>
      );
    });
  };
  const { menus = [] } = props;
  return (
    <LayoutPopupMobile controlKey={controlKey} position="left">
      <div className="mobile-sidebar no-scrollbar">
        <div className="sidebar-menu no-scrollbar ">
          <ul className="nav nav-sidebar nav-vertical nav-uppercase">
            {showMenu(menus)}
            <li className="header-search-form search-form html relative has-icon">
              <div className="header-search-form-wrapper">
                <div className="searchform-wrapper ux-search-box relative form-flat is-normal">
                  <div className="searchform">
                    <div className="flex-row relative">
                      <div className="flex-col flex-grow">
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
            </li>
          </ul>
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
  connect(null, mapDispatchToProps)(MobilePopupMenu)
);
