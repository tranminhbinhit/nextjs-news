import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../source/layouts/Layout";

import React from "react";
import { getNewsHome } from "../source/service/newsService";
import { isEmptyObject } from "../source/utils/utils";
import EmptyData from "../source/components/BoxSite/EmptyData";
import NewsItemBox from "../source/components/News/NewsItemBox";
import NewsItemLarge from "../source/components/News/NewsItemLarge";
import NewsItemSmall from "../source/components/News/NewsItemSmall";
import NewsItem from "../source/components/News/NewsItem";
import AdsBox345 from "../source/components/Ads/AdsBox345";
import AdsRow970 from "../source/components/Ads/AdsRow970";
import LoadingOverlayContent from "../source/components/Loading/LoadingOverlayContent";
import LeftBarNews from "../source/components/News/LeftBarNews";
import HomeTop from "../source/components/Home/HomeTop";
import NewsButtom from "../source/components/Home/NewsButtom";
import HotNews from "../source/components/Home/HotNews";

export async function getServerSideProps(context) {
  const { res } = context;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const listNews = await getNewsHome({
    PageTypeId: 2,
    TopNumber: 14,
  });

  return {
    props: {
      listNews,
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

  return (
    <Layout config={config}>
      <div className="jeg_content">
        <div className="jeg_vc_content">
          <div className="row vc_row wpb_row vc_row-fluid">
            <div className="jeg-vc-wrapper">
              <div className="wpb_column jeg_column vc_column_container vc_col-sm-12 vc_hidden-sm vc_hidden-xs jeg_main_content">
                <HotNews />
              </div>
            </div>
          </div>
          <div className="row vc_row wpb_row vc_row-fluid">
            <div className="jeg-vc-wrapper">
              <div className="wpb_column jeg_column vc_column_container vc_col-sm-8 jeg_main_content">
                <HomeTop />
              </div>
              <div className="wpb_column jeg_column vc_column_container vc_col-sm-4 jeg_sticky_sidebar jeg_sidebar">
                <LeftBarNews hasBorder={false} />
              </div>
            </div>
          </div>
          <div
            className="row vc_row wpb_row vc_row-fluid vc_custom_1517993998548 vc_row-has-fill"
          >
            <div className="jeg-vc-wrapper">
              <div className="wpb_column jeg_column vc_column_container vc_col-sm-12 jeg_main_content">
                <div className="jeg_wrapper wpb_wrapper">
                  <div className="jeg_ad jeg_ad_module jnews_module_1956_4_63f5e702500d6  vc_custom_1672642380347">
                    <AdsRow970 page="home" position="center_1" />
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
                <NewsButtom />
              </div>
              <div className="jeg_sidebar left jeg_sticky_sidebar col-sm-4">
                <LeftBarNews hasBorder={false} title="Tiêu điểm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
