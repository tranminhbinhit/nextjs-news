import Head from "next/head";
import Layout from "../../source/layouts/Layout";
import { useDispatch } from "react-redux";
import React from "react";
import { getNewsList } from "../../source/service/newsService";
import FutureTitle from "../../source/components/BoxSite/FutureTitle";
import { getLinkUrl, isEmptyObject } from "../../source/utils/utils";
import LeftBarNews from "../../source/components/News/LeftBarNews";
import NewsItem from "../../source/components/News/NewsItem";
import NewsItemMore from "../../source/components/News/NewsItemMore";
import EmptyData from "../../source/components/BoxSite/EmptyData";
import { COMMON_CONST } from "../../source/constants/constants";
import { EnumRoutingPage } from "../../source/constants/enum";
import { useRouter } from "next/router";
import PaginatePage from "../../source/components/BoxSite/PaginatePage";
import NewsItemSmall from "../../source/components/News/NewsItemSmall";
import AdsRow728 from "../../source/components/Ads/AdsRow728";
import AdsBox345 from "../../source/components/Ads/AdsBox345";
import AdsRow970 from "../../source/components/Ads/AdsRow970";

export async function getServerSideProps(context) {
  const { query, res } = context;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const { urlRewriteName, p = 1 } = query;

  const listNews = await getNewsList({
    PageNameRewrite: urlRewriteName,
    PageTypeId: 2,
    PageSize: COMMON_CONST.PageSizeNews,
    PageNumber: p,
  });

  return {
    props: {
      listNews,
      urlRewriteName,
      pageNumber: p
    },
  };
}

const NewsCategory = (props) => {
  const { listNews, urlRewriteName, config, pageNumber } = props;

  //Phân trang
  const totalRows = !isEmptyObject(listNews) ? listNews[0].TotalRows : 0;
  const router = useRouter();
  const handlePageClick = (event) => {
    const urlCategoryNews = getLinkUrl(
      EnumRoutingPage.CATEGORY_NEWS.id,
      urlRewriteName
    );
    const link = `${urlCategoryNews}?p=${event.selected + 1}`;
    router.push(link);
  };

  return (
    <Layout config={config}>
      <div className="jeg_content">
        <div className="jnews_category_header_top"></div>
        <div className="jeg_section">
          <div className="container">
            <div className="jeg_cat_content row">
              <div className="jeg_main_content jeg_column col-sm-8">
                <div className="jeg_inner_content">
                  <div className="jnews_category_header_bottom">
                    <div className="jeg_cat_header jeg_cat_header_1">
                      <div className="jeg_breadcrumbs jeg_breadcrumb_category jeg_breadcrumb_container">
                        <div id="breadcrumbs"><span className="">
                          <a href="https://ngoisaoexpress.net">Trang chủ</a>
                        </span><i className="fa fa-angle-right"></i><span className="">
                            <a href="">Danh mục</a>
                          </span><i className="fa fa-angle-right"></i><span className="breadcrumb_last_link">
                            <a href="https://ngoisaoexpress.net/category/chuyen-lang-sao/">Chuyện làng sao</a>
                          </span>
                        </div>
                      </div>
                      <h1 className="jeg_cat_title">Chuyện làng sao</h1>
                    </div>
                  </div>
                  <div className="jnews_category_content_wrapper">
                    <div className="jeg_postblock_5 jeg_postblock jeg_module_hook jeg_pagination_nav_1 jeg_col_2o3 jnews_module_6192_1_63fcb5130f09c" data-unique="jnews_module_6192_1_63fcb5130f09c">
                      <div className="jeg_block_container">
                        <div className="jeg_posts jeg_load_more_flag">
                          <AdsRow728  page="category" position="left_1"/>
                          {!isEmptyObject(listNews) ? listNews.map(newsItem => <NewsItemMore key={`key-${newsItem.CrawlerDataId}`} newsItem={newsItem} />) : ''}
                          <EmptyData listData={listNews} />
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
                        <div className="jeg_navigation jeg_pagination jeg_pagenav_1 jeg_aligncenter  no_pageinfo">
                          <span className="page_info">Page 1 of 27</span>
                          <span className="page_number active">1</span>
                          <a className="page_number" href="https://ngoisaoexpress.net/category/chuyen-lang-sao/page/2/">2</a>
                          <span className="page_number dots">…</span>
                          <a className="page_number" href="https://ngoisaoexpress.net/category/chuyen-lang-sao/page/27/">27</a>
                          <a className="page_nav next" href="https://ngoisaoexpress.net/category/chuyen-lang-sao/page/2/"><span className="navtext">Next</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jeg_sidebar left jeg_sticky_sidebar col-sm-4">
                <div className="jegStickyHolder">
                  <div className="theiaStickySidebar">
                    <AdsBox345 page="category" position="right_1"/>
                    <div className="widget widget_jnews_module_block_21" id="jnews_module_block_21-2">
                      <div className="jeg_postblock_21 jeg_postblock jeg_module_hook jeg_pagination_disable jeg_col_1o3 jnews_module_6192_3_63fcb513166d8  jeg_pb_boxed normal" data-unique="jnews_module_6192_3_63fcb513166d8">
                        <div className="jeg_block_container">
                          <div className="jeg_posts jeg_load_more_flag">
                            {!isEmptyObject(listNews) ? listNews.map(newsItem => <NewsItemSmall key={`key-${newsItem.CrawlerDataId}`} newsItem={newsItem} />) : ''}
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
      <div className="jeg_ad jnews_above_footer_ads">
        <AdsRow970 page="category" position="center_1"/>
      </div>
    </Layout >
  );
};

export default NewsCategory;
