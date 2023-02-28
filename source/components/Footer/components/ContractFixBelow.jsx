/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import { formatPhone, getSettingValue } from "../../../utils/utils";

const ContractButton = ({ config }) => {
  const { CONTRACT_HOTLINE, CONTRACT_CHAT, CONTRACT_ZALO, CONTRACT_MAP_URL } =
    config || {};

  const contractHotline = getSettingValue(CONTRACT_HOTLINE);
  const contractChat = getSettingValue(CONTRACT_CHAT);
  const contractZalo = getSettingValue(CONTRACT_ZALO);
  const contractMap = getSettingValue(CONTRACT_MAP_URL);
  return (
    <React.Fragment>
      <section className="section b-addon">
        <div className="bg section-bg fill bg-fill bg-loaded bg-loaded">
          <div className="section-bg-overlay absolute fill" />
        </div>

        <div className="section-content relative">
          {contractHotline ? (
            <a className="plain" href={`tel:${contractHotline}`}>
              <div className="icon-box featured-box i-move icon-box-left text-left">
                <div className="icon-box-img w30">
                  <div className="icon">
                    <div
                      className="icon-inner"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      <img
                        width="64"
                        height="64"
                        src={"/images/whatsapp.png"}
                        className="attachment-medium size-medium"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="icon-box-text last-reset">
                  <p>{formatPhone(getSettingValue(CONTRACT_HOTLINE), ".")}</p>
                </div>
              </div>
            </a>
          ) : (
            ""
          )}
          {contractChat ? (
            <a
              className="plain"
              href={contractChat}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-box featured-box i-move icon-box-left text-left">
                <div className="icon-box-img w30">
                  <div className="icon">
                    <div
                      className="icon-inner"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      <img
                        width="64"
                        height="64"
                        src={"/images/messenger.png"}
                        className="attachment-medium size-medium"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="icon-box-text last-reset">
                  <p>Facebook Chat</p>
                </div>
              </div>
            </a>
          ) : (
            ""
          )}

          {contractZalo ? (
            <a
              className="plain"
              href={contractZalo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-box featured-box i-move icon-box-left text-left">
                <div className="icon-box-img w30">
                  <div className="icon">
                    <div className="icon-inner">
                      <img
                        width="64"
                        height="64"
                        src={"/images/zalo.png"}
                        className="attachment-medium size-medium"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="icon-box-text last-reset">
                  <p>Zalo Chat</p>
                </div>
              </div>
            </a>
          ) : (
            ""
          )}

          {contractMap ? (
            <a
              className="plain"
              href={contractMap}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-box featured-box icon-box-left text-left">
                <div className="icon-box-img w30">
                  <div className="icon">
                    <div
                      className="icon-inner"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      <img
                        width="64"
                        height="64"
                        src={"/images/map.png"}
                        className="attachment-medium size-medium"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="icon-box-text last-reset">
                  <p>Bản Đồ</p>
                </div>
              </div>
            </a>
          ) : (
            ""
          )}
        </div>
      </section>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  config: state.setting.config,
});

export default connect(mapStateToProps)(ContractButton);
