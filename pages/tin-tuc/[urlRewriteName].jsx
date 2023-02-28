import Head from "next/head";
import Layout from "../../source/layouts/Layout";
import { useDispatch } from "react-redux";
import React from "react";
import {
  getNewsDetail,
  getNewsList,
  getNewsListRelate,
} from "../../source/service/newsService";
import { getProductByCategory } from "../../source/service/productService";
import {
  getImageCdn,
  getLinkUrl,
  isEmpty,
  isEmptyObject,
} from "../../source/utils/utils";
import FutureTitle from "../../source/components/BoxSite/FutureTitle";
import Link from "next/link";
import ProductItem from "../../source/components/Product/ProductItem";
import SocialShare from "../../source/components/BoxSite/SocialShare";
import NewsRelate from "../../source/components/News/NewsRelate";
import LeftBarNews from "../../source/components/News/LeftBarNews";
import { EnumRoutingPage } from "../../source/constants/enum";

export async function getServerSideProps(context) {
  const { query, res } = context;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  
  const urlRewriteName = query.urlRewriteName;

  const newsDetail = await getNewsDetail({
    url: urlRewriteName,
  });

  const listNewsRelate = await getNewsListRelate({
    id: newsDetail.NewsId,
    p: 1,
    ps: 4,
  });

  let listProduct = [];
  if (newsDetail.CategoryProductId > 0) {
    listProduct = await getProductByCategory({
      id: newsDetail.CategoryProductId,
      p: 1,
      ps: 10,
    });
  }

  return {
    props: {
      newsDetail,
      listNewsRelate,
      listProduct,
    },
  };
}

const NewsDetail = (props) => {
  const { newsDetail, listNewsRelate, listProduct, config } = props;
  const {
    NewsName,
    NewsImage,
    NewsUrl,
    NewsDescription,
    CreatedDate,
    NewsId,
    NewsCategoryName = "",
    NewsCategoryUrl = "",
    NewsContent,
    CategoryProductId,
    AdsTitle,
  } = newsDetail || {};
  const roots = [
    {
      Url: getLinkUrl(EnumRoutingPage.CATEGORY_NEWS.id, NewsCategoryUrl),
      Name: NewsCategoryName,
    },
    {
      Url: "",
      Name: NewsName,
    },
  ];

  return (
    <Layout
      config={config}
      title={NewsName}
      description={NewsDescription}
      image={getImageCdn(NewsImage)}
    >
      <FutureTitle roots={roots} />
      <main id="main">
        <div className="blog-wrapper blog-single page-wrapper">
          <div className="row row-large row-divided ">
            <div className="large-9 col">
              <article className="post-4913 post type-post status-publish format-standard has-post-thumbnail hentry post-ftoc">
                <div className="img has-hover show-for-small x md-x lg-x y md-y lg-y">
                  <div className="img-inner dark">
                    <img
                      width="600"
                      height="600"
                      src={getImageCdn(NewsImage)}
                      className="attachment-original size-original"
                      alt={NewsName}
                    />
                  </div>
                </div>

                <div className="article-inner ">
                  <header className="entry-header">
                    <div className="entry-header-text entry-header-text-top text-left">
                      <h6 className="entry-category is-xsmall">
                        <Link
                          href={getLinkUrl(
                            EnumRoutingPage.CATEGORY_NEWS.id,
                            NewsCategoryUrl
                          )}
                          rel="category tag"
                        >
                          <a>{NewsCategoryName}</a>
                        </Link>
                      </h6>

                      <h1 className="entry-title">{NewsName}</h1>
                      <div className="entry-divider is-divider small" />
                    </div>
                  </header>
                  <div className="entry-content single-page">
                    <div className="single-desc lbp-active">
                      <div
                        id="ftwp-postcontent"
                        dangerouslySetInnerHTML={{
                          __html: NewsContent,
                        }}
                      ></div>
                    </div>

                    {!isEmptyObject(listProduct) ? (
                      <div className="related related-products-wrapper">
                        <h3 className="product-section-title container-width product-section-title-related pt-half pb-half uppercase">
                          {AdsTitle}
                        </h3>
                        <div className="col-inner">
                          <div className="row equalize-box large-columns-5 medium-columns-3 small-columns-2 row-normal">
                            {!isEmptyObject(listProduct)
                              ? listProduct.map((itemI) => {
                                return (
                                  <ProductItem
                                    key={itemI.ProductId}
                                    item={itemI}
                                  />
                                );
                              })
                              : ""}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="blog-share text-center">
                      <SocialShare title={NewsName} body={NewsDescription} />
                    </div>
                  </div>

                  {!isEmpty(NewsCategoryUrl) ? (
                    <footer className="entry-meta text-left">
                      <div className="danh-muc">
                        <span className="title">Danh mục:</span>{" "}
                        <Link
                          href={getLinkUrl(
                            EnumRoutingPage.CATEGORY_NEWS.id,
                            NewsCategoryUrl
                          )}
                          rel="category tag"
                        >
                          <a>{NewsCategoryName}</a>
                        </Link>
                      </div>
                    </footer>
                  ) : (
                    ""
                  )}

                  <NewsRelate listNewsRelate={listNewsRelate} />
                  {/* <div className="entry-author author-box">
                      <div className="flex-row align-top">
                        <div className="flex-col mr circle">
                          <div className="blog-author-image">
                            <img
                              alt=""
                              src="https://secure.gravatar.com/avatar/4bf86e3fe881a194bd4a898586a48b4d?s=90&amp;d=mm&amp;r=g"
                              className="avatar avatar-90 photo lazy-load-active"
                              height="90"
                              width="90"
                            />
                          </div>
                        </div>
                        <div className="flex-col flex-grow">
                          <h5 className="author-name uppercase pt-half">
                            Admin
                          </h5>
                          <p className="author-desc small" />
                        </div>
                      </div>
                    </div> */}
                </div>
              </article>
            </div>
            <div className="post-sidebar large-3 col">
              <LeftBarNews />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default NewsDetail;
