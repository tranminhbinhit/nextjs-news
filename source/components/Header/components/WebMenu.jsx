/* eslint-disable */
import Link from "next/link";
import React, { Component } from "react";
import { getMenuUrl, isEmptyObject } from "../../../utils/utils";
import MenuItems from "../../Menu/MenuItems";

const WebMenu = (props) => {
  const showMenu = (menus = []) => {
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
      //menu-item-type-post_type menu-item-object-page menu-item-design-default menu-item-has-children
      //const classMenu = `menu-item ${isHaveChild ? 'has-dropdown current-dropdown' : ''}`;
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
                className="sub-menu nav-dropdown-default dropdown-menu nav-dropdown"
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

  const { menus } = props;
  return (
    <React.Fragment>
      <div className="header-bottom wide-nav hide-for-sticky nav-dark flex-has-center hide-for-medium">
        <div className="flex-row container">
          <div className="flex-col hide-for-medium flex-left">
            <ul className="nav header-nav header-bottom-nav nav-left nav-size-large nav-spacing-xlarge nav-uppercase nav-prompts-overlay" />
          </div>
          <div className="flex-col hide-for-medium flex-center">
            <ul className="nav header-nav header-bottom-nav nav-center nav-size-large nav-spacing-xlarge nav-uppercase nav-prompts-overlay">
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-3089 active menu-item-design-default">
                <Link href="/">
                  <a className="nav-top-link">Trang chủ</a>
                </Link>
              </li>
              {/* {showMenu(menus)} */}

              {menus.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                );
              })}
            </ul>
          </div>
          <div className="flex-col hide-for-medium flex-right flex-grow">
            <ul className="nav header-nav header-bottom-nav nav-right nav-size-large nav-spacing-xlarge nav-uppercase nav-prompts-overlay" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WebMenu;
