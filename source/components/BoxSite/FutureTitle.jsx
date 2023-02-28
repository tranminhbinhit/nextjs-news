/* eslint-disable*/
import Link from "next/link";
import React, { Component } from "react";
import { isEmpty, toUcfirst, isEmptyObject } from "../../utils/utils";

class FutureTitle extends Component {
  render() {
    const { roots } = this.props;
    return (
      <div className="shop-page-title product-page-title dark page-title featured-title">
        <div className="page-title-bg fill">
          <div className="title-bg fill bg-fill parallax-active" />
          <div className="title-overlay fill" />
        </div>

        <div className="page-title-inner container">
          <div className="medium-text-center">
            <div className="is-medium">
              <nav className="breadcrumbs uppercase">
                <Link href="/">
                  <a>Trang chủ</a>
                </Link>
                {!isEmptyObject(roots)
                  ? roots.map((root) => {
                      root.Name = toUcfirst(root.Name);
                      return (
                        <React.Fragment key={`key${root.Url}`}>
                          <span className="divider">/</span>
                          {!isEmpty(root.Url) ? (
                            <Link href={root.Url}>
                              <a>{root.Name}</a>
                            </Link>
                          ) : (
                            root.Name
                          )}
                        </React.Fragment>
                      );
                    })
                  : ""}
              </nav>
            </div>
          </div>

          <div className="flex-col nav-right medium-text-center" />
        </div>
      </div>
    );
  }
}

export default FutureTitle;
