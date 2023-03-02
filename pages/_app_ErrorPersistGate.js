import React, { Component, Fragment } from "react";
import Router from "next/router";
import { wrapper, store } from "../source/redux/store";
import { connect, Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import NextNProgress from "nextjs-progressbar";

import { getSettingSystem } from "../source/service/settingService";
import { receiveSetting } from "../source/redux/action/settingAction";
import { getMenuType } from "../source/service/mainService";
import { receiveMenu } from "../source/redux/action/mainAction";
import { receiveCategory } from "../source/redux/action/categoryAction";

import "../source/assets/css/main.css";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import PageError from "../source/layouts/PageError";
import { isEmptyObject } from "../source/utils/utils";

const isProduction = process.env.ENV === "production";
if (isProduction) {
  Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));
}

class MyApp extends React.Component {
  static async getInitialProps(ctx) {
    // const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    let setting = await getSettingSystem();
    let menu = await getMenuType({
      type: 1,
    });
    const listCategory = await getCategoryList();
    return {
      setting,
      menu,
      listCategory,
    };
  }

  componentDidMount() {
    const {
      setting,
      menu,
      listCategory,
      receiveMenuConnect,
      receiveSettingConnect,
      receiveCategoryConnect,
    } = this.props;

    //Init Data
    receiveSettingConnect(setting);
    receiveMenuConnect(menu);
    receiveCategoryConnect(listCategory);
  }

  render() {
    const { Component, pageProps, setting } = this.props;
    let persistor = persistStore(store);
    const isReadyApp = !isEmptyObject(setting);
    return (
      <Provider store={store}>
        <PersistGate loading={(<h1>Loading ...</h1>)} persistor={persistor}>
          <NextNProgress
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <NotificationContainer />
          {isReadyApp ? <Component {...pageProps} /> : <PageError />}
        </PersistGate>
      </Provider>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveSettingConnect: (setting) => {
      dispatch(receiveSetting(setting));
    },
    receiveMenuConnect: (menu) => {
      dispatch(receiveMenu(menu));
    },
    receiveCategoryConnect: (listCategory) => {
      dispatch(receiveCategory(listCategory));
    },
  };
};

export default wrapper.withRedux(connect(null, mapDispatchToProps)(MyApp));
