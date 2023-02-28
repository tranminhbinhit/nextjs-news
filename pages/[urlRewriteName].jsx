import Head from "next/head";
import Layout from "../source/layouts/Layout";
import { useDispatch } from "react-redux";
import React from "react";
import {
  getNewsDetail,
  getNewsList,
  getNewsListRelate,
} from "../source/service/newsService";
import { getProductByCategory } from "../source/service/productService";
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

  // const listNewsRelate = await getNewsListRelate({
  //   id: newsDetail.NewsId,
  //   p: 1,
  //   ps: 4,
  // });

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
      // listNewsRelate,
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
          <div className="jeg_ad jeg_article jnews_article_top_ads">
            <div className="ads-wrapper"></div>
          </div>
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
                <div className="jeg_ad jeg_article jnews_content_top_ads">
                  <div className="ads-wrapper"></div>
                </div>
                <div className="entry-content no-share">
                  <div dangerouslySetInnerHTML={{
                    __html: HtmlContent,
                  }} />
                </div>
                <div className="jeg_ad jeg_article jnews_content_bottom_ads">
                  <div className="ads-wrapper"><a href="https://card.apply.hsbc.com.vn/quyen-loi-HSBC-Premier/vn" rel="noopener" className="adlink ads_image">
                    <img src="./detail_files/jeg-empty.png" className="lazyload" data-src="http://ngoisaoexpress.net/wp-content/uploads/2022/12/HSBC_728x90px_3.jpg" alt="" data-pin-no-hover="true" />
                  </a>
                  </div>
                </div>
                <div className="jnews_prev_next_container">
                  <div className="jeg_prevnext_post">
                    <a href="https://ngoisaoexpress.net/le-chuyen-giao-thiet-bi-fotona-starwalker-edena-dan-dau-cong-nghe-lam-dep-4-0/" className="post prev-post">
                      <span className="caption">Previous Post</span>
                      <h3 className="post-title">Lễ chuyển giao thiết bị Fotona StarWalker®: EDENA “dẫn đầu” công nghệ làm đẹp 4.0</h3>
                    </a>
                    <a href="https://ngoisaoexpress.net/tai-sao-nguc-phu-nu-co-kich-thuoc-khac-nhau-co-binh-thuong-khong/" className="post next-post">
                      <span className="caption">Next Post</span>
                      <h3 className="post-title">Tại sao ngực phụ nữ có kích thước khác nhau, có bình thường không?</h3>
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
                        <article className="jeg_post jeg_pl_md_2 format-standard">
                          <div className="jeg_thumb">
                            <a href="https://ngoisaoexpress.net/miss-korea-jeong-sohee-den-viet-nam/">
                              <div className="thumbnail-container size-715"><img width="350" height="250" src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/9-ngoisaovn-w1200-h720-1.jpg" className="attachment-jnews-350x250 size-jnews-350x250 lazyload wp-post-image" alt="Miss Korea Jeong Sohee đến Việt Nam" decoding="async" loading="lazy" sizes="(max-width: 350px) 100vw, 350px" data-src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/dien-dan-hop-tac-lam-dep-2211-ngoisaovn-w1200-h720-350x250.jpg" data-sizes="auto" data-expand="700" title="Miss Korea Jeong Sohee đến Việt Nam 4" /></div>
                            </a>
                          </div>
                          <div className="jeg_postblock_content">
                            <h3 className="jeg_post_title">
                              <a href="https://ngoisaoexpress.net/miss-korea-jeong-sohee-den-viet-nam/">Miss Korea Jeong Sohee đến Việt Nam</a>
                            </h3>
                            <div className="jeg_post_meta">
                              <div className="jeg_meta_date"><a href="https://ngoisaoexpress.net/miss-korea-jeong-sohee-den-viet-nam/"><i className="fa fa-clock-o"></i> Tháng Hai 27, 2023</a></div>
                            </div>
                            <div className="jeg_post_excerpt">
                              <p>Nhận lời mời của BTC Diễn đàn hợp tác kinh doanh ngành làm đẹp Việt Nam – Hàn Quốc, Miss...</p>
                            </div>
                          </div>
                        </article>
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
                  <div className="widget widget_jnews_module_element_ads" id="jnews_module_element_ads-3">
                    <div className="jeg_ad jeg_ad_module jnews_module_6016_1_63fcbe6e9178f">
                      <div className="ads-wrapper"><a href="https://tiki.vn/thuong-hieu/lipton.html?fbclid=IwAR3m7pCRgy4pvYs9Agc0W-ORasr2LWy_lNZgPmzyb15LEF8SOgaN31_QbTU" target="_blank" rel="nofollow noopener" className="adlink ads_image">
                        <img src="./detail_files/Lipton_345x345px.jpg.webp" className=" lazyloaded" data-src="https://ngoisaoexpress.net/wp-content/uploads/2022/08/Lipton_345x345px.jpg.webp" alt="" data-pin-no-hover="true" />
                      </a>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget_jnews_module_block_21" id="jnews_module_block_21-2">
                    <div className="jeg_postblock_21 jeg_postblock jeg_module_hook jeg_pagination_disable jeg_col_1o3 jnews_module_6016_2_63fcbe6e91d0d  jeg_pb_boxed normal">
                      <div className="jeg_block_container">
                        <div className="jeg_posts jeg_load_more_flag">
                          <article className="jeg_post jeg_pl_sm format-standard">
                            <div className="jeg_thumb">
                              <a href="https://ngoisaoexpress.net/dan-ong-trong-long-nho-nhung-phu-nu-se-co-4-bieu-hien-nay-gia-vo-khong-duoc/">
                                <div className="thumbnail-container animate-lazy  size-715"><img width="120" height="86" src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/9-ngoisaovn-w1200-h720-1.jpg" className="attachment-jnews-120x86 size-jnews-120x86 wp-post-image lazyautosizes lazyloaded" alt="Đàn ông trong lòng nhớ nhung phụ nữ sẽ có 4 biểu hiện này, giả vờ không được" decoding="async" loading="lazy" sizes="120px" /></div>
                              </a>
                            </div>
                            <div className="jeg_postblock_content">
                              <h3 className="jeg_post_title">
                                <a href="https://ngoisaoexpress.net/dan-ong-trong-long-nho-nhung-phu-nu-se-co-4-bieu-hien-nay-gia-vo-khong-duoc/">Đàn ông trong lòng nhớ nhung phụ nữ sẽ có 4 biểu hiện này, giả vờ không được</a>
                              </h3>
                              <div className="jeg_post_meta">
                                <div className="jeg_meta_date"><a href="https://ngoisaoexpress.net/dan-ong-trong-long-nho-nhung-phu-nu-se-co-4-bieu-hien-nay-gia-vo-khong-duoc/"><i className="fa fa-clock-o"></i> Tháng Hai 25, 2023</a></div>
                              </div>
                            </div>
                          </article>

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
          <div className="jeg_ad jeg_article jnews_article_bottom_ads">
            <div className="ads-wrapper"></div>
          </div>
        </div>
      </div>
      <div className="jeg_ad jnews_above_footer_ads">
        <div className="ads-wrapper"></div>
      </div>
    </Layout>
  );
};

export default NewsDetail;
