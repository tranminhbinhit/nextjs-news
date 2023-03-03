import Head from "next/head";
import Layout from "../source/layouts/Layout";
import { useDispatch } from "react-redux";
import React from "react";
import {
  getNewsDetail,
  getNewsList,
  getNewsListRelate,
  getNewsTop,
} from "../source/service/newsService";
import {
  getImage,
  getImageCdn,
  getLinkUrl,
  isEmpty,
  isEmptyObject,
} from "../source/utils/utils";
import FutureTitle from "../source/components/BoxSite/FutureTitle";
import Link from "next/link";
import SocialShare from "../source/components/BoxSite/SocialShare";
import NewsRelate from "../source/components/News/NewsRelate";
import LeftBarNews from "../source/components/News/LeftBarNews";
import { EnumRoutingPage } from "../source/constants/enum";
import NewsItemSmall from "../source/components/News/NewsItemSmall";
import NewsItem from "../source/components/News/NewsItem";
import AdsRow728 from "../source/components/Ads/AdsRow728";
import AdsBox345 from "../source/components/Ads/AdsBox345";

export async function getServerSideProps(context) {
  const { query, res } = context;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const urlRewriteName = query.urlRewriteName;

  const newsDetail = await getNewsDetail({
    PageTypeId: 2,
    NameRewrite: urlRewriteName,
  });

  const listNewsRelate = await getNewsTop({
    NotNameRewrite: urlRewriteName,
    PageTypeId: 2,
    TopNumber: 10,
    PageNameRewrite: newsDetail ? newsDetail.PageNameRewrite || '' : ''
  });

  // let listProduct = [];
  // if (newsDetail.CategoryProductId > 0) {
  //   listProduct = await getProductByCategory({
  //     id: newsDetail.CategoryProductId,
  //     p: 1,
  //     ps: 10,
  //   });
  // }

  return {
    props: {
      newsDetail,
      listNewsRelate,
      // listProduct,
    },
  };
}

