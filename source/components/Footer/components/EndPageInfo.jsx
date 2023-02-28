/* eslint-disable */
import Link from "next/link";
import React, { Component } from "react";
import { connect } from "react-redux";
import { formatPhone, getSettingValue } from "../../../utils/utils";

const EndPageInfo = ({ config }) => {
  // const { CONTRACT_HOTLINE, CONTRACT_CHAT, CONTRACT_ZALO, CONTRACT_MAP_URL } =
  //   config || {};
  return (
    <React.Fragment>
      <div className="absolute-footer light medium-text-center text-center">
        <div className="container clearfix">
          <div className="footer-secondary pull-right">
            <div className="footer-text inline-block small-block">
              Copyright 2019 © Enow
            </div>
          </div>

          <div className="footer-primary pull-left">
            <div className="menu-main-menu-container">
              <ul className="links footer-nav uppercase">
                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home">
                  <Link href="/" aria-current="page">
                    <a>Trang Chủ</a>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link href="/lien-he">
                    <a>Liên hệ</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="copyright-footer" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  config: state.setting.config,
});

export default connect(mapStateToProps)(EndPageInfo);
