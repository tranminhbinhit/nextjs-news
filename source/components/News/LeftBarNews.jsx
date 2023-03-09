/* eslint-disable */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getNewsTop } from "../../service/newsService";
import { getLinkUrl, isEmpty, isEmptyObject } from "../../utils/utils";
import AdsBox345 from "../Ads/AdsBox345";
import LoadingOverlayContent from "../Loading/LoadingOverlayContent";
import NewsItemSmall from "./NewsItemSmall";

const LeftBarNews = (props) => {
  const { ads, hasBorder = true, title = '' } = props || {};
  const classBorder = hasBorder ? 'jeg_pb_boxed' : '';
  const { page, position } = ads = {};
  const [listData, setListData] = useState([]);

  useEffect(() => {
    //await initData();
    const initData = async () => {
      const listData = await getNewsTop({
        PageTypeId: 2,
        TopNumber: 10,
      });
      setListData(listData);
    }
    initData();
  }, []);

  return (
    <div className="jegStickyHolder">
      <div className="theiaStickySidebar">
        <AdsBox345 page={page} position={position} />
        <div className="widget widget_jnews_module_block_21">
          <div className={`jeg_postblock_21 jeg_postblock jeg_module_hook jeg_pagination_disable jeg_col_1o3 ${classBorder}`}>
            {!isEmpty(title) ? (
              <div className="jeg_block_heading jeg_block_heading_6 jeg_subcat_right">
                <h3 className="jeg_block_title">
                  <span>{title}</span>
                </h3>
              </div>
            ) : ''}
            <div className="jeg_block_container">
              <div className="jeg_posts jeg_load_more_flag">
                {!isEmptyObject(listData) ? listData.map(newsItem => <NewsItemSmall key={`key-${newsItem.CrawlerDataId}`} newsItem={newsItem} />) : ''}
              </div>
              <LoadingOverlayContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBarNews;
