/* eslint-disable */
import React from "react";
import Head from "next/head";

const PageError = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Hệ thống quá tải</title>
        <link
          id="favicon"
          rel="icon"
          href={""}
          type="image/x-icon"
          sizes="32x32"
          data-react-helmet="true"
        />
      </Head>
      <div id="wrapper">
        <main className={"main-page"}>
          <main id="main">
            <div id="content" role="main" className="content-area">
              <h1 className="text-center">Oops Hệ thống quá tải</h1>
            </div>
          </main>
        </main>
      </div>
    </React.Fragment>
  );
};

export default PageError;