const NewsDetail = (props) => {
  const { newsDetail, listNewsRelate, listProduct, config } = props;
  const {
    SeoData,
    ValueData,
    HtmlContent,
    NameRewrite: NewsUrl,
    CreatedDate
  } = newsDetail || {};
  const {
    SeoAttrImage: NewsImage,
    SeoAttrContentDescription: NewsDescription,
    SeoAttrContentKeyword: AdsTitle,
  } = SeoData || {};
  const {
    TextTitle: NewsName,
  } = ValueData || {};
  // const roots = [
  //   {
  //     Url: getLinkUrl(EnumRoutingPage.CATEGORY_NEWS.id, NewsCategoryUrl),
  //     Name: NewsCategoryName,
  //   },
  //   {
  //     Url: "",
  //     Name: NewsName,
  //   },
  // ];

  const newsImage = getImage(NewsImage);

  return (
    <Layout
      config={config}
      title={NewsName}
      description={NewsDescription}
      image={newsImage}
    >
      {/* <FutureTitle roots={roots} /> */}
      <div className="jeg_content">
        <div className="container">
          <AdsRow728 page="detail" position="left_1" />
          <div className="row">
            <div className="jeg_main_content col-md-8">
              <div className="jeg_inner_content">
                <div className="jeg_breadcrumbs jeg_breadcrumb_container">
                  <div id="breadcrumbs"><span className="">
                    <a href="https://ngoisaoexpress.net/">Trang chủ</a>
                  </span><i className="fa fa-angle-right"></i><span className="breadcrumb_last_link">
                      <a href="https://ngoisaoexpress.net/category/lam-dep/">Làm đẹp</a>
                    </span>
                  </div>
                </div>
                <div className="entry-header">
                  <h1 className="jeg_post_title">{NewsName}</h1>
                  <div className="jeg_meta_container">
                    <div className="jeg_post_meta jeg_post_meta_1">
                      <div className="meta_left">
                        <div className="jeg_meta_date">
                          <a href="https://ngoisaoexpress.net/chuyen-gia-kieu-nguyen-chinh-phuc-khach-hang-voi-su-tan-tam-cong-hien/">2 tuần ago</a>
                        </div>
                      </div>
                      <div className="meta_right"></div>
                    </div>
                  </div>
                </div>
                <div className="jeg_featured featured_image">
                  <a>
                    <img width="750" height="375" src={newsImage} className="attachment-jnews-750x375 size-jnews-750x375 wp-post-image lazyautosizes lazyloaded" alt="Nicola Peltz đang đưa câu chuyện ‘chiếc váy cưới’ đi quá xa khiến Victoria bối rối" decoding="async" sizes="750px" data-src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/9-ngoisaovn-w1200-h720-1-750x375.jpg" />
                  </a>
                </div>
                <AdsRow728 page="detail" position="left_2" />
                <div className="entry-content no-share">
                  <div dangerouslySetInnerHTML={{
                    __html: HtmlContent,
                  }} />
                </div>
                <div className="jeg_ad jeg_article jnews_content_bottom_ads">
                  <div className="ads-wrapper"><a href="" rel="noopener" className="adlink ads_image">
                    <img src="http://ngoisaoexpress.net/wp-content/uploads/2022/12/HSBC_728x90px_3.jpg" className="lazyload" data-src="http://ngoisaoexpress.net/wp-content/uploads/2022/12/HSBC_728x90px_3.jpg" alt="" data-pin-no-hover="true" />
                  </a>
                  </div>
                </div>
                <div className="jnews_prev_next_container hidden">
                  <div className="jeg_prevnext_post">
                    <a href="" className="post prev-post">
                      <span className="caption">Previous Post</span>
                      <h3 className="post-title">Lễ chuyển giao</h3>
                    </a>
                    <a href="" className="post next-post">
                      <span className="caption">Next Post</span>
                      <h3 className="post-title">Tại sao ngực</h3>
                    </a>
                  </div>
                </div>
                <div className="jnews_author_box_container"></div>
                <div className="jnews_related_post_container">
                  <div className="jeg_postblock_3 jeg_postblock jeg_module_hook jeg_pagination_loadmore jeg_col_2o3 jnews_module_6016_0_63fcbe6e7bc05" data-unique="jnews_module_6016_0_63fcbe6e7bc05">
                    <div className="jeg_block_heading jeg_block_heading_7 jeg_subcat_right">
                      <h3 className="jeg_block_title"><span>Bài viết<strong> Liên quan</strong></span></h3>
                    </div>
                    <div className="jeg_posts jeg_block_container">
                      <div className="jeg_posts jeg_load_more_flag">
                        {!isEmptyObject(listNewsRelate) ? listNewsRelate.map(newsItem => <NewsItem key={`key-${newsItem.CrawlerDataId}`} newsItem={newsItem} />) : ''}
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
                      <div className="jeg_block_loadmore">
                        <a href="https://ngoisaoexpress.net/chuyen-gia-kieu-nguyen-chinh-phuc-khach-hang-voi-su-tan-tam-cong-hien/#" className="" data-load="Tải thêm" data-loading="Đang tải..."> Tải thêm</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="jnews_popup_post_container"></div>
                <div className="jnews_comment_container"></div>
              </div>
            </div>
            <div className="jeg_sidebar  jeg_sticky_sidebar col-md-4">
              <div className="jegStickyHolder">
                <div className="theiaStickySidebar">
                  <AdsBox345 page="detail" position="right_1" />
                  <div className="widget widget_jnews_module_block_21" id="jnews_module_block_21-2">
                    <div className="jeg_postblock_21 jeg_postblock jeg_module_hook jeg_pagination_disable jeg_col_1o3 jnews_module_6016_2_63fcbe6e91d0d  jeg_pb_boxed normal">
                      <div className="jeg_block_container">
                        <div className="jeg_posts jeg_load_more_flag">
                          {!isEmptyObject(listNewsRelate) ? listNewsRelate.map(newsItem => <NewsItemSmall key={`key-${newsItem.CrawlerDataId}`} newsItem={newsItem} />) : ''}
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
    </Layout>
  );
};

export default NewsDetail;
