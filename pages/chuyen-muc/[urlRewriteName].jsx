import Head from "next/head";
import Layout from "../../source/layouts/Layout";
import { useDispatch } from "react-redux";
import React from "react";
import { getNewsList } from "../../source/service/newsService";
import FutureTitle from "../../source/components/BoxSite/FutureTitle";
import { getLinkUrl, isEmptyObject } from "../../source/utils/utils";
import LeftBarNews from "../../source/components/News/LeftBarNews";
import NewsItem from "../../source/components/News/NewsItem";
import EmptyData from "../../source/components/BoxSite/EmptyData";
import { COMMON_CONST } from "../../source/constants/constants";
import { EnumRoutingPage } from "../../source/constants/enum";
import { useRouter } from "next/router";
import PaginatePage from "../../source/components/BoxSite/PaginatePage";

export async function getServerSideProps(context) {
  const { query, res } = context;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const { urlRewriteName, p = 1 } = query;

  const listNews = await getNewsList({
    name_rewrite: urlRewriteName,
    p: p,
    ps: COMMON_CONST.PageSizeNews,
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
            <div className="jeg_ad jeg_category jnews_archive_above_hero_ads">
              <div className="ads-wrapper"></div>
            </div>
            <div className="jnews_category_hero_container">
              <div className="jeg_heroblock jeg_heroblock_9 jeg_col_3o3 jeg_hero_style_4 jnews_module_6192_0_63fcb5130d1c3" data-margin="2">
                <div className="jeg_hero_wrapper">
                  <div className="jeg_heroblock_wrapper">
                    <article className="jeg_post jeg_hero_item_1 format-standard">
                      <div className="jeg_block_container">
                        <span className="jeg_postformat_icon"></span>
                        <div className="jeg_thumb">
                          <a href="https://ngoisaoexpress.net/minh-hang-kho-chiu-ra-mat-khi-co-nguoi-nhac-lai-man-lon-meo-truoc-day/">
                            <div className="thumbnail-container thumbnail-background" data-src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/34213r32143646-ngoisaovn-w1200-h720-750x450.jpg">
                              <div className="lazyloaded" data-src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/34213r32143646-ngoisaovn-w1200-h720-750x450.jpg"></div>
                            </div>
                          </a>
                        </div>
                        <div className="jeg_postblock_content">
                          <div className="jeg_post_category"><a href="https://ngoisaoexpress.net/category/chuyen-lang-sao/" className="category-chuyen-lang-sao">Chuyện làng sao</a></div>
                          <div className="jeg_post_info">
                            <h2 className="jeg_post_title">
                              <a href="https://ngoisaoexpress.net/minh-hang-kho-chiu-ra-mat-khi-co-nguoi-nhac-lai-man-lon-meo-truoc-day/">Minh Hằng khó chịu ra mặt khi có người nhắc lại màn ‘lộn mèo’ trước đây</a>
                            </h2>
                            <div className="jeg_post_meta">
                              <div className="jeg_meta_date"><a href="https://ngoisaoexpress.net/minh-hang-kho-chiu-ra-mat-khi-co-nguoi-nhac-lai-man-lon-meo-truoc-day/"><i className="fa fa-clock-o"></i> Tháng Hai 27, 2023</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="jeg_post jeg_hero_item_2 format-standard">
                      <div className="jeg_block_container">
                        <span className="jeg_postformat_icon"></span>
                        <div className="jeg_thumb">
                          <a href="https://ngoisaoexpress.net/bao-thy-dot-mat-voi-body-cuc-hot-hanh-phuc-thong-bao-da-ve-lai-can-nang-thoi-son-roi/">
                            <div className="thumbnail-container thumbnail-background" data-src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/321r23t53-ngoisaovn-w1200-h720-1-750x450.jpg">
                              <div className="lazyloaded" data-src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/321r23t53-ngoisaovn-w1200-h720-1-750x450.jpg"></div>
                            </div>
                          </a>
                        </div>
                        <div className="jeg_postblock_content">
                          <div className="jeg_post_category"><a href="https://ngoisaoexpress.net/category/chuyen-lang-sao/" className="category-chuyen-lang-sao">Chuyện làng sao</a></div>
                          <div className="jeg_post_info">
                            <h2 className="jeg_post_title">
                              <a href="https://ngoisaoexpress.net/bao-thy-dot-mat-voi-body-cuc-hot-hanh-phuc-thong-bao-da-ve-lai-can-nang-thoi-son-roi/">Bảo Thy ‘đốt mắt’ với body cực hot, hạnh phúc thông báo đã về lại cân nặng thời son rỗi</a>
                            </h2>
                            <div className="jeg_post_meta">
                              <div className="jeg_meta_date"><a href="https://ngoisaoexpress.net/bao-thy-dot-mat-voi-body-cuc-hot-hanh-phuc-thong-bao-da-ve-lai-can-nang-thoi-son-roi/"><i className="fa fa-clock-o"></i> Tháng Hai 27, 2023</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="jeg_ad jeg_category jnews_archive_below_hero_ads">
              <div className="ads-wrapper"></div>
            </div>
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
                          <article className="jeg_post jeg_pl_lg_2 format-standard">
                            <div className="jeg_thumb">
                              <a href="https://ngoisaoexpress.net/diva-thanh-lam-tu-hao-khi-con-trai-la-nghe-si-piano-ve-viet-nam-bieu-dien/">
                                <div className="thumbnail-container animate-lazy  size-715"><img width="350" height="250" src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/dangquang1-ngoisaovn-w1200-h720-1-350x250.jpg" className="attachment-jnews-350x250 size-jnews-350x250 wp-post-image lazyautosizes lazyloaded" alt="Diva Thanh Lam tự hào khi con trai là nghệ sĩ piano về Việt Nam biểu diễn" decoding="async" loading="lazy" sizes="360px" data-src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/dangquang1-ngoisaovn-w1200-h720-1-350x250.jpg" /></div>
                              </a>
                              <div className="jeg_post_category">
                                <span><a href="https://ngoisaoexpress.net/category/chuyen-lang-sao/" className="category-chuyen-lang-sao">Chuyện làng sao</a></span>
                              </div>
                            </div>
                            <div className="jeg_postblock_content">
                              <h3 className="jeg_post_title">
                                <a href="https://ngoisaoexpress.net/diva-thanh-lam-tu-hao-khi-con-trai-la-nghe-si-piano-ve-viet-nam-bieu-dien/">Diva Thanh Lam tự hào khi con trai là nghệ sĩ piano về Việt Nam biểu diễn</a>
                              </h3>
                              <div className="jeg_post_meta">
                                <div className="jeg_meta_date"><a href="https://ngoisaoexpress.net/diva-thanh-lam-tu-hao-khi-con-trai-la-nghe-si-piano-ve-viet-nam-bieu-dien/"><i className="fa fa-clock-o"></i> Tháng Hai 26, 2023</a></div>
                              </div>
                              <div className="jeg_post_excerpt">
                                <p>Vào đầu tháng 10, nghệ sĩ piano Nguyễn Đăng Quang - con trai Diva Thanh Lam sẽ biểu diễn tại...</p>
                                <a href="https://ngoisaoexpress.net/diva-thanh-lam-tu-hao-khi-con-trai-la-nghe-si-piano-ve-viet-nam-bieu-dien/" className="jeg_readmore">Xem thêm</a>
                              </div>
                            </div>
                          </article>

                          <div className="jeg_ad jeg_ad_module jnews_inline_module_ads">
                            <div className="ads-wrapper"><a href="#" target="_blank" rel="nofollow noopener" className="adlink ads_image inline_module">
                              <img src="https://ngoisaoexpress.net/wp-content/themes/jnews/assets/img/jeg-empty.png" className="lazyload" data-src="http://ngoisaoexpress.net/wp-content/uploads/2022/08/Biore_728x90px.jpg.webp" alt="" data-pin-no-hover="true" />
                            </a>
                            </div>
                          </div>
                          <article className="jeg_post jeg_pl_lg_2 format-standard">
                            <div className="jeg_thumb">
                              <a href="https://ngoisaoexpress.net/ban-than-lo-lang-vi-diep-lam-anh-song-khep-kin-nu-dien-vien-tu-nhu-dung-bat-on-nua/">
                                <div className="thumbnail-container animate-lazy  size-715"><img width="350" height="250" src="https://ngoisaoexpress.net/wp-content/themes/jnews/assets/img/jeg-empty.png" className="attachment-jnews-350x250 size-jnews-350x250 lazyload wp-post-image" alt="Bạn thân lo lắng vì Diệp Lâm Anh sống khép kín, nữ diễn viên tự nhủ: ‘Đừng bất ổn nữa’" decoding="async" loading="lazy" sizes="(max-width: 350px) 100vw, 350px" data-src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/dvkjkfjnkflblkbf-ngoisaovn-w1200-h720-1-350x250.jpg" data-expand="700" title="Bạn thân lo lắng vì Diệp Lâm Anh sống khép kín, nữ diễn viên tự nhủ: 'Đừng bất ổn nữa' 10" /></div>
                              </a>
                              <div className="jeg_post_category">
                                <span><a href="https://ngoisaoexpress.net/category/chuyen-lang-sao/" className="category-chuyen-lang-sao">Chuyện làng sao</a></span>
                              </div>
                            </div>
                            <div className="jeg_postblock_content">
                              <h3 className="jeg_post_title">
                                <a href="https://ngoisaoexpress.net/ban-than-lo-lang-vi-diep-lam-anh-song-khep-kin-nu-dien-vien-tu-nhu-dung-bat-on-nua/">Bạn thân lo lắng vì Diệp Lâm Anh sống khép kín, nữ diễn viên tự nhủ: ‘Đừng bất ổn nữa’</a>
                              </h3>
                              <div className="jeg_post_meta">
                                <div className="jeg_meta_date"><a href="https://ngoisaoexpress.net/ban-than-lo-lang-vi-diep-lam-anh-song-khep-kin-nu-dien-vien-tu-nhu-dung-bat-on-nua/"><i className="fa fa-clock-o"></i> Tháng Hai 12, 2023</a></div>
                              </div>
                              <div className="jeg_post_excerpt">
                                <p>Diệp Lâm Anh khiến bạn thân lo lắng vì hiện giờ sống khép kín, quá ít chia sẻ.</p>
                                <a href="https://ngoisaoexpress.net/ban-than-lo-lang-vi-diep-lam-anh-song-khep-kin-nu-dien-vien-tu-nhu-dung-bat-on-nua/" className="jeg_readmore">Xem thêm</a>
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
                    <div className="widget widget_jnews_module_element_ads" id="jnews_module_element_ads-3">
                      <div className="jeg_ad jeg_ad_module jnews_module_6192_2_63fcb513161bc">
                        <div className="ads-wrapper"><a href="https://tiki.vn/thuong-hieu/lipton.html?fbclid=IwAR3m7pCRgy4pvYs9Agc0W-ORasr2LWy_lNZgPmzyb15LEF8SOgaN31_QbTU" target="_blank" rel="nofollow noopener" className="adlink ads_image">
                          <img src="https://ngoisaoexpress.net/wp-content/uploads/2022/08/Lipton_345x345px.jpg.webp" className=" lazyloaded" alt="" data-pin-no-hover="true" />
                        </a>
                        </div>
                      </div>
                    </div>
                    <div className="widget widget_jnews_module_block_21" id="jnews_module_block_21-2">
                      <div className="jeg_postblock_21 jeg_postblock jeg_module_hook jeg_pagination_disable jeg_col_1o3 jnews_module_6192_3_63fcb513166d8  jeg_pb_boxed normal" data-unique="jnews_module_6192_3_63fcb513166d8">
                        <div className="jeg_block_container">
                          <div className="jeg_posts jeg_load_more_flag">
                            <article className="jeg_post jeg_pl_sm format-standard">
                              <div className="jeg_thumb">
                                <a href="https://ngoisaoexpress.net/moi-nguoi-noi-toi-da-qua-ngu-ngoc-khi-ban-ngoi-nha-de-tra-no-hon-3-ty-cho-vo/">
                                  <div className="thumbnail-container animate-lazy  size-715"><img width="120" height="86" src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/untitled-1-copy-ngoisaovn-w1200-h720-120x86.jpg" className="attachment-jnews-120x86 size-jnews-120x86 wp-post-image lazyautosizes lazyloading afterloading" alt="Mọi người nói tôi đã quá ngu ngốc khi bán ngôi nhà để trả nợ hơn 3 tỷ cho vợ" decoding="async" loading="lazy" sizes="120px" data-src="https://ngoisaoexpress.net/wp-content/uploads/2023/02/untitled-1-copy-ngoisaovn-w1200-h720-120x86.jpg" data-srcset="https://ngoisaoexpress.net/wp-content/uploads/2023/02/untitled-1-copy-ngoisaovn-w1200-h720-120x86.jpg 120w, https://ngoisaoexpress.net/wp-content/uploads/2023/02/untitled-1-copy-ngoisaovn-w1200-h720-350x250.jpg 350w, https://ngoisaoexpress.net/wp-content/uploads/2023/02/untitled-1-copy-ngoisaovn-w1200-h720-750x536.jpg 750w" data-sizes="auto" data-expand="700" title="Mọi người nói tôi đã quá ngu ngốc khi bán ngôi nhà để trả nợ hơn 3 tỷ cho vợ 11" /></div>
                                </a>
                              </div>
                              <div className="jeg_postblock_content">
                                <h3 className="jeg_post_title">
                                  <a href="https://ngoisaoexpress.net/moi-nguoi-noi-toi-da-qua-ngu-ngoc-khi-ban-ngoi-nha-de-tra-no-hon-3-ty-cho-vo/">Mọi người nói tôi đã quá ngu ngốc khi bán ngôi nhà để trả nợ hơn 3 tỷ cho vợ</a>
                                </h3>
                                <div className="jeg_post_meta">
                                  <div className="jeg_meta_date"><a href="https://ngoisaoexpress.net/moi-nguoi-noi-toi-da-qua-ngu-ngoc-khi-ban-ngoi-nha-de-tra-no-hon-3-ty-cho-vo/"><i className="fa fa-clock-o"></i> Tháng Hai 26, 2023</a></div>
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
    </Layout >
  );
};

export default NewsCategory;
