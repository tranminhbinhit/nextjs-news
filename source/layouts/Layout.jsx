/* eslint-disable */
import Head from "next/head";
import Header from "../components/Header/Header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  getImage,
  getSettingValue,
  isEmpty,
  isEmptyObject,
} from "../utils/utils";
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

  const { ConfigJson: setting } = config;
  const {
    WebDescription,
    WebImage,
    WebTitle,
    WebName,
    WebIcon,
  } = setting || {};

  title = title || WebTitle;
  description = description || WebDescription;
  image = image || getImage(WebImage);
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta httpEquiv="content-language" content="vi" />
        <meta property="og:site_name" content={WebName} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="INDEX, FOLLOW" />
        <link
          id="favicon"
          rel="icon"
          href={getImage(WebIcon)}
          type="image/x-icon"
          sizes="32x32"
          data-react-helmet="true"
        />
      </Head>

      <div id="wrapper">
        <Header />

        {isMounted && (
          <div className="jeg_main">
            <div className="jeg_container">
              {children}
            </div>
          </div>
        )}
        <Footer />
        <Loading />
      </div>
    </React.Fragment>
  );
};

export default Layout;
