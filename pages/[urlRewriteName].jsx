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
  formatDateTimeAgo,
  getImage,
  getImageCdn,
  getLinkUrl,
  isEmpty,
  isEmptyObject,
} from "../source/utils/utils";
import FutureTitle from "../source/components/BoxSite/FutureTitle";
import Link from "next/link";
import SocialShare from "../source/components/BoxSite/SocialShare";
import { EnumRoutingPage } from "../source/constants/enum";
import NewsItemSmall from "../source/components/News/NewsItemSmall";
import NewsItem from "../source/components/News/NewsItem";
import AdsRow728 from "../source/components/Ads/AdsRow728";
import AdsBox345 from "../source/components/Ads/AdsBox345";
import LoadingOverlayContent from "../source/components/Loading/LoadingOverlayContent";
import LeftBarNews from "../source/components/News/LeftBarNews";

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
    CreatedDate,
    PageNameRewrite,
    PageName,
  } = newsDetail || {};
  const {
    SeoAttrImage: NewsImage,
    SeoAttrContentDescription: NewsDescription,
    SeoAttrContentKeyword: AdsTitle,
  } = SeoData || {};
  const {
    TextTitle: NewsName,
  } = ValueData || {};

  const roots = [
    {
      Url: getLinkUrl(EnumRoutingPage.CATEGORY_NEWS.id, PageNameRewrite),
      Name: PageName,
    },
    {
      Url: "",
      Name: NewsName,
    },
  ];

  const newsImage = getImage(NewsImage);

  return (
    <Layout
      config={config}
      title={NewsName}
      description={NewsDescription}
      image={newsImage}
    >
      <div className="jeg_content">
        <div className="container">
          <AdsRow728 page="detail" position="left_1" />
          <div className="row">
            <div className="jeg_main_content col-md-8">
              <div className="jeg_inner_content">

                <FutureTitle roots={roots} />
                <div className="entry-header">
                  <h1 className="jeg_post_title">{NewsName}</h1>
                  <div className="jeg_meta_container">
                    <div className="jeg_post_meta jeg_post_meta_1">
                      <div className="meta_left">
                        <div className="jeg_meta_date">
                          <Link href={getLinkUrl(EnumRoutingPage.NEWS.id, NewsUrl)}>
                            <a>
                              {formatDateTimeAgo(CreatedDate)}
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="meta_right"></div>
                    </div>
                  </div>
                </div>
                <div className="jeg_featured featured_image">
                  <a>
                    <img width="750" height="375"
                      src={newsImage}
                      className="attachment-jnews-750x375 size-jnews-750x375 wp-post-image lazyautosizes lazyloaded"
                      alt={NewsName}
                      decoding="async" sizes="750px" />
                  </a>
                </div>
                <AdsRow728 page="detail" position="left_2" />
                <div className="entry-content no-share">
                  <div dangerouslySetInnerHTML={{
                    __html: HtmlContent,
                  }} />
                </div>
                <AdsRow728 page="detail" position="left_3" />
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
                      <LoadingOverlayContent />
                    </div>
                    {/* <div className="jeg_block_navigation">
                      <div className="navigation_overlay">
                        <div className="module-preloader jeg_preloader"><span></span><span></span><span></span></div>
                      </div>
                      <div className="jeg_block_loadmore">
                        <a href="https://ngoisg-voi-su-tan-tam-cong-hien/#" className="" data-load="Tải thêm" data-loading="Đang tải..."> Tải thêm</a>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="jnews_popup_post_container"></div>
                <div className="jnews_comment_container"></div>
              </div>
            </div>
            <div className="jeg_sidebar  jeg_sticky_sidebar col-md-4">
              <LeftBarNews />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsDetail;
