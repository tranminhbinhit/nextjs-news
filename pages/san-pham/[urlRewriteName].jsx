import Layout from "../../source/layouts/Layout";
import { useDispatch } from "react-redux";
import React from "react";
import {
  getProductDetail,
  getProductListRelate,
} from "../../source/service/productService";
import {
  formatCurrency,
  getImageCdn,
  getLinkUrl,
  isEmpty,
} from "../../source/utils/utils";
import ReplaceProduct from "../../source/components/Product/ReplaceProduct";
import RightInfoProduct from "../../source/components/Product/RightInfoProduct";
import SocialShare from "../../source/components/BoxSite/SocialShare";
import Link from "next/link";
import ButtonAddToCard from "../../source/components/BoxSite/ButtonAddToCard";
import FutureTitle from "../../source/components/BoxSite/FutureTitle";
import { EnumRoutingPage } from "../../source/constants/enum";

export async function getServerSideProps(context) {
  const { query, res } = context;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );

  const urlRewriteName = query.urlRewriteName;
  const listRewrite = (urlRewriteName || "").split("-p");
  const productId = listRewrite.slice(-1)[0];

  const productDetail = await getProductDetail({
    id: productId,
  });

  const listProductRelate = await getProductListRelate({
    id: productId,
  });

  return {
    props: {
      productDetail,
      listProductRelate,
    },
  };
}

const ProductDetail = (props) => {
  const { productDetail, listProductRelate, config } = props;

  const {
    ProductId: productId,
    CategoryName: categoryName,
    CategoryUrl: categoryUrl,
    ProductCode: productCode,
    ProductUrl: productUrl,
    ProductName: productName,
    ProductDescription: productDescription,
    ProductDesc: productDesc,
    ProductContent: productContent,
    ProductImage: productImage,
    ProductPrice: productPrice,
    ListProductImage: listProductImage,
  } = productDetail || {};

  const roots = [
    {
      Url: getLinkUrl(EnumRoutingPage.CATEGORY.id, categoryUrl),
      Name: categoryName,
    },
    {
      Url: getLinkUrl(EnumRoutingPage.PRODUCT.id, productUrl, productId),
      Name: productName,
    },
  ];

  return (
    <Layout
      config={config}
      title={productName}
      description={productDesc}
      image={getImageCdn(productImage)}
    >
      <FutureTitle roots={roots} />
      <main id="main">
        <div className="shop-container">
          <div className="product type-product status-publish first instock shipping-taxable purchasable product-type-simple">
            <div className="product-container">
              <div className="product-main">
                <div className="row mb-0 content-row">
                  <div className="product-gallery large-5 col">
                    <div
                      className="product-images relative mb-half has-hover woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images"
                      data-columns="4"
                    >
                      <img
                        width="900"
                        height="900"
                        src={getImageCdn(productImage)}
                        className="wp-post-image skip-lazy lazy-load-active"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="product-info summary col-fit col-divided col entry-summary product-summary text-left">
                    <h1 className="product-title product_title entry-title">
                      {productName}
                    </h1>

                    {/* <div className="woocommerce-product-rating">
                        <div className="star-rating star-rating--inline">
                          <span className="w100p">
                            <strong className="rating">5.00</strong> trên 5 dựa
                            trên
                            <span className="rating">1</span> đánh giá
                          </span>
                        </div>
                        <a
                          href="#reviews"
                          className="woocommerce-review-link"
                          rel="nofollow"
                        >
                          (<span className="count">1</span> đánh giá của khách
                          hàng)
                        </a>
                      </div> */}

                    <div className="price-wrapper">
                      <p className="price product-page-price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>{formatCurrency(productPrice)}</bdi>
                        </span>
                      </p>
                    </div>
                    {!isEmpty(productDesc) ? (
                      <div className="product-short-description">
                        <p>
                          <b>Mô tả:</b>
                        </p>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: productDescription,
                          }}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <p className="stock in-stock">Còn hàng</p>
                    <div className="cart">
                      <ButtonAddToCard
                        isHaveQuatity={true}
                        product={productDetail}
                      />
                    </div>

                    <div className="product_meta">
                      <span className="posted_in">
                        Danh mục:
                        <Link
                          href={getLinkUrl(
                            EnumRoutingPage.CATEGORY.id,
                            categoryUrl
                          )}
                        >
                          <a>{categoryName}</a>
                        </Link>
                      </span>
                    </div>
                    <SocialShare title={productName} body={productDesc} />
                  </div>
                  <RightInfoProduct />
                </div>
              </div>

              <div className="product-footer">
                <div className="container">
                  <div className="product-page-sections">
                    <div className="product-section">
                      <div className="row">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: productContent,
                          }}
                          className="large-12 col pb-0 mb-0 lbp-active"
                        />
                      </div>
                    </div>
                  </div>
                  <ReplaceProduct listData={listProductRelate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProductDetail;
