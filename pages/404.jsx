import Layout from "../source/layouts/Layout";
import React from "react";
import Link from "next/link";

const NotFound = (props) => {
  const { config } = props;
  return (
    <Layout config={config}>
      <main className="site-main container pt" role="main">
        <section className="error-404 not-found mt mb">
          <div className="row text-center">
            <div className="col medium-3"><span className="header-font" style={{ fontSize: '6em', fontWeight: 'bold', opacity: '.3' }}>404</span></div>
            <div className="col medium-9">
              <header className="page-title">
                <h1 className="page-title">Rất tiếc. Có vẻ như trang này không tồn tại.</h1>
              </header>
              <div className="page-content">
                <p>Có vẻ như không có gì được tìm thấy tại vị trí này. Có thể thử một trong các liên kết bên dưới hoặc về lại trang chủ</p>
                <Link href="/">
                  <a className="button btn-showmore">
                    Trang chủ
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default NotFound;
