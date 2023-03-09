/* eslint-disable */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { EnumViewPosition } from "../../constants/enum";
import { getNewsTop } from "../../service/newsService";
import { getLinkUrl, isEmpty, isEmptyObject } from "../../utils/utils";
import AdsBox345 from "../Ads/AdsBox345";
import EmptyData from "../BoxSite/EmptyData";
import LoadingOverlayContent from "../Loading/LoadingOverlayContent";
import NewsItem from "../News/NewsItem";
import NewsItemBox from "../News/NewsItemBox";

const NewsButtom = (props) => {
  const { ads, hasBorder = true, title = '' } = props || {};
  const classBorder = hasBorder ? 'jeg_pb_boxed' : '';
  const { page, position } = ads = {};
  const [listData, setListData] = useState([]);

  useEffect(() => {
    //await initData();
    const initData = async () => {
      const listData = await getNewsTop({
        PageTypeId: 2,
        TopNumber: 6,
        ViewPosition: EnumViewPosition.HomeLeft2.id
      });
      setListData(listData);
    }
    initData();
  }, []);

  return (
    <div
      className="jeg_postblock_3 jeg_postblock jeg_module_hook jeg_pagination_nav_1 jeg_col_2o3 jnews_module_1956_5_63f5e702525ab"
    >
      <div className="jeg_block_heading jeg_block_heading_7 jeg_subcat_right">
        <h3 className="jeg_block_title">
          <span>Tin tức</span>
        </h3>
      </div>
      <div className="jeg_posts jeg_block_container">
        <div className="jeg_posts jeg_load_more_flag">
          {!isEmptyObject(listData)
            ? listData.map((newsItem) => (
              <NewsItem
                key={`key-${newsItem.CrawlerDataId}`}
                newsItem={newsItem}
              />
            ))
            : ""}
        </div>
        <LoadingOverlayContent />
      </div>
    </div>
  );
}

export default NewsButtom;
