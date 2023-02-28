import Head from "next/head";
import Layout from "../../source/layouts/Layout";
import { useDispatch } from "react-redux";
import React from "react";
import {
  getProductByCategory,
  getProductDetail,
  getProductListRelate,
} from "../../source/service/productService";
import { getCategoryDetail } from "../../source/service/categoryService";
import {
  isEmpty,
  getImageCdn,
  getLinkUrl,
  isEmptyObject,
} from "../../source/utils/utils";
import FutureTitle from "../../source/components/BoxSite/FutureTitle";
import LeftCategory from "../../source/components/Category/LeftCategory";
import LeftLandingPage from "../../source/components/LandingPage/LeftLandingPage";
import ProductItem from "../../source/components/Product/ProductItem";
import PaginatePage from "../../source/components/BoxSite/PaginatePage";
import { EnumRoutingPage } from "../../source/constants/enum";
import { useRouter } from "next/router";
import { COMMON_CONST } from "../../source/constants/constants";

export async function getServerSideProps(context) {
  const { query, res } = context;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const { urlRewriteName, p = 1 } = query;

  const categoryInfo = await getCategoryDetail({
    name_rewrite: urlRewriteName,
  });

  const listProduct = await getProductByCategory({
    id: categoryInfo.CategoryId,
    p: p,
    ps: COMMON_CONST.PageSize,
  });

  return {
    props: {
      categoryInfo,
      listProduct,
      pageNumber : p,
    },
  };
}

const CategoryDetail = (props) => {
  const { categoryInfo, listProduct, config, pageNumber } = props;
  const categoryImage = !isEmpty(categoryInfo.CategoryImage)
    ? getImageCdn(categoryInfo.CategoryImage)
    : "";
  const roots = [
    {
      Url: getLinkUrl(EnumRoutingPage.CATEGORY.id, categoryInfo.CategoryUrl),
      Name: categoryInfo.CategoryName,
    },
  ];

  //Phân trang
  const totalRows = !isEmptyObject(listProduct) ? listProduct[0].TotalRows : 0;
  const router = useRouter();
  const handlePageClick = (event) => {
    const urlCategory = getLinkUrl(
      EnumRoutingPage.CATEGORY.id,
      categoryInfo.CategoryUrl
    );
    const link = `${urlCategory}?p=${event.selected + 1}`;
    router.push(link);
  };

  return (
    <Layout
      config={config}
      title={categoryInfo.CategoryName}
      image={categoryImage}
    >
      <FutureTitle roots={roots} />
      <main id="main">
        <div className="row category-page-row">
          <div className="col large-3 hide-for-medium ">
            <div className="sidebar-inner col-inner">
              <LeftCategory categoryId={categoryInfo.CategoryId} />
              <LeftLandingPage />
            </div>
          </div>

          <div className="col large-9">
            <div className="shop-container">
              <div className="products row row-small large-columns-4 medium-columns-3 small-columns-2 equalize-box">
                {!isEmptyObject(listProduct)
                  ? listProduct.map((product) => (
                      <ProductItem key={product.ProductId} item={product} />
                    ))
                  : ""}
              </div>
              <div className="container">
                <PaginatePage
                  handlePageClick={handlePageClick}
                  totalRow={totalRows}
                  pageSize={COMMON_CONST.PageSize}
                  pageNumber={pageNumber}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default CategoryDetail;
