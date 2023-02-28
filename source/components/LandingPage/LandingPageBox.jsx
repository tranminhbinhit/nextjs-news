/* eslint-disable */
import {
  getImageCdn,
  getLinkUrl,
  isEmpty,
  isEmptyObject,
  showChartMax,
} from "../../utils/utils";
import React, { Component } from "react";
import ProductItem from "../../components/Product/ProductItem";
import { EnumBoxDetailViewType, EnumRoutingPage } from "../../constants/enum";
import LoadingBox from "../../components/Loading/LoadingBox";
import Link from "next/link";

class LandingPageBox extends Component {
  viewBoxNews = (item) => {
    const { NewsName, NewsImage, NewsUrl, NewsDescription, NewsId } =
      item || {};
    return (
      <div className="col post-item" key={`key-box-news-${NewsId}`}>
        <div className="col-inner">
          <Link href={getLinkUrl(EnumRoutingPage.NEWS.id, NewsUrl, NewsId)}>
            <a className="plain">
              <div className="box box-normal box-text-bottom box-blog-post has-hover">
                <div className="box-image">
                  <div className="image-cover">
                    <img
                      width="300"
                      height="188"
                      src={getImageCdn(NewsImage)}
                      alt={NewsName}
                    />
                  </div>
                </div>
                <div className="box-text">
                  <div className="box-text-inner blog-post-inner">
                    <h5 className="post-title">{NewsName}</h5>
                    {/* <div className="post-meta is-small op-8">25/11/2021</div> */}
                    <div className="is-divider" />
                    <p className="from_the_blog_excerpt">{showChartMax(NewsDescription, 80)}</p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    );
  };

  viewBoxHtml = (item) => {
    const { Content, Id } = item || {};
    return (
      <div
        className="p15"
        key={`key-box-html-${Id}`}
        dangerouslySetInnerHTML={{
          __html: Content,
        }}
      />
    );
  };

  viewBoxItem = (box) => {
    const {
      LandingPageBoxId,
      LandingPageBoxName,
      LandingPageBoxUrl = "",
      DataViewTypeId,
      ListData: listData,
    } = box;
    return (
      <div className="section-content relative">
        <div className="row h-pro">
          <div className="col small-12 large-12">
            <div className="col-inner">
              {!isEmpty(LandingPageBoxName) ? (
                <div className="container section-title-container h-title">
                  <h2 className="section-title section-title-normal">
                    <b />
                    <span className="section-title-main">
                      {LandingPageBoxName}
                    </span>
                    <b />
                  </h2>
                </div>
              ) : (
                ""
              )}
              <div className="row equalize-box large-columns-5 medium-columns-3 small-columns-2 row-normal landing-page">
                {listData.map((item) => {
                  const {
                    DataImage,
                    DataName,
                    DataUrl,
                    Id,
                    ProductPrice,
                    BoxDetailViewTypeId: boxDetailViewTypeId,
                    Content,
                    DataDescription,
                  } = item || {};

                  if (boxDetailViewTypeId == EnumBoxDetailViewType.PRODUCT.id) {
                    const itemProduct = {
                      ProductImage: DataImage,
                      ProductName: DataName,
                      ProductUrl: DataUrl,
                      ProductId: Id,
                      ProductPrice,
                    };
                    return (
                      <ProductItem
                        key={`key-box-pro-${Id}`}
                        item={itemProduct}
                      />
                    );
                  } else if (
                    boxDetailViewTypeId == EnumBoxDetailViewType.NEWS.id
                  ) {
                    const itemNews = {
                      NewsName: DataName,
                      NewsImage: DataImage,
                      NewsUrl: DataUrl,
                      NewsDescription: DataDescription,
                      NewsId: Id,
                    };
                    return this.viewBoxNews(itemNews);
                  } else {
                    const itemHtml = { Content, Id };
                    return this.viewBoxHtml(itemHtml);
                  }
                })}
              </div>
            </div>
          </div>

          {!isEmpty(LandingPageBoxUrl) ? (
            <div className="col small-12 large-12">
              <div className="col-inner text-center">
                <Link href={LandingPageBoxUrl}>
                  <a
                    className="button primary btn-showmore"
                    data-animate="fadeInUp"
                    data-animated="true"
                  >
                    <span>Xem Thêm</span>
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };

  render() {
    let { listDataPage } = this.props;
    listDataPage = listDataPage.filter((m) => !isEmptyObject(m.ListData));
    return (
      <React.Fragment>
        <LoadingBox loading_number={10} show={isEmptyObject(listDataPage)} />
        {!isEmptyObject(listDataPage)
          ? listDataPage.map((dataBox) => (
              <section key={dataBox.LandingPageBoxId} className="section">
                {!isEmptyObject(listDataPage) ? (
                  this.viewBoxItem(dataBox)
                ) : (
                  <div>Nội dung đang được cập nhật</div>
                )}
              </section>
            ))
          : ""}
      </React.Fragment>
    );
  }
}

export default LandingPageBox;
