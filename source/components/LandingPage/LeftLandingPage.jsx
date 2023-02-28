/* eslint-disable */
import Link from "next/link";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  EnumBoxDetailViewType,
  EnumLandingPageType,
  EnumRoutingPage,
} from "../../constants/enum";
import {
  getLadingPage,
  getLadingPageBox,
} from "../../service/landingPageService";
import {
  formatCurrency,
  getImageCdn,
  getLinkUrl,
  isEmpty,
  isEmptyObject,
} from "../../utils/utils";

class LeftLandingPage extends Component {
  state = {
    listDataPage: [],
  };

  loadInitData = async () => {
    const landingPage = await getLadingPage({
      type: EnumLandingPageType.TAB.id,
    });
    const listDataPage = await getLadingPageBox({
      id: landingPage.LandingPageId,
    });
    this.setState({
      ...this.state,
      listDataPage,
    });
  };

  componentDidMount() {
    this.loadInitData();
  }

  viewBoxProduct = (item) => {
    const { DataImage, DataName, DataUrl, Id, ProductPrice } = item || {};
    const urlData = getLinkUrl(EnumRoutingPage.PRODUCT.id, DataUrl, Id);
    return (
      <li key={`key-box-pro-${Id}`}>
        <Link href={urlData}>
          <a>
            <img
              width="100"
              height="100"
              src={getImageCdn(DataImage)}
              className="lazy-load attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
              alt=""
            />
            <span className="product-title">{DataName}</span>
          </a>
        </Link>
        {/* <del aria-hidden="true">
          <span className="woocommerce-Price-amount amount">
            <bdi>
              {formatCurrency(ProductPrice)}
              <span className="woocommerce-Price-currencySymbol">₫</span>
            </bdi>
          </span>
        </del>{" "} */}
        <ins>
          <span className="woocommerce-Price-amount amount">
            <bdi>{formatCurrency(ProductPrice)}</bdi>
          </span>
        </ins>
      </li>
    );
  };

  viewBoxNews = (item) => {
    const {
      DataName: NewsName,
      DataImage: NewsImage,
      DataUrl: NewsUrl,
      Id: NewsId,
    } = item || {};
    return (
      <li key={`key-box-news-${NewsId}`}>
        <Link href={getLinkUrl(EnumRoutingPage.NEWS.id, NewsUrl, NewsId)}>
          <a>
            <img
              width="100"
              height="100"
              src={getImageCdn(NewsImage)}
              className="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail"
              alt={NewsName}
            />
            <span className="product-title">{NewsName}</span>
          </a>
        </Link>
      </li>
    );
  };

  viewBoxHtml = (item) => {
    const { Content, Id } = item || {};
    return (
      <div
        className="post-item"
        key={`key-box-html-${Id}`}
        dangerouslySetInnerHTML={{
          __html: Content,
        }}
      />
    );
  };

  viewBoxItem = (box) => {
    const {
      LandingPageBoxName,
      LandingPageBoxUrl,
      DataViewTypeId,
      ListData: listData,
    } = box;
  };

  render() {
    let { listDataPage } = this.state;
    listDataPage = listDataPage.filter((m) => !isEmptyObject(m.ListData));
    return !isEmptyObject(listDataPage) ? (
      <React.Fragment>
        {listDataPage.map((dataBox) => {
          const {
            LandingPageBoxId,
            LandingPageBoxName,
            ListData: listData,
          } = dataBox || {};
          return (
            <aside
              className="widget woocommerce widget_products"
              key={`box-${LandingPageBoxId}`}
            >
              {!isEmpty(LandingPageBoxName) ? (
                <span className="widget-title shop-sidebar">
                  {LandingPageBoxName}
                </span>
              ) : (
                ""
              )}
              <ul className="product_list_widget">
                {listData.map((item) => {
                  const { BoxDetailViewTypeId: boxDetailViewTypeId } =
                    item || {};
                  if (boxDetailViewTypeId == EnumBoxDetailViewType.PRODUCT.id) {
                    return this.viewBoxProduct(item);
                  } else if (
                    boxDetailViewTypeId == EnumBoxDetailViewType.NEWS.id
                  ) {
                    return this.viewBoxNews(item);
                  }
                  return this.viewBoxHtml(item);
                })}
              </ul>
            </aside>
          );
        })}
      </React.Fragment>
    ) : (
      ""
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(LeftLandingPage);
