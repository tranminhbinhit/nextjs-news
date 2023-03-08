import Head from "next/head";
import Layout from "../source/layouts/Layout";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import FutureTitle from "../source/components/BoxSite/FutureTitle";
import { getLinkUrl, isEmptyObject } from "../source/utils/utils";
import EmptyData from "../source/components/BoxSite/EmptyData";
import PaginatePage from "../source/components/BoxSite/PaginatePage";
import { useRouter } from "next/router";
import { EnumRoutingPage } from "../source/constants/enum";
import { COMMON_CONST } from '../source/constants/constants';
import NewsItem from "../source/components/News/NewsItem";
import NewsItemSmall from "../source/components/News/NewsItemSmall";
import { getNewsList } from "../source/service/newsService";
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
  const { key = '', p = 1 } = query;
  const listNews = await getNewsList({
    PageTypeId: 2,
    PageSize: COMMON_CONST.PageSizeNews,
    PageNumber: p,
    SearchText: key || ''
  });

  return {
    props: {
      listNews,
      keySearch: key,
      pageNumber: p,
    },
  };
}

const SearchProduct = (props) => {
  const { listNews, keySearch, config, pageNumber } = props;

  const [keySearchText, setKeySearch] = useState(keySearch);

  const router = useRouter();
  const handlePageClick = (event) => {
    const link = `${getLinkUrl(EnumRoutingPage.SEARCH.id, keySearch)}&p=${event.selected + 1}`;
    router.push(link);
  }

  const handleSubmit = async (event) => {
    //debugger
    event.preventDefault();
    router.push(getLinkUrl(EnumRoutingPage.SEARCH.id, keySearchText));
    //setKeySearch('');
  };

  const roots = [
    {
      Url: '',
      Name: `Tìm kiếm với từ khóa "${keySearch}"`,
    },
  ];

  const totalRows = !isEmptyObject(listNews) ? listNews[0].TotalRows : 0;

  return (
    <Layout title={`Tìm kiếm ${keySearch}`} config={config}>
      {/* <FutureTitle roots={roots} /> */}
      <div className="jeg_content">
        <div className="jeg_section">
          <div className="container">
            <AdsRow728 page="search" position="left_1" />
            <div className="jeg_cat_content row">
              <div className="jeg_main_content col-sm-8">
                <div className="jeg_inner_content">
                  <div className="jeg_archive_header">
                    <FutureTitle roots={roots} />
                    <h1 className="jeg_archive_title">Kết quả với từ khóa '{keySearch}'</h1>
                    <div className="jeg_archive_search">
                      <form
                        onSubmit={handleSubmit}
                        className="jeg_search_form"
                      >
                        <input name="s"
                          className="jeg_search_input"
                          placeholder="Tìm kiếm..."
                          type="text"
                          value={keySearchText}
                          onChange={event => {
                            setKeySearch(event.target.value);
                          }} />
                        <button aria-label="Search Button" type="submit" className="jeg_search_button btn"><i className="fa fa-search"></i></button>
                      </form>
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
                            {!isEmptyObject(listNews) ? listNews.map(newsItem => <NewsItem key={`key-${newsItem.CrawlerDataId}`} newsItem={newsItem} />) : ''}
                            <EmptyData listData={listNews} />
                          </div>
                        </div>
                      </div>
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
              <div className="jeg_sidebar left jeg_sticky_sidebar col-sm-4">
                <LeftBarNews />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchProduct;
