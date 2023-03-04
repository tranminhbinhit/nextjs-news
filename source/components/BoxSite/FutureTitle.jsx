/* eslint-disable*/
import Link from "next/link";
import React, { Component } from "react";
import { isEmpty, toUcfirst, isEmptyObject } from "../../utils/utils";

class FutureTitle extends Component {
  render() {
    const { roots } = this.props;
    return (
      <div className="jeg_breadcrumbs jeg_breadcrumb_container">
        <div id="breadcrumbs">
          <span className="">
            <Link href="/">
              <a>Trang chủ</a>
            </Link>
          </span>
          {!isEmptyObject(roots)
            ? roots.map((root) => {
              root.Name = toUcfirst(root.Name);
              return (
                <React.Fragment key={`key${root.Url}`}>
                  <i className="fa fa-angle-right"></i>
                  {!isEmpty(root.Url) ? (
                    <span className="breadcrumb_last_link">
                      <Link href={root.Url}>
                        <a>{root.Name}</a>
                      </Link>
                    </span>
                  ) : (
                    root.Name
                  )}
                </React.Fragment>
              );
            })
            : ""}
        </div>
      </div>
    );
  }
}

export default FutureTitle;
