import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../source/layouts/Layout";

import React from "react";
import { getNewsHome } from "../source/service/newsService";
import { isEmptyObject } from "../source/utils/utils";
import EmptyData from "../source/components/BoxSite/EmptyData";
import NewsItemBox from "../source/components/News/NewsItemBox";
import NewsItemLarge from "../source/components/News/NewsItemLarge";
import NewsItemSmall from "../source/components/News/NewsItemSmall";
import NewsItem from "../source/components/News/NewsItem";
import AdsBox345 from "../source/components/Ads/AdsBox345";
import AdsRow970 from "../source/components/Ads/AdsRow970";
import LoadingOverlayContent from "../source/components/Loading/LoadingOverlayContent";

export async function getServerSideProps(context) {
  const { res } = context;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  // Lấy danh sách sản phẩm hiển thị
  const listNews = await getNewsHome({
    PageTypeId: 2,
    TopNumber: 14,
  });

  return {
    props: {
      listNews,
    },
  };
}

const Home = (props) => {
  const { config, listNews } = props;
  const listNewsStar = listNews.slice(0, 2);
  const listNewsBotton = listNews.slice(-12);

  //Redux
  const dispatch = useDispatch();
  const setting = useSelector((state) => state.setting);

  return (
    <Layout config={config}>
      <div className="jeg_content">
        <div className="jeg_vc_content">
          <div className="row vc_row wpb_row vc_row-fluid">
            <div className="jeg-vc-wrapper">
              <div className="wpb_column jeg_column vc_column_container vc_col-sm-12 vc_hidden-sm vc_hidden-xs jeg_main_content">
                <div className="jeg_wrapper wpb_wrapper">
                  {/* <HotNews /> */}
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
              </div>
            </div>
          </div>
          <div className="row vc_row wpb_row vc_row-fluid">
            <div className="jeg-vc-wrapper">
              <div className="wpb_column jeg_column vc_column_container vc_col-sm-8 jeg_main_content">
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
                          {!isEmptyObject(listNewsBotton)
                            ? listNewsBotton.map((newsItem) => (
                              <NewsItemBox
                                key={`key-${newsItem.CrawlerDataId}`}
                                newsItem={newsItem}
                              />
                            ))
                            : ""}
                          <EmptyData listData={listNewsBotton} />
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
              </div>
              <div className="wpb_column jeg_column vc_column_container vc_col-sm-4 jeg_sticky_sidebar jeg_sidebar">
                <div className="jegStickyHolder">
                  <div className="theiaStickySidebar">
                    <div className="jeg_wrapper wpb_wrapper">
                      <div
                        className="jeg_postblock_21 jeg_postblock jeg_module_hook jeg_pagination_disable jeg_col_1o3 jnews_module_1956_3_63f5e70249dd8"
                        data-unique="jnews_module_1956_3_63f5e70249dd8"
                      >
                        <div className="jeg_block_container">
                          <div className="jeg_posts jeg_load_more_flag">
                            {!isEmptyObject(listNewsBotton)
                              ? listNewsBotton.map((newsItem) => (
                                <NewsItemSmall
                                  key={`key-${newsItem.CrawlerDataId}`}
                                  newsItem={newsItem}
                                />
                              ))
                              : ""}
                          </div>

                          <LoadingOverlayContent />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-vc-full-width="true"
            data-vc-full-width-init="true"
            className="row vc_row wpb_row vc_row-fluid vc_custom_1517993998548 vc_row-has-fill"
          >
            <div className="jeg-vc-wrapper">
              <div className="wpb_column jeg_column vc_column_container vc_col-sm-12 jeg_main_content">
                <div className="jeg_wrapper wpb_wrapper">
                  <div className="jeg_ad jeg_ad_module jnews_module_1956_4_63f5e702500d6  vc_custom_1672642380347">
                    <AdsRow970 page="home" position="center_1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vc_row-full-width vc_clearfix"></div>
        </div>
        <div className="container">
          <div className="jeg_latestpost">
            <div className="row">
              <div className="jeg_main_content col-sm-8">
                <div
                  className="jeg_postblock_3 jeg_postblock jeg_module_hook jeg_pagination_nav_1 jeg_col_2o3 jnews_module_1956_5_63f5e702525ab"
                  data-unique="jnews_module_1956_5_63f5e702525ab"
                >
                  <div className="jeg_block_heading jeg_block_heading_7 jeg_subcat_right">
                    <h3 className="jeg_block_title">
                      <span>Tin tức</span>
                    </h3>
                  </div>
                  <div className="jeg_posts jeg_block_container">
                    <div className="jeg_posts jeg_load_more_flag">
                      {!isEmptyObject(listNewsBotton)
                        ? listNewsBotton.map((newsItem) => (
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
              </div>
              <div className="jeg_sidebar left jeg_sticky_sidebar col-sm-4">
                <div className="jegStickyHolder">
                  <div className="theiaStickySidebar">
                    <AdsBox345 page="home" position="right_1" />
                    <div
                      className="widget widget_jnews_module_block_21"
                      id="jnews_module_block_21-3"
                    >
                      <div
                        className="jeg_postblock_21 jeg_postblock jeg_module_hook jeg_pagination_disable jeg_col_1o3 jnews_module_1956_7_63f5e70256072  normal"
                        data-unique="jnews_module_1956_7_63f5e70256072"
                      >
                        <div className="jeg_block_heading jeg_block_heading_6 jeg_subcat_right">
                          <h3 className="jeg_block_title">
                            <span>Tiêu điểm</span>
                          </h3>
                        </div>
                        <div className="jeg_block_container">
                          <div className="jeg_posts jeg_load_more_flag">
                            {!isEmptyObject(listNewsBotton)
                              ? listNewsBotton.map((newsItem) => (
                                <NewsItemSmall
                                  key={`key-${newsItem.CrawlerDataId}`}
                                  newsItem={newsItem}
                                />
                              ))
                              : ""}
                          </div>

                          <LoadingOverlayContent />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
