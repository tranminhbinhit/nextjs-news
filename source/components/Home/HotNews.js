/* eslint-disable*/
import Link from 'next/link';
import React, { Component, useEffect, useState } from 'react';
import { EnumRoutingPage, EnumViewPosition } from '../../constants/enum';
import { getNewsTop } from '../../service/newsService';
import { formatDateTimeView, getLinkUrl, isEmptyObject } from '../../utils/utils';
import NewsItemLarge from '../News/NewsItemLarge';

const HotNews = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    //await initData();
    const initData = async () => {
      const listData = await getNewsTop({
        PageTypeId: 2,
        TopNumber: 10,
        ViewPosition: EnumViewPosition.HomeTop.id
      });
      setListData(listData);
    }
    initData();
  }, []);

  const listNewsStar = listData.slice(0, 2);
  const listNewsBotton = listData.slice(2);

  return (
    <React.Fragment>
      <div className="jeg_wrapper wpb_wrapper">
        {/* <div className="jeg_breakingnews clearfix jnews_module_1956_0_63f5e702411a9">
          <div className="jeg_breakingnews_title">
            <i className="fab fa-accessible-icon">&nbsp;</i>{" "}
            <span>HOT</span>
          </div>
          <div
            className="jeg_news_ticker"
            data-autoplay="true"
            data-delay="3500"
            data-animation="horizontal"
          >
            <div className="jeg_news_ticker_items">
              {!isEmptyObject(listNewsBotton) ? listNewsBotton.map(newsItem => {
                const { ValueData, SeoData, CreatedDate } =
                  newsItem || {};
                const { SeoAttrImage: NewsImage, SeoAttrContentDescription: NewsDescription } =
                  SeoData || {};
                const { TextTitle: NewsName, NameRewrite: NewsUrl } =
                  ValueData || {};
                const linkNewsDetail = getLinkUrl(EnumRoutingPage.NEWS.id, NewsUrl);
                return (
                  <div className="jeg_news_ticker_item jeg_news_ticker_animated format-standard" key={`hot-${newsItem.CrawlerDataId}`}>
                    <span>
                      <Link href={linkNewsDetail}>
                        <a>
                          {NewsName}
                        </a>
                      </Link>
                    </span>
                    <span className="post-date">{formatDateTimeView(CreatedDate)}</span>
                  </div>
                );
              }) : ''}
            </div>
            <div className="jeg_news_ticker_control">
              <div className="jeg_news_ticker_next jeg_news_ticker_arrow">
                <span>Next</span>
              </div>
              <div className="jeg_news_ticker_prev jeg_news_ticker_arrow">
                <span>Prev</span>
              </div>
            </div>
          </div>
        </div> */}
        <div className="jeg_heroblock jeg_heroblock_9 jeg_col_3o3 jeg_hero_style_4 jnews_module_1956_1_63f5e7024359e">
          <div className="jeg_hero_wrapper">
            <div className="jeg_heroblock_wrapper">
              {!isEmptyObject(listNewsStar)
                ? listNewsStar.map((newsItem) => (
                  <NewsItemLarge
                    key={`key-${newsItem.CrawlerDataId}`}
                    newsItem={newsItem}
                  />
                ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HotNews;
