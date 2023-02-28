/* eslint-disable */
import React, { Component } from 'react';

class NewsComment extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section news-short">
          <div className="bg section-bg fill bg-fill bg-loaded bg-loaded" />

          <div className="section-content relative">
            <div
              className="row align-equal align-center h-pro h-5b hide-for-small"
            >
              <div className="col medium-2 small-6 large-2">
                <div className="col-inner">
                  <div className="icon-box featured-box icon-box-center text-center">
                    <div className="icon-box-img">
                      <div className="icon">
                        <div className="icon-inner">
                          <img
                            width="100"
                            height="100"
                            src="https://nutscorner.net/wp-content/uploads/2021/05/f5.jpg"
                            className="lazy-load attachment-medium size-medium"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="icon-box-text last-reset">
                      <h5>NHẬP KHẨU CHÍNH HÃNG</h5>
                      <p>Được nhập khẩu từ các nước nổi tiếng như: Úc, Mỹ…</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col medium-2 small-6 large-2">
                <div className="col-inner">
                  <div className="icon-box featured-box icon-box-center text-center">
                    <div className="icon-box-img">
                      <div className="icon">
                        <div className="icon-inner">
                          <img
                            width="100"
                            height="100"
                            src="https://nutscorner.net/wp-content/uploads/2021/05/f4.jpg"
                            className="lazy-load attachment-medium size-medium"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="icon-box-text last-reset">
                      <h5>KHUYẾN MÃI HẤP DẪN</h5>
                      <p>
                        Nut Corner luôn có những event khuyến mãi, ưu đãi lớn
                        dành cho Quý Khách Hàng.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default NewsComment;
