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
      <main id="main" >
        <div id="content" className="blog-wrapper blog-archive page-wrapper">
          <div className="row row-large row-divided ">
            <div className="large-9 col">
              <div className="row large-columns-1 medium-columns- small-columns-1">
                {!isEmptyObject(listNews) ? listNews.map(newsItem => <NewsItem key={`key-${newsItem.NewsId}`} newsItem={newsItem} />) : ''}
                <EmptyData listData={listNews} />
              </div>
              <div className="container">
                <PaginatePage
                  handlePageClick={handlePageClick}
                  totalRow={totalRows}
                  pageSize={COMMON_CONST.PageSizeNews}
                  pageNumber={pageNumber}
                />
              </div>
            </div>
            <div className="post-sidebar large-3 col">
              <LeftBarNews />
            </div>
          </div>

        </div>
      </main>
    </Layout >
  );
};

export default NewsCategory;
