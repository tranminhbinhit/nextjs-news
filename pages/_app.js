import React, { Component, Fragment, useEffect } from "react";
import Router from "next/router";
import { wrapper } from "../source/redux/store";
import { connect, useDispatch } from "react-redux";
import NextNProgress from "nextjs-progressbar";

import { getSettingSystem } from "../source/service/settingService";
import { receiveSetting } from "../source/redux/action/settingAction";

import "../source/assets/css/main.css";
import "react-notifications/lib/notifications.css";
import "../source/assets/scss/loading.scss";
import { NotificationContainer } from "react-notifications";
import PageError from "../source/layouts/PageError";
import { isEmptyObject } from "../source/utils/utils";
//import { receiveSettingFromAction } from "../source/redux/reducers/settingReducer";

const isProduction = process.env.ENV === "production";
if (isProduction) {
  Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));
}

const MyApp = (props) => {
  const { Component, pageProps, setting } = props;
  const {
    receiveSettingConnect,
  } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    receiveSettingConnect(setting);
  }, [dispatch]);

  const isReadyApp = !isEmptyObject(setting);
  return (
    <React.Fragment>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <NotificationContainer />
      {isReadyApp ? <Component {...pageProps} config={setting} /> : <PageError />}
    </React.Fragment>
  );
};


MyApp.getInitialProps = async (appContext) => {
  let setting = await getSettingSystem({
    PageTypeId: 2
  });

  return {
    setting,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveSettingConnect: (setting) => {
      dispatch(receiveSetting(setting));
    },
  };
};

export default wrapper.withRedux(connect(null, mapDispatchToProps)(MyApp));
