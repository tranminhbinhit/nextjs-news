import Link from "next/link";
import { connect } from "react-redux";
import { wrapper } from "../../redux/store";
import { getImage, isEmptyObject } from "../../utils/utils";

const AdsBox345 = (props) => {
  const { page, position, config } = props;
  const { ConfigJson } = config || {};
  const { ListAds = [] } = ConfigJson || {};
  const adsItem = ListAds.find(m => m.Page == page && m.Position == position);
  return !isEmptyObject(adsItem) ? (
    <div
      className="widget widget_jnews_module_element_ads"
    >
      <div className="jeg_ad jeg_ad_module jnews_module_1956_6_63f5e70255e05">
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
    </div>
  ) : '';
};

const mapStateToProps = (state) => ({
  config: state.setting.config,
});

export default wrapper.withRedux(
  connect(mapStateToProps, null)(AdsBox345)
);
