import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../source/layouts/Layout";

import React from "react";
import { getNewsHome } from "../source/service/newsService";
import { COMMON_CONST } from "../source/constants/constants";
import { isEmptyObject } from "../source/utils/utils";
import EmptyData from "../source/components/BoxSite/EmptyData";
import NewsItemBox from "../source/components/News/NewsItemBox";
import NewsItemLarge from "../source/components/News/NewsItemLarge";
import NewsItemSmall from "../source/components/News/NewsItemSmall";
import NewsItem from "../source/components/News/NewsItem";


export async function getServerSideProps(context) {
  const { res } = context
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  // Lấy danh sách sản phẩm hiển thị
  const listNews = await getNewsHome({
    PageTypeId: 2,
    TopNumber: 14
  });

  return {
    props: {
      listNews
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
  const { language } = setting;
  // useEffect(() => {
  //   dispatch(changeLanguage('bbb'));
  // }, [dispatch]);

  return (
    <Layout config={config}>
      <div className="jeg_content">
        <div className="jeg_vc_content">
          <div className="row vc_row wpb_row vc_row-fluid">
            <div className="jeg-vc-wrapper">
              <div className="wpb_column jeg_column vc_column_container vc_col-sm-12 vc_hidden-sm vc_hidden-xs jeg_main_content">
                <div className="jeg_wrapper wpb_wrapper">
                  <div className="jeg_breakingnews clearfix jnews_module_1956_0_63f5e702411a9">
                    <div className="jeg_breakingnews_title"><i className="fab fa-accessible-icon">&nbsp;</i> <span>HOT</span></div>
                    <div className="jeg_news_ticker" data-autoplay="true" data-delay="3500" data-animation="horizontal">
                      <div className="jeg_news_ticker_items">
                        <div className="jeg_news_ticker_item jeg_news_ticker_animated format-standard">
                          <span>
                            <a href="https://ngoisaoexpress.net/tai-sao-khong-nen-vat-chanh-vao-do-an-van-con-nong-chuyen-gia-am-thuc-nguoi-an-do-dua-ra-loi-giai-thich/">Tại sao không nên vắt chanh vào đồ ăn vẫn còn nóng? Chuyên gia ẩm thực người Ấn Độ đưa ra lời giải thích</a>
                          </span>
                          <span className="post-date">
                            Tháng Hai 22, 2023
                          </span>
                        </div>
                        <div className="jeg_news_ticker_item jeg_news_ticker_animated format-standard">
                          <span>
                            <a href="https://ngoisaoexpress.net/bang-so-sanh-can-nang-chuan-cua-nu-153-175cm-ban-da-vuot-chuan-chua-dung-hieu-nham/">Bảng so sánh cân nặng chuẩn của nữ 153-175cm, bạn đã ‘vượt chuẩn’ chưa? Đừng hiểu nhầm!</a>
                          </span>
                          <span className="post-date">
                            Tháng Hai 22, 2023
                          </span>
                        </div>
                        <div className="jeg_news_ticker_item jeg_news_ticker_animated format-standard fadeOutRight">
                          <span>
                            <a href="https://ngoisaoexpress.net/chong-cu-le-quyen-duoc-tang-xe-dap-dien-hon-60-trieu/">Chồng cũ Lệ Quyên được tặng xe đạp điện hơn 60 triệu</a>
                          </span>
                          <span className="post-date">
                            Tháng Hai 22, 2023
                          </span>
                        </div>
                        <div className="jeg_news_ticker_item jeg_news_ticker_animated format-standard jeg_news_ticker_active fadeInLeft">
                          <span>
                            <a href="https://ngoisaoexpress.net/hoc-bi-quyet-deo-vong-co-nguoc-giup-sao-hollywood-chiem-tron-spotlight-tren-tham-do/">Học bí quyết đeo vòng cổ ngược giúp sao Hollywood chiếm trọn spotlight trên thảm đỏ</a>
                          </span>
                          <span className="post-date">
                            Tháng Hai 21, 2023
                          </span>
                        </div>
                        <div className="jeg_news_ticker_item jeg_news_ticker_animated format-standard">
                          <span>
                            <a href="https://ngoisaoexpress.net/vuot-mat-tran-thanh-nhan-giai-lo-tai-vang-tai-ca-si-mat-na-nhung-cuoi-cung-toc-tien-lai-lam-gay-cup/">‘Vượt mặt’ Trấn Thành nhận giải Lỗ Tai Vàng tại ‘Ca sĩ mặt nạ’ nhưng cuối cùng Tóc Tiên lại làm gãy cúp</a>
                          </span>
                          <span className="post-date">
                            Tháng Hai 21, 2023
                          </span>
                        </div>
                      </div>
                      <div className="jeg_news_ticker_control">
                        <div className="jeg_news_ticker_next jeg_news_ticker_arrow"><span>Next</span></div>
                        <div className="jeg_news_ticker_prev jeg_news_ticker_arrow"><span>Prev</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="jeg_heroblock jeg_heroblock_9 jeg_col_3o3 jeg_hero_style_4 jnews_module_1956_1_63f5e7024359e">
                    <div className="jeg_hero_wrapper">
                      <div className="jeg_heroblock_wrapper">
                        {!isEmptyObject(listNewsStar) ? listNewsStar.map(newsItem => <NewsItemLarge key={`key-${newsItem.CrawlerDataId}`} newsItem={newsItem} />) : ''}
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
                  <div className="vc_empty_space"><span className="vc_empty_space_inner"></span></div>
                  <div className="jeg_postblock_22 jeg_postblock jeg_module_hook jeg_pagination_nextprev jeg_col_2o3 jnews_module_1956_2_63f5e702458d0" data-unique="jnews_module_1956_2_63f5e702458d0">
                    <div className="jeg_block_heading jeg_block_heading_7 jeg_subcat_right">
                      <h3 className="jeg_block_title"><span>Chọn lọc</span></h3>
                    </div>
                    <div className="jeg_block_container">
                      <div className="jeg_posts_wrap">
                        <div className="jeg_posts jeg_load_more_flag">
                          {!isEmptyObject(listNewsBotton) ? listNewsBotton.map(newsItem => <NewsItemBox key={`key-${newsItem.CrawlerDataId}`} newsItem={newsItem} />) : ''}
                          <EmptyData listData={listNewsBotton} />
                        </div>
                      </div>
                      <div className="module-overlay">
                        <div className="preloader_type preloader_dot">
                          <div className="module-preloader jeg_preloader dot">
                            <span></span><span></span><span></span>
                          </div>
                          <div className="module-preloader jeg_preloader circle">
                            <div className="jnews_preloader_circle_outer">
                              <div className="jnews_preloader_circle_inner"></div>
                            </div>
                          </div>
                          <div className="module-preloader jeg_preloader square">
                            <div className="jeg_square">
                              <div className="jeg_square_inner"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="jeg_block_navigation">
                      <div className="navigation_overlay">
                        <div className="module-preloader jeg_preloader"><span></span><span></span><span></span></div>
                      </div>
                      <div className="jeg_block_nav">
                        <a href="https://ngoisaoexpress.net/#" className="prev disabled" title="Previous"><i className="fa fa-angle-left"></i></a>
                        <a href="https://ngoisaoexpress.net/#" className="next" title="Next"><i className="fa fa-angle-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column jeg_column vc_column_container vc_col-sm-4 jeg_sticky_sidebar jeg_sidebar">
                <div className="jegStickyHolder">
                  <div className="theiaStickySidebar" >
                    <div className="jeg_wrapper wpb_wrapper">
                      <div className="jeg_postblock_21 jeg_postblock jeg_module_hook jeg_pagination_disable jeg_col_1o3 jnews_module_1956_3_63f5e70249dd8" data-unique="jnews_module_1956_3_63f5e70249dd8">
                        <div className="jeg_block_container">
                          <div className="jeg_posts jeg_load_more_flag">
                            {!isEmptyObject(listNewsBotton) ? listNewsBotton.map(newsItem => <NewsItemSmall key={`key-${newsItem.CrawlerDataId}`} newsItem={newsItem} />) : ''}
                          </div>
                          <div className="module-overlay">
                            <div className="preloader_type preloader_dot">
                              <div className="module-preloader jeg_preloader dot">
                                <span></span><span></span><span></span>
                              </div>
                              <div className="module-preloader jeg_preloader circle">
                                <div className="jnews_preloader_circle_outer">
                                  <div className="jnews_preloader_circle_inner"></div>
                                </div>
                              </div>
                              <div className="module-preloader jeg_preloader square">
                                <div className="jeg_square">
                                  <div className="jeg_square_inner"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="jeg_block_navigation">
                          <div className="navigation_overlay">
                            <div className="module-preloader jeg_preloader"><span></span><span></span><span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-vc-full-width="true" data-vc-full-width-init="true" className="row vc_row wpb_row vc_row-fluid vc_custom_1517993998548 vc_row-has-fill">
            <div className="jeg-vc-wrapper">
              <div className="wpb_column jeg_column vc_column_container vc_col-sm-12 jeg_main_content">
                <div className="jeg_wrapper wpb_wrapper">
                  <div className="jeg_ad jeg_ad_module jnews_module_1956_4_63f5e702500d6  vc_custom_1672642380347">
                    <div className="ads-wrapper"><a href="https://toyotamydinh.info/tin-tuc/cung-sang-tao-nhan-qua-vui/144-376-1090.aspx" target="_self" rel="noopener" className="adlink ads_image">
                      <img src="https://ngoisaoexpress.net/wp-content/uploads/2022/08/Toyota_970x90px_2.jpg.webp" className="lazyload" data-src="https://ngoisaoexpress.net/wp-content/uploads/2022/08/Toyota_970x90px_2.jpg.webp" alt="" data-pin-no-hover="true" title="Ngôi Sao Express 13" />
                    </a>
                    </div>
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
                <div className="jeg_postblock_3 jeg_postblock jeg_module_hook jeg_pagination_nav_1 jeg_col_2o3 jnews_module_1956_5_63f5e702525ab" data-unique="jnews_module_1956_5_63f5e702525ab">
                  <div className="jeg_block_heading jeg_block_heading_7 jeg_subcat_right">
                    <h3 className="jeg_block_title"><span>Tin tức</span></h3>
                  </div>
                  <div className="jeg_posts jeg_block_container">
                    <div className="jeg_posts jeg_load_more_flag">
                      {!isEmptyObject(listNewsBotton) ? listNewsBotton.map(newsItem => <NewsItem key={`key-${newsItem.CrawlerDataId}`} newsItem={newsItem} />) : ''}
                    </div>
                    <div className="module-overlay">
                      <div className="preloader_type preloader_dot">
                        <div className="module-preloader jeg_preloader dot">
                          <span></span><span></span><span></span>
                        </div>
                        <div className="module-preloader jeg_preloader circle">
                          <div className="jnews_preloader_circle_outer">
                            <div className="jnews_preloader_circle_inner"></div>
                          </div>
                        </div>
                        <div className="module-preloader jeg_preloader square">
                          <div className="jeg_square">
                            <div className="jeg_square_inner"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jeg_block_navigation">
                    <div className="navigation_overlay">
                      <div className="module-preloader jeg_preloader"><span></span><span></span><span></span></div>
                    </div>
                    <div className="jeg_navigation jeg_pagination jeg_pagenav_1 jeg_alignleft no_navtext no_pageinfo">
                      <span className="page_info">Page 1 of 283</span>
                      <span className="page_number active">1</span>
                      <a className="page_number" href="https://ngoisaoexpress.net/page/2/">2</a>
                      <span className="page_number dots">…</span>
                      <a className="page_number" href="https://ngoisaoexpress.net/page/283/">283</a>
                      <a className="page_nav next" href="https://ngoisaoexpress.net/page/2/"><span className="navtext">Next</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jeg_sidebar left jeg_sticky_sidebar col-sm-4">
                <div className="jegStickyHolder">
                  <div className="theiaStickySidebar">
                    <div className="widget widget_jnews_module_element_ads" id="jnews_module_element_ads-4">
                      <div className="jeg_ad jeg_ad_module jnews_module_1956_6_63f5e70255e05">
                        <div className="ads-wrapper"><a href="" target="_blank" rel="nofollow noopener" className="adlink ads_image">
                          <img src="https://ngoisaoexpress.net/wp-content/uploads/2022/08/Lipton_345x345px.jpg.webp" className="lazyload" />
                        </a>
                        </div>
                      </div>
                    </div>
                    <div className="widget widget_jnews_module_block_21" id="jnews_module_block_21-3">
                      <div className="jeg_postblock_21 jeg_postblock jeg_module_hook jeg_pagination_disable jeg_col_1o3 jnews_module_1956_7_63f5e70256072  normal" data-unique="jnews_module_1956_7_63f5e70256072">
                        <div className="jeg_block_heading jeg_block_heading_6 jeg_subcat_right">
                          <h3 className="jeg_block_title"><span>Tiêu điểm</span></h3>
                        </div>
                        <div className="jeg_block_container">
                          <div className="jeg_posts jeg_load_more_flag">

                            {!isEmptyObject(listNewsBotton) ? listNewsBotton.map(newsItem => <NewsItemSmall key={`key-${newsItem.CrawlerDataId}`} newsItem={newsItem} />) : ''}
                          </div>
                          <div className="module-overlay">
                            <div className="preloader_type preloader_dot">
                              <div className="module-preloader jeg_preloader dot">
                                <span></span><span></span><span></span>
                              </div>
                              <div className="module-preloader jeg_preloader circle">
                                <div className="jnews_preloader_circle_outer">
                                  <div className="jnews_preloader_circle_inner"></div>
                                </div>
                              </div>
                              <div className="module-preloader jeg_preloader square">
                                <div className="jeg_square">
                                  <div className="jeg_square_inner"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="jeg_block_navigation">
                          <div className="navigation_overlay">
                            <div className="module-preloader jeg_preloader"><span></span><span></span><span></span></div>
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
      </div>
    </Layout>
  );
};

export default Home;
