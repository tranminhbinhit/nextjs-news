import Head from "next/head";
import Layout from "../source/layouts/Layout";
import { connect, useDispatch } from "react-redux";
import React from "react";
import { getProductSearch } from "../source/service/productService";
import ProductItem from "../source/components/Product/ProductItem";
import LeftLandingPage from "../source/components/LandingPage/LeftLandingPage";
import LeftCategory from "../source/components/Category/LeftCategory";
import FutureTitle from "../source/components/BoxSite/FutureTitle";
import { getLinkUrl, isEmptyObject } from "../source/utils/utils";
import { useRouter } from "next/router";
import OrderInfo from "../source/components/Cart/OrderInfo";
import PaymentInfo from "../source/components/Cart/PaymentInfo";
import Link from "next/link";

export async function getServerSideProps(context) {
  return {
    props: {
    },
  };
}

const CartProduct = (props) => {
  const { config, cart } = props;
  const { TotalAmount, TotalItem, ListItem } = cart;

  const router = useRouter();
  // const handlePageClick = (event) => {
  //   const link = `${getLinkUrl(EnumRoutingPage.SEARCH.id,keySearch)}&p=${event.selected + 1}`;
  //   router.push(link);
  // }

  const roots = [
    {
      Url: '',
      Name: `Giỏ hàng`,
    },
  ];

  return (
    <Layout title={`Giỏ hàng`} config={config}>
      <FutureTitle roots={roots} />
      <main id="main">
        <div className="row page-wrapper">
          <div id="content" className="large-12 col" role="main">
            <header className="entry-header text-center">
              <h1 className="entry-title">Giỏ hàng</h1>
              <div className="is-divider medium" />
            </header>
            <div className="entry-content">
              <div className="woocommerce">
                <div className="woocommerce-notices-wrapper" />
                {!isEmptyObject(ListItem) ? (
                  <div className="woocommerce row row-large row-divided">
                    <div className="col large-7 pb-0 ">
                      <OrderInfo />
                    </div>
                    <div className="large-5 col pb-0">
                      <PaymentInfo />
                    </div>
                  </div>
                ) : (
                  <div className="text-center pt pb">
                    <div className="woocommerce-notices-wrapper"></div>
                    <p className="cart-empty woocommerce-info">Chưa có sản phẩm nào trong giỏ hàng.</p>
                    <p className="return-to-shop">
                      <Link href="/">
                        <a className="button primary wc-backward" >
                          Quay trở lại cửa hàng
                        </a>
                      </Link>
                    </p>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartProduct);
