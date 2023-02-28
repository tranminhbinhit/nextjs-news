import Head from "next/head";
import Layout from "../../source/layouts/Layout";
import { useDispatch } from "react-redux";
import React from "react";
import { EnumLandingPageType } from "../../source/constants/enum";
import {
  getLadingPage,
  getLadingPageBox,
} from "../../source/service/landingPageService";
import LandingPageBox from "../../source/components/LandingPage/LandingPageBox";
import { getImageCdn } from "../../source/utils/utils";

export async function getServerSideProps(context) {
  const { query, res } = context;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  
  const urlRewriteName = query.urlRewriteName;

  const landingPage = await getLadingPage({
    url: urlRewriteName,
    type: EnumLandingPageType.STATIC.id,
  });

  const listDataPage = await getLadingPageBox({
    id: landingPage.LandingPageId,
  });

  return {
    props: {
      landingPage,
      listDataPage,
    },
  };
}

const LandingPage = (props) => {
  const { landingPage, listDataPage, config } = props;
  const {
    Description,
    ImageUrl,
    Title
  } = landingPage;
  return (
    <Layout
      config={config}
      title={Title}
      description={Description}
      image={getImageCdn(ImageUrl)}
    >
      <main id="main">
        <div id="content" role="main" className="content-area">
          <LandingPageBox listDataPage={listDataPage} />
        </div>
      </main>
    </Layout>
  );
};

export default LandingPage;
