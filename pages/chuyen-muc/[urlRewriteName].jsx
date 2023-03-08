import Head from "next/head";
import Layout from "../../source/layouts/Layout";
import { useDispatch } from "react-redux";
import React from "react";
import { getNewsList } from "../../source/service/newsService";
import FutureTitle from "../../source/components/BoxSite/FutureTitle";
import { getLinkUrl, isEmptyObject } from "../../source/utils/utils";
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
import LoadingOverlayContent from "../../source/components/Loading/LoadingOverlayContent";
import LeftBarNews from "../../source/components/News/LeftBarNews";

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

  const roots = [
    {
      Url: getLinkUrl(EnumRoutingPage.CATEGORY_NEWS.id, urlRewriteName),
      Name: urlRewriteName,
    },
  ];

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
                      <FutureTitle roots={roots} />
                      <h1 className="jeg_cat_title">{urlRewriteName}</h1>
                    </div>
                  </div>
                  <div className="jnews_category_content_wrapper">
                    <div className="jeg_postblock_5 jeg_postblock jeg_module_hook jeg_pagination_nav_1 jeg_col_2o3 jnews_module_6192_1_63fcb5130f09c" data-unique="jnews_module_6192_1_63fcb5130f09c">
                      <div className="jeg_block_container">
                        <div className="jeg_posts jeg_load_more_flag">
                          <AdsRow728 page="category" position="left_1" />
                          {!isEmptyObject(listNews) ? listNews.map(newsItem => <NewsItemMore key={`key-${newsItem.CrawlerDataId}`} newsItem={newsItem} />) : ''}
                          <EmptyData listData={listNews} />
                        </div>
                        <LoadingOverlayContent />
                      </div>
                      <div className="jeg_block_navigation">
                        <PaginatePage
                          handlePageClick={handlePageClick}
                          totalRow={totalRows}
                          pageSize={COMMON_CONST.PageSize}
                          pageNumber={pageNumber}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jeg_sidebar left jeg_sticky_sidebar col-sm-4">
                <LeftBarNews />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jeg_ad jnews_above_footer_ads">
        <AdsRow970 page="category" position="center_1" />
      </div>
    </Layout >
  );
};

export default NewsCategory;
