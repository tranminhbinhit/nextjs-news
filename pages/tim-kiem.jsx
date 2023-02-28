import Head from "next/head";
import Layout from "../source/layouts/Layout";
import { useDispatch } from "react-redux";
import React from "react";
import { getProductSearch } from "../source/service/productService";
import ProductItem from "../source/components/Product/ProductItem";
import LeftLandingPage from "../source/components/LandingPage/LeftLandingPage";
import LeftCategory from "../source/components/Category/LeftCategory";
import FutureTitle from "../source/components/BoxSite/FutureTitle";
import { getLinkUrl, isEmptyObject } from "../source/utils/utils";
import EmptyData from "../source/components/BoxSite/EmptyData";
import PaginatePage from "../source/components/BoxSite/PaginatePage";
import { useRouter } from "next/router";
import { EnumRoutingPage } from "../source/constants/enum";
import { COMMON_CONST } from '../source/constants/constants';

export async function getServerSideProps(context) {
  const { query, res } = context;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const { key, p = 1 } = query;
  const listProduct = await getProductSearch({
    search_text: key,
    p: p,
    ps: COMMON_CONST.PageSize,
  });

  return {
    props: {
      listProduct,
      keySearch: key,
      pageNumber: p,
    },
  };
}

const SearchProduct = (props) => {
  const { listProduct, keySearch, config, pageNumber } = props;

  const router = useRouter();
  const handlePageClick = (event) => {
    const link = `${getLinkUrl(EnumRoutingPage.SEARCH.id, keySearch)}&p=${event.selected + 1}`;
    router.push(link);
  }

  const roots = [
    {
      Url: '',
      Name: `Tìm kiếm với từ khóa "${keySearch}"`,
    },
  ];

  const totalRows = !isEmptyObject(listProduct) ? listProduct[0].TotalRows : 0;

  return (
    <Layout title={`Tìm kiếm ${keySearch}`} config={config}>
      {/* <FutureTitle roots={roots} /> */}
      <div className="jeg_content">
        <div className="jeg_section">
          <div className="container">
            <div className="jeg_ad jeg_archive jnews_archive_above_content_ads">
              <div className="ads-wrapper"></div>
            </div>
            <div className="jeg_cat_content row">
              <div className="jeg_main_content col-sm-8">
                <div className="jeg_inner_content">
                  <div className="jeg_archive_header">
                    <div className="jeg_breadcrumbs jeg_breadcrumb_container">
                      <div id="breadcrumbs"><span className="">
                        <a href="https://ngoisaoexpress.net">Trang chủ</a>
                      </span><i className="fa fa-angle-right"></i><span className="breadcrumb_last_link">
                          <a href="">Tìm kiếm</a>
                        </span>
                      </div>
                    </div>
                    <h1 className="jeg_archive_title">Search Result for 'ga'</h1>
                    <div className="jeg_archive_search">
                      {/* <form action="https://ngoisaoexpress.net/" method="get" className="jeg_search_form" target="_top">
                                          <input name="s" className="jeg_search_input" placeholder="Tìm kiếm..." type="text" value="ga" autocomplete="off" />
                                          <button aria-label="Search Button" type="submit" className="jeg_search_button btn"><i className="fa fa-search"></i></button>
                                       </form> */}
                      <div className="jeg_search_result jeg_search_hide with_result">
                        <div className="search-result-wrapper">
                        </div>
                        <div className="search-link search-noresult">
                          Không có kết quả
                        </div>
                        <div className="search-link search-all-button">
                          <i className="fa fa-search"></i> Xem tất cả kết quả
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jnews_search_content_wrapper">
                    <div className="jeg_module_hook jnews_module_6160_0_63fcc495e9f71" data-unique="jnews_module_6160_0_63fcc495e9f71">
                      <div className="jeg_postblock_3 jeg_postblock jeg_col_2o3">
                        <div className="jeg_block_container">
                          <div className="jeg_posts jeg_load_more_flag">
                            <article className="jeg_post jeg_pl_md_2 format-standard">
                              <div className="jeg_thumb">
                                <a href="https://ngoisaoexpress.net/su-quyen-ru-cua-bom-sex-megan-fox-the-hien-qua-tung-trang-phuc-vay-xe-ta-ho-bao-va-hon-the-nua/">
                                  <div className="thumbnail-container animate-lazy  size-715"><img width="350" height="250" src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/0056me1-ngoisaovn-w1200-h720-1-350x250.jpg" className="attachment-jnews-350x250 size-jnews-350x250 wp-post-image lazyautosizes lazyloaded" alt="Sự quyến rũ của ‘bom sex’ Megan Fox thể hiện qua từng trang phục: váy xẻ tà, hở bạo và hơn thế nữa" decoding="async" loading="lazy" sizes="260px" data-src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/0056me1-ngoisaovn-w1200-h720-1-350x250.jpg" /></div>
                                </a>
                              </div>
                              <div className="jeg_postblock_content">
                                <h3 className="jeg_post_title">
                                  <a href="https://ngoisaoexpress.net/su-quyen-ru-cua-bom-sex-megan-fox-the-hien-qua-tung-trang-phuc-vay-xe-ta-ho-bao-va-hon-the-nua/">Sự quyến rũ của ‘bom sex’ Megan Fox thể hiện qua từng trang phục: váy xẻ tà, hở bạo và hơn thế nữa</a>
                                </h3>
                                <div className="jeg_post_meta">
                                  <div className="jeg_meta_date"><a href="https://ngoisaoexpress.net/su-quyen-ru-cua-bom-sex-megan-fox-the-hien-qua-tung-trang-phuc-vay-xe-ta-ho-bao-va-hon-the-nua/"><i className="fa fa-clock-o"></i> Tháng Hai 27, 2023</a></div>
                                </div>
                                <div className="jeg_post_excerpt">
                                  <p>Là nữ diễn viên điện ảnh kiêm người mẫu nổi tiếng, Megan Fox luôn khẳng định vị thế của mình ...</p>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                      <div className="jeg_navigation jeg_pagination  jeg_pagenav_1 jeg_aligncenter no_navtext no_pageinfo">
                        <span className="page_info">Page 1 of 141</span>
                        <span className="page_number active">1</span>
                        <a className="page_number" data-id="2" href="https://ngoisaoexpress.net/page/2/?s=ga">2</a>
                        <span className="page_number dots">…</span>
                        <a className="page_number" data-id="141" href="https://ngoisaoexpress.net/page/141/?s=ga">141</a>
                        <a className="page_nav next" data-id="2" href="https://ngoisaoexpress.net/page/2/?s=ga"><span className="navtext">Next</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jeg_sidebar left jeg_sticky_sidebar col-sm-4">
                <div className="jegStickyHolder">
                  <div className="theiaStickySidebar">
                    <div className="widget widget_jnews_module_element_ads" id="jnews_module_element_ads-3">
                      <div className="jeg_ad jeg_ad_module jnews_module_6160_1_63fcc495ea89e">
                        <div className="ads-wrapper"><a href="https://tiki.vn/thuong-hieu/lipton.html?fbclid=IwAR3m7pCRgy4pvYs9Agc0W-ORasr2LWy_lNZgPmzyb15LEF8SOgaN31_QbTU" target="_blank" rel="nofollow noopener" className="adlink ads_image">
                          <img src="https://ngoisaoexpress.net/wp-content/uploads/2022/08/Lipton_345x345px.jpg" className=" lazyloaded" data-src="https://ngoisaoexpress.net/wp-content/uploads/2022/08/Lipton_345x345px.jpg" alt="" data-pin-no-hover="true" />
                        </a>
                        </div>
                      </div>
                    </div>
                    <div className="widget widget_jnews_module_block_21" id="jnews_module_block_21-2">
                      <div className="jeg_postblock_21 jeg_postblock jeg_module_hook jeg_pagination_disable jeg_col_1o3 jnews_module_6160_2_63fcc495eb2db  jeg_pb_boxed normal" data-unique="jnews_module_6160_2_63fcc495eb2db">
                        <div className="jeg_block_container">
                          <div className="jeg_posts jeg_load_more_flag">
                            <article className="jeg_post jeg_pl_sm format-standard">
                              <div className="jeg_thumb">
                                <a href="https://ngoisaoexpress.net/phim-cau-ut-nha-tai-phiet-bi-chi-trich-vi-chinh-sua-da-qua-da-cho-song-joong-ki/">
                                  <div className="thumbnail-container animate-lazy  size-715"><img width="120" height="86" src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/saong-joong-ki-ngoisaovn-w1200-h720-120x86.jpg" className="attachment-jnews-120x86 size-jnews-120x86 wp-post-image lazyautosizes lazyloaded" alt="Phim ‘Cậu út nhà tài phiệt’ bị chỉ trích vì chỉnh sửa da quá đà cho Song Joong Ki" decoding="async" loading="lazy" sizes="120px" data-src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/saong-joong-ki-ngoisaovn-w1200-h720-120x86.jpg"/></div>
                                </a>
                              </div>
                              <div className="jeg_postblock_content">
                                <h3 className="jeg_post_title">
                                  <a href="https://ngoisaoexpress.net/phim-cau-ut-nha-tai-phiet-bi-chi-trich-vi-chinh-sua-da-qua-da-cho-song-joong-ki/">Phim ‘Cậu út nhà tài phiệt’ bị chỉ trích vì chỉnh sửa da quá đà cho Song Joong Ki</a>
                                </h3>
                                <div className="jeg_post_meta">
                                  <div className="jeg_meta_date"><a href="https://ngoisaoexpress.net/phim-cau-ut-nha-tai-phiet-bi-chi-trich-vi-chinh-sua-da-qua-da-cho-song-joong-ki/"><i className="fa fa-clock-o"></i> Tháng Hai 26, 2023</a></div>
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
          </div>
        </div>
      </div>
      <div className="jeg_ad jnews_above_footer_ads">
        <div className="ads-wrapper"></div>
      </div>
    </Layout>
  );
};

export default SearchProduct;
