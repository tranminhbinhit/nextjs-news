/* eslint-disable */
import React, { Component, useState } from "react";
import { NotificationManager } from "react-notifications";
import { connect } from "react-redux";
import { startAppLoading, stopAppLoading } from "../../../redux/action/mainAction";
import { getSettingSystem } from "../../../service/settingService";
import { createConsultancyContract } from "../../../service/staticService";
import { getSettingValue } from "../../../utils/utils";

const ContractForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const { config, startAppLoadingConnect, stopAppLoadingConnect } = props;
  const { PD_SEO_WEBSITE_NAME } = config || {};
  const websiteName = getSettingValue(PD_SEO_WEBSITE_NAME);

  const handleSubmit = async (event) => {
    event.preventDefault();

    var reqParams = {
      ContractName: fullName,
      ContractEmail: email,
      ContractAddress: "",
      ContractPhone: phoneNumber,
      Description: "Đăng ký nhận khuyến mãi",
      ConsultancyContractTypeId: 1,
    };
    startAppLoadingConnect();
    var res = await createConsultancyContract(reqParams);
    if (res.ID > 0) {
      setEmail("");
      setFullName("");
      setPhoneNumber("");
      NotificationManager.success("Gởi yêu cầu thành công");
      stopAppLoadingConnect();
    }
  };

  return (
    <React.Fragment>
      <div className="row align-center">
        <div className="col medium-8 small-12 large-8">
          <div className="col-inner text-center">
            <div className="text">
              <p className="text-center">
                <span style={{ fontSize: "150%" }}>
                  <strong>Đăng Ký Nhận thông tin từ {websiteName}</strong>
                </span>
              </p>
              <p>
                Để lại thông tin của bạn để nhận được nhiều chương trình khuyến
                mãi sớm nhất từ {websiteName}
              </p>
            </div>

            <div className="wpcf7">
              <div className="wpcf7-form init">
                <form onSubmit={handleSubmit}>
                  <span className="wpcf7-form-control-wrap your-name">
                    <input
                      type="text"
                      name="fullName"
                      size="40"
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      placeholder="Họ và tên..."
                      value={fullName}
                      required
                      onChange={(event) => {
                        setFullName(event.target.value);
                      }}
                    />
                  </span>
                  <br />
                  <span className="wpcf7-form-control-wrap your-email">
                    <input
                      type="email"
                      name="your-email"
                      value={email}
                      size="40"
                      placeholder="Nhập email cá nhân"
                      className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </span>
                  <br />
                  <span className="wpcf7-form-control-wrap your-tel">
                    <input
                      type="tel"
                      name="your-tel"
                      value={phoneNumber}
                      size="40"
                      className=""
                      placeholder="Số điện thoại..."
                      onChange={(event) => {
                        setPhoneNumber(event.target.value);
                      }}
                    />
                  </span>
                  <br />
                  <input
                    type="submit"
                    value="Gửi Đi"
                    className="wpcf7-form-control has-spinner wpcf7-submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  config: state.setting.config,
});
const mapDispatchToProps = (dispatch) => ({
  startAppLoadingConnect: (setting) => {
    dispatch(startAppLoading(setting));
  },
  stopAppLoadingConnect: () => {
    dispatch(stopAppLoading());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ContractForm);
