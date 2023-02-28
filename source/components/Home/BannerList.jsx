/* eslint-disable*/
import Link from 'next/link';
import React, { Component } from 'react';
import { getImageCdn, isEmpty } from '../../utils/utils';

class BannerList extends Component {
  render() {
    const { listBanner } = this.props;
    return (
      <React.Fragment>
        <section className="section">
          <div className="bg section-bg fill bg-fill bg-loaded bg-loaded" />

          <div className="section-content relative">
            <div className="row" >
              {listBanner.map(m =>
                <div className="col medium-4 small-12 large-4" key={`Banner-List-${m.BannerId}`}>
                  <div className="col-inner">
                    <div
                      className="banner has-hover bg-zoom banner-box"
                    >
                      <div className="banner-inner fill">
                        <div className="banner-bg fill">
                          <div className="bg fill bg-fill bg-loaded" style={{
                            backgroundImage: `url("${getImageCdn(m.BannerImage)}")`,
                          }} />
                          <div className="overlay" />
                        </div>
                        <div className="banner-layers container">
                          <div className="fill banner-link" />
                          <div
                            className="text-box banner-layer x5 md-x5 lg-x5 y50 md-y50 lg-y50 res-text"
                          >
                            <div className="text-box-content text dark">
                              <div className="text-inner text-left">
                                <h2>
                                  {
                                    !isEmpty(m.RedirectUrl) ? (<Link href={m.RedirectUrl}>
                                      <a>
                                        {m.BannerName}
                                      </a>
                                    </Link>) : m.BannerName
                                  }
                                </h2>
                                {
                                  !isEmpty(m.RedirectUrl) ? (
                                    <Link href={m.RedirectUrl}>
                                      <a className="button white is-underline is-large lowercase">
                                        <span>Xem chi tiết</span>
                                        <i className="icon-angle-right" />
                                      </a>
                                    </Link>
                                  ) : ''}

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default BannerList;
