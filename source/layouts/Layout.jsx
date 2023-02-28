/* eslint-disable */
import Head from "next/head";
import Header from "../components/Header/Header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getImageCdn, getSettingValue, isEmpty, isEmptyObject } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

const Layout = ({ children, title, description, image, config }) => {
  //const  = props;
  const router = useRouter();
  const pathname = router.pathname;
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // const setting = useSelector((state) => state.setting);
  //const { config } = setting;

  const {
    PD_SEO_DESCRIPTION,
    PD_SEO_IMAGE,
    PD_SEO_KEYWORD,
    PD_SEO_WEBSITE_TITLE,
    PD_SEO_WEBSITE_NAME,
    WEB_FAVICON_IMAGE,
  } = config || {};
  const websiteTitle = getSettingValue(PD_SEO_WEBSITE_TITLE);
  const websiteDescription = getSettingValue(PD_SEO_DESCRIPTION);
  const websiteKeyword = getSettingValue(PD_SEO_KEYWORD);
  const websiteImage = getSettingValue(PD_SEO_IMAGE);
  const websiteName = getSettingValue(PD_SEO_WEBSITE_NAME);
  const websiteFavicon = getSettingValue(WEB_FAVICON_IMAGE);

  title = title || websiteTitle;
  description = description || websiteDescription;
  image = image || getImageCdn(websiteImage);
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta httpEquiv="content-language" content="vi" />
        <meta name="keywords" content={websiteKeyword} />
        <meta property="og:site_name" content={websiteName} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="INDEX, FOLLOW" />
        <link
          id="favicon"
          rel="icon"
          href={getImageCdn(websiteFavicon)}
          type="image/x-icon"
          sizes="32x32"
          data-react-helmet="true"
        />
      </Head>

      <div id="wrapper">
        <Header />
        {isMounted && <main>{children}</main>}
        <Footer />
        <Loading />
      </div>
    </React.Fragment>
  );
};

export default Layout;
