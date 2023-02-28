import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../source/layouts/Layout";
import { getBannerByType } from "../source/service/bannerService";
import {
  getLadingPage,
  getLadingPageBox,
} from "../source/service/landingPageService";
import { EnumLandingPageType } from "../source/constants/enum";
import React from "react";
import LandingPageBox from "../source/components/LandingPage/LandingPageBox";
import BannerSlider from "../source/components/Home/BannerSlider";
import BannerList from "../source/components/Home/BannerList";


export async function getServerSideProps(context) {
  const {res} = context
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const listBanner = await getBannerByType({
    type: 1,
  });

  // Lấy danh sách sản phẩm hiển thị
  const landingPage = await getLadingPage({
    type: EnumLandingPageType.HOME.id,
  });

  const listDataPage = await getLadingPageBox({
    id: landingPage.LandingPageId,
  });

  return {
    props: {
      listBanner,
      landingPage,
      listDataPage,
    },
  };
}

const Home = (props) => {
  const { listBanner, listDataPage, config } = props;

  //Redux
  const dispatch = useDispatch();
  const setting = useSelector((state) => state.setting);
  const { language } = setting;
  // useEffect(() => {
  //   dispatch(changeLanguage('bbb'));
  // }, [dispatch]);

  return (
    <Layout config={config}>
      <main id="main">
        <div id="content" role="main" className="content-area">
          {/* <BannerSlider listBanner={listBanner} />
          <BannerList listBanner={listBanner} />
          <LandingPageBox listDataPage={listDataPage} /> */}
        </div>
      </main>
    </Layout>
  );
};

export default Home;
