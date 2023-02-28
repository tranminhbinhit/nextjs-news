/* eslint-disable*/
import React, { Component } from "react";
import { getImageCdn, getLinkUrl, formatCurrency } from "../../utils/utils";
import { EnumRoutingPage } from "../../constants/enum";
import LazyImage from "../../components/BoxSite/LazyImage";
import ButtonAddToCard from "../../components/BoxSite/ButtonAddToCard";
import Link from "next/link";

const ProductItem = ({ item, config }) => {
  const { ProductImage, ProductName, ProductUrl, ProductId, ProductPrice } =
    item || {};
  const urlData = getLinkUrl(EnumRoutingPage.PRODUCT.id, ProductUrl, ProductId);

  return (
    <div className="col has-hover">
      <div className="col-inner">
        {/* <div className="badge-container absolute left top z-1">
          <div className="callout badge badge-circle">
            <div className="badge-inner secondary on-sale">
              <span className="onsale">-13%</span>
            </div>
          </div>
        </div> */}
        <div className="product-small box">
          <div className="box-image">
            <div className="image-zoom">
              <Link href={urlData}>
                <a>
                  <LazyImage
                    link={getImageCdn(ProductImage)}
                    offset={50}
                    alt={ProductName}
                    title={ProductName}
                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="box-text box-text-products text-center grid-style-2">
            <div className="title-wrapper">
              <p className="name product-title woocommerce-loop-product__title">
                <Link
                  href={urlData}
                >
                  <a className="woocommerce-LoopProduct-link woocommerce-loop-product__link">{ProductName}</a>
                </Link>
              </p>
            </div>
            <div className="price-wrapper">
              {/* <div
                className="star-rating"
                role="img"
                aria-label="Được xếp hạng 5.00 5 sao"
              >
                <span className="w100p">
                  Được xếp hạng
                  <strong className="rating">5.00</strong> 5 sao
                </span>
              </div> */}
              <span className="price">
                {/* <del aria-hidden="true">
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                    {formatCurrency(ProductPrice)}
                    </bdi>
                  </span>
                </del> */}
                <ins>
                  <span className="woocommerce-Price-amount amount">
                    <bdi>{formatCurrency(ProductPrice)}</bdi>
                  </span>
                </ins>
              </span>
            </div>
            <div className="add-to-cart-button">
              <ButtonAddToCard
                className="primary is-small mb-0"
                isHaveQuatity={false}
                product={item}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
