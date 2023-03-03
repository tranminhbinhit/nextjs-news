import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { wrapper } from "../../redux/store";
import { getImage, isEmptyObject } from "../../utils/utils";

const AdsRow728 = (props) => {
  const {page, position, config} = props;
  const { ConfigJson } = config || {};
  const { ListAds = [] } = ConfigJson || {};
  const adsItem = ListAds.find(m => m.Page == page && m.Position == position);
  return !isEmptyObject(adsItem) ? (
    <div className="jeg_ad jeg_ad_module jnews_inline_module_ads">
      <div className="ads-wrapper">
        <a
          href={adsItem.Url}
          target="_blank"
          rel="nofollow noopener"
          className="adlink ads_image inline_module"
        >
          <img
            src={getImage(adsItem.Data)}
            alt={adsItem.Description}
          />
        </a>
      </div>
    </div>
  ) : '';
};

const mapStateToProps = (state) => ({
  config: state.setting.config,
});

export default wrapper.withRedux(
  connect(mapStateToProps, null)(AdsRow728)
);
