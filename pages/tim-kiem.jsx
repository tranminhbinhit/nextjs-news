import Head from "next/head";
import Layout from "../source/layouts/Layout";
import { useDispatch } from "react-redux";
import React from "react";
import { getProductSearch } from "../source/service/productService";
import ProductItem from "../source/components/Product/ProductItem";
import LeftLandingPage from "../source/components/LandingPage/LeftLandingPage";
import LeftCategory from "../source/components/Category/LeftCategory";
import FutureTitle from "../source/components/BoxSite/FutureTitle";
import { getLinkUrl, isEmptyObject } from "../source/utils/utils";
import EmptyData from "../source/components/BoxSite/EmptyData";
import PaginatePage from "../source/components/BoxSite/PaginatePage";
import { useRouter } from "next/router";
import { EnumRoutingPage } from "../source/constants/enum";
import {COMMON_CONST} from '../source/constants/constants';

export async function getServerSideProps(context) {
  const { query, res } = context;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const { key, p = 1 } = query;
  const listProduct = await getProductSearch({
    search_text: key,
    p: p,
    ps: COMMON_CONST.PageSize,
  });

  return {
    props: {
      listProduct,
      keySearch: key,
      pageNumber : p,
    },
  };
}

const SearchProduct = (props) => {
  const { listProduct, keySearch, config, pageNumber } = props;
  
  const router = useRouter();
  const handlePageClick = (event) => {
    const link = `${getLinkUrl(EnumRoutingPage.SEARCH.id,keySearch)}&p=${event.selected + 1}`;
    router.push(link);
  }

  const roots = [
    {
      Url: '',
      Name: `Tìm kiếm với từ khóa "${keySearch}"`,
    },
  ];

  const totalRows = !isEmptyObject(listProduct) ? listProduct[0].TotalRows : 0;

  return (
    <Layout title={`Tìm kiếm ${keySearch}`} config={config}>
      <FutureTitle roots={roots} />
      <main id="main">
        <div className="row category-page-row">
          <div className="col large-3 hide-for-medium ">
            <div className="sidebar-inner col-inner">
              <LeftCategory />
              <LeftLandingPage />
            </div>
          </div>

          <div className="col large-9">
            <div className="shop-container">
              <div className="woocommerce-notices-wrapper" />
              <div className="products row row-small large-columns-4 medium-columns-3 small-columns-2 equalize-box">
                {!isEmptyObject(listProduct)
                  ? listProduct.map(product => (
                    <ProductItem key={product.ProductId} item={product} />
                  ))
                  : ''}
                <EmptyData listData={listProduct} title="Không tìm thấy dữ liệu" />
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

export default SearchProduct;
