/* eslint-disable */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { EnumViewPosition } from "../../constants/enum";
import { getNewsTop } from "../../service/newsService";
import { getLinkUrl, isEmpty, isEmptyObject } from "../../utils/utils";
import AdsBox345 from "../Ads/AdsBox345";
import EmptyData from "../BoxSite/EmptyData";
import LoadingOverlayContent from "../Loading/LoadingOverlayContent";
import NewsItemBox from "../News/NewsItemBox";

const HomeTop = (props) => {
  const { ads, hasBorder = true, title = '' } = props || {};
  const classBorder = hasBorder ? 'jeg_pb_boxed' : '';
  const { page, position } = ads = {};
  const [listData, setListData] = useState([]);

  useEffect(() => {
    //await initData();
    const initData = async () => {
      const listData = await getNewsTop({
        PageTypeId: 2,
        TopNumber: 12,
        ViewPosition: EnumViewPosition.HomeLeft1.id
      });
      setListData(listData);
    }
    initData();
  }, []);

  return (
    <div className="jeg_wrapper wpb_wrapper">
      <div className="vc_empty_space">
        <span className="vc_empty_space_inner"></span>
      </div>
      <div
        className="jeg_postblock_22 jeg_postblock jeg_module_hook jeg_pagination_nextprev jeg_col_2o3 jnews_module_1956_2_63f5e702458d0"
      >
        <div className="jeg_block_heading jeg_block_heading_7 jeg_subcat_right">
          <h3 className="jeg_block_title">
            <span>Chọn lọc</span>
          </h3>
        </div>
        <div className="jeg_block_container">
          <div className="jeg_posts_wrap">
            <div className="jeg_posts jeg_load_more_flag">
              {!isEmptyObject(listData)
                ? listData.map((newsItem) => (
                  <NewsItemBox
                    key={`key-${newsItem.CrawlerDataId}`}
                    newsItem={newsItem}
                  />
                ))
                : ""}
              <EmptyData listData={listData} />
            </div>
          </div>

          <LoadingOverlayContent />
        </div>
        {/* <div className="jeg_block_navigation">
          <div className="navigation_overlay">
            <div className="module-preloader jeg_preloader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="jeg_block_nav">
            <a
              href="#"
              className="prev disabled"
              title="Previous"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              href="#"
              className="next"
              title="Next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HomeTop;
