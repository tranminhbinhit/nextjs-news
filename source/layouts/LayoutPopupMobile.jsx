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
  const {children, controlKey, position = 'undefined', changeStatePopupConnect, popup = {} } = props;
  const router = useRouter();
  const pathname = router.pathname;

  const classPosition = `off-canvas-${position}`; //undefined|left|right
  
  const isShowPopup = popup[controlKey];

  const changeStatePopup = (value) => {
    changeStatePopupConnect(controlKey, value);
  }
  
  if(!isShowPopup){
    return null;
  }
  return (
    <React.Fragment>
      <div className="mfp-bg off-canvas off-canvas-left main-menu-overlay mfp-ready" />
      <div className={`mfp-wrap mfp-auto-cursor off-canvas mfp-ready ${classPosition}`}>
        <div className="mfp-container mfp-s-ready mfp-inline-holder">
          <div className="mfp-content">{children}</div>
        </div>
        <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => changeStatePopup(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
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
