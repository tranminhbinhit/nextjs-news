/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatPhone, getSettingValue } from '../../../utils/utils';

const ContractFollow = ({ config }) => {
  const {
    WEB_LOGO_IMAGE,
    CONTRACT_ADDRESS,
    CONTRACT_HOTLINE,
    CONTRACT_FANPAGE,
    CONTRACT_EMAIL,
    CONTRACT_COMPANY,
  } = config || {};

  const websiteHotline = getSettingValue(CONTRACT_HOTLINE);
  const websiteEmail = getSettingValue(CONTRACT_EMAIL);
  const websiteFanpage = getSettingValue(CONTRACT_FANPAGE);
  return (
    <React.Fragment>
      <div className="row row-full-width">
        <div className="col medium-4 small-12 large-4">
          <div className="col-inner">
            <a
              className="plain"
              href={`tel:${websiteHotline}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-box featured-box h-info icon-box-left text-left">
                <div className="icon-box-img" style={{ width: '45px' }}>
                  <div className="icon">
                    <div
                      className="icon-inner"
                      style={{ color: 'rgb(24, 151, 85)' }}
                    >
                      <svg
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 469.333 469.333"
                        style={{
                          enableBackground: 'new 0 0 469.333 469.333',
                        }}
                      >
                        <g>
                          <g>
                            <g>
                              <path
                                d="M234.667,0C105.271,0,0,114.844,0,256v106.667c0,5.896,4.771,10.667,10.667,10.667s10.667-4.771,10.667-10.667V256
				c0-129.396,95.698-234.667,213.333-234.667S448,126.604,448,256v106.667c0,5.896,4.771,10.667,10.667,10.667
				c5.896,0,10.667-4.771,10.667-10.667V256C469.333,114.844,364.063,0,234.667,0z"
                              />
                              <path
                                d="M117.333,256h-32c-23.531,0-42.667,19.135-42.667,42.667v128c0,23.531,19.135,42.667,42.667,42.667h32
				c5.896,0,10.667-4.771,10.667-10.667v-192C128,260.771,123.229,256,117.333,256z M106.667,448H85.333
				C73.573,448,64,438.427,64,426.667v-128c0-11.76,9.573-21.333,21.333-21.333h21.333V448z"
                              />
                              <path
                                d="M384,256h-32c-5.896,0-10.667,4.771-10.667,10.667v192c0,5.896,4.771,10.667,10.667,10.667h32
				c23.531,0,42.667-19.135,42.667-42.667v-128C426.667,275.135,407.531,256,384,256z M405.333,426.667
				c0,11.76-9.573,21.333-21.333,21.333h-21.333V277.333H384c11.76,0,21.333,9.573,21.333,21.333V426.667z"
                              />
                            </g>
                          </g>
                        </g>
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="icon-box-text last-reset">
                  <div>
                    <span className="sub-title">Hotline</span>
                    <span className="title" data-text-color="primary">
                      {formatPhone(websiteHotline)}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="col medium-4 small-12 large-4">
          <div className="col-inner">
            <a
              className="plain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-box featured-box h-info icon-box-left text-left">
                <div className="icon-box-img w45">
                  <div className="icon">
                    <div
                      className="icon-inner"
                      style={{ color: 'rgb(24, 151, 85)' }}
                    >
                      <svg
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 454.573 454.573"
                        style={{
                          enableBackground: 'new 0 0 454.573 454.573',
                        }}
                      >
                        <g>
                          <g>
                            <g>
                              <path
                                d="M452.441,156.234l-65.829-46.498V41.817c-0.66-6.728-5.843-12.128-12.539-13.061H85.682
				c-6.695,0.934-11.879,6.333-12.539,13.061v67.396l-68.441,47.02c-2.711,1.968-4.428,5.021-4.702,8.359v248.163
				c0.89,6.811,6.25,12.172,13.061,13.061h433.633c5.747,0,7.837-6.792,7.837-13.061V164.593
				C454.531,161.458,455.053,158.323,452.441,156.234z M386.612,134.813l44.931,30.824l-44.931,33.959V134.813z M94.041,49.654
				h271.673v166.139l-135.837,102.4l-135.837-102.4V49.654z M73.143,134.291v65.829l-44.931-34.482L73.143,134.291z M20.898,187.058
				l146.286,110.759L20.898,396.56V187.058z M45.976,404.919l138.971-93.518l37.094,28.212c2.1,1.623,4.661,2.538,7.314,2.612
				c2.09,0,3.135-1.045,5.224-2.612l38.661-29.78l140.539,95.086H45.976z M433.633,392.903l-143.151-96.131l143.151-109.714V392.903
				z"
                              />
                              <path
                                d="M146.286,117.572h47.02c5.771,0,10.449-4.678,10.449-10.449s-4.678-10.449-10.449-10.449h-47.02
				c-5.771,0-10.449,4.678-10.449,10.449S140.515,117.572,146.286,117.572z"
                              />
                              <path
                                d="M146.286,164.593h167.184c5.771,0,10.449-4.678,10.449-10.449s-4.678-10.449-10.449-10.449H146.286
				c-5.771,0-10.449,4.678-10.449,10.449S140.515,164.593,146.286,164.593z"
                              />
                              <path
                                d="M323.918,201.164c0-5.771-4.678-10.449-10.449-10.449H146.286c-5.771,0-10.449,4.678-10.449,10.449
				s4.678,10.449,10.449,10.449h167.184C319.24,211.613,323.918,206.935,323.918,201.164z"
                              />
                            </g>
                          </g>
                        </g>
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="icon-box-text last-reset">
                  <div>
                    <span className="sub-title">Email</span>
                    <span className="title" data-text-color="primary">
                      {websiteEmail}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="col medium-4 small-12 large-4">
          <div className="col-inner">
            <div className="text h-info">
              <span className="sub-title">Follow Us</span>
            </div>

            <div className="social-icons follow-icons">
              <a
                href={websiteFanpage}
                target="_blank"
                data-label="Facebook"
                rel="noopener noreferrer nofollow"
                className="icon button circle is-outline facebook tooltip tooltipstered"
                aria-label="Follow on Facebook"
              >
                <i className="icon-facebook" />
              </a>
              {/* <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                data-label="Instagram"
                className="icon button circle is-outline instagram tooltip tooltipstered"
                aria-label="Follow on Instagram"
              >
                <i className="icon-instagram" />
              </a>
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                data-label="TikTok"
                className="icon button circle is-outline tiktok tooltip tooltipstered"
                aria-label="Follow on TikTok"
              >
                <i className="icon-tiktok" />
              </a>
              <a
                href="https://nutscorner.net/#"
                target="_blank"
                rel="noopener noreferrer nofollow"
                data-label="YouTube"
                className="icon button circle is-outline youtube tooltip tooltipstered"
                aria-label="Follow on YouTube"
              >
                <i className="icon-youtube" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = state => ({
  config: state.setting.config,
});

export default connect(mapStateToProps)(ContractFollow);
