/* eslint-disable */
import Head from "next/head";
import Header from "../components/Header/Header";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import { wrapper } from "../redux/store";
import { changeStatePopup } from "../redux/action/mainAction";

const LayoutPopupMobile = (props) => {
  const { children, controlKey, changeStatePopupConnect, popup = {} } = props;
  const router = useRouter();
  const pathname = router.pathname;

  const isShowPopup = popup[controlKey];

  const changeStatePopup = (value) => {
    changeStatePopupConnect(controlKey, value);
  }

  // if (!isShowPopup) {
  //   return null;
  // }
  
  return (
    <React.Fragment>
      <div className={isShowPopup ? "jeg_show_menu" : ""}>
        <div id="jeg_off_canvas" className="normal">
          <a onClick={() => changeStatePopup(false)} className="jeg_menu_close"><i className="jegicon-cross"></i></a>
          <div className="jeg_bg_overlay" onClick={() => changeStatePopup(false)} ></div>
          <div className="jeg_mobile_wrapper">
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  popup: state.app.popup,
});

const mapDispatchToProps = (dispatch) => ({
  changeStatePopupConnect: (controlKey, value) => {
    dispatch(changeStatePopup(controlKey, value));
  }
});

export default wrapper.withRedux(
  connect(mapStateToProps, mapDispatchToProps)(LayoutPopupMobile)
);
