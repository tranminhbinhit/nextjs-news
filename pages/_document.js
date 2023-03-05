import { Fragment } from "react";
import Document, { Head, Main, NextScript, Html } from "next/document";
import { GA_TRACKING_ID } from "../source/utils/gtag";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Check if in production
    const isProduction = process.env.NODE_ENV === "production";

    return {
      ...initialProps,
      isProduction,
    };
  }

  render() {
    const { isProduction } = this.props;

    return (
      <Html lang="vi">
        <Head>
          {/* <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossorigin=""
          />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=yes"
          />
          <link rel="profile" href="http://gmpg.org/xfn/11" />
          <link rel="pingback" href="https://ngoisaoexpress.net/xmlrpc.php" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ngôi Sao Express" />
          <meta property="og:site_name" content="Ngôi Sao Express" />
          <meta property="og:description" content="Chuyện làng sao Việt" />
          <meta property="og:url" content="https://ngoisaoexpress.net" />
          <meta
            property="og:image"
            content="https://ngoisaoexpress.net/wp-content/uploads/2022/09/Web_ngoisaoexpress.jpg"
          />
          <meta property="og:image:height" content="315" />
          <meta property="og:image:width" content="600" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://ngoisaoexpress.net" />
          <meta name="twitter:title" content="Ngôi Sao Express" />
          <meta name="twitter:description" content="Chuyện làng sao Việt" />
          <meta
            name="twitter:image:src"
            content="https://ngoisaoexpress.net/wp-content/uploads/2022/09/Web_ngoisaoexpress.jpg"
          />
          <meta name="twitter:image:width" content="600" />
          <meta name="twitter:image:height" content="315" />
          <title>Ngôi Sao Express - Chuyện làng sao Việt</title>
          <meta
            name="description"
            content="Ngôi Sao Express - Cập nhật tin tức ngôi sao giải trí, video clip, hình ảnh những người nổi tiếng, tin HOT, chuyện hậu trường, đời tư showbiz, scandal sao Việt và Thế giới ..."
          />
          <meta
            name="robots"
            content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          />
          <link rel="canonical" href="https://ngoisaoexpress.net/" />
          <meta property="og:locale" content="vi_VN" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Ngôi Sao Express - Chuyện làng sao Việt"
          />
          <meta
            property="og:description"
            content="Ngôi Sao Express - Cập nhật tin tức ngôi sao giải trí, video clip, hình ảnh những người nổi tiếng, tin HOT, chuyện hậu trường, đời tư showbiz, scandal sao Việt và Thế giới ..."
          />
          <meta property="og:url" content="https://ngoisaoexpress.net/" />
          <meta property="og:site_name" content="Ngôi Sao Express" />
          <meta
            property="og:updated_time"
            content="2023-01-02T13:53:46+07:00"
          />
          <meta
            property="og:image"
            content="https://ngoisaoexpress.net/wp-content/uploads/2022/09/Web_ngoisaoexpress.jpg"
          />
          <meta
            property="og:image:secure_url"
            content="https://ngoisaoexpress.net/wp-content/uploads/2022/09/Web_ngoisaoexpress.jpg"
          />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" /> */}

          <link
            data-optimized="1"
            data-asynced="1"
            as="style"
            rel="stylesheet"
            id="wp-block-library-css"
            href="/css/0b19ad16dc8f7e0ef447ca2c9805a770.css"
            type="text/css"
            media="all"
          />
          <link
            data-optimized="1"
            data-asynced="1"
            as="style"
            rel="stylesheet"
            id="classic-theme-styles-css"
            href="/css/e2af66c0326a3404733939e1634da495.css"
            type="text/css"
            media="all"
          />
          <link
            data-optimized="1"
            data-asynced="1"
            as="style"
            rel="stylesheet"
            id="js_composer_front-css"
            href="/css/19b0085f6533691d458b076654a21b21.css"
            type="text/css"
            media="all"
          />
          <link
            data-optimized="1"
            data-asynced="1"
            as="style"
            rel="stylesheet"
            id="jnews-frontend-css"
            href="/css/bacdf562bd713188ea9c97d4ef4db582.css"
            type="text/css"
            media="all"
          />
          <link
            data-optimized="1"
            data-asynced="1"
            as="style"
            rel="stylesheet"
            id="jnews-js-composer-css"
            href="/css/7a0de2af82f057beb7eec3fb83311397.css"
            type="text/css"
            media="all"
          />
          <link
            data-optimized="1"
            data-asynced="1"
            as="style"
            rel="stylesheet"
            id="jnews-style-css"
            href="/css/77c34c0a62fefbbed0a7b3ced25c0666.css"
            type="text/css"
            media="all"
          />
          <link
            data-optimized="1"
            data-asynced="1"
            as="style"
            rel="stylesheet"
            id="jnews-darkmode-css"
            href="/css/43526ca4d0b6871ef16efc69a5fce965.css"
            type="text/css"
            media="all"
          />
          <link
            data-optimized="1"
            data-asynced="1"
            as="style"
            rel="stylesheet"
            id="jnews-scheme-css"
            href="/css/aeedd786a7252eb0e22dc419e19dc566.css"
            type="text/css"
            media="all"
          />
          <link
            data-optimized="1"
            data-asynced="1"
            as="style"
            rel="stylesheet"
            id="jnews-weather-style-css"
            href="/css/e905100cf1b5d21de7dfc23eef66fecb.css"
            type="text/css"
            media="all"
          />

          <script
            type="text/javascript"
            src="/js/jquery.min.js"
            id="jquery-core-js"
          ></script>

          <link
            rel="icon"
            href="https://ngoisaoexpress.net/wp-content/uploads/2022/08/cropped-Icon_NgoiSaoExpress-1-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href="https://ngoisaoexpress.net/wp-content/uploads/2022/08/cropped-Icon_NgoiSaoExpress-1-192x192.png"
            sizes="192x192"
          />
          <link
            rel="apple-touch-icon"
            href="https://ngoisaoexpress.net/wp-content/uploads/2022/08/cropped-Icon_NgoiSaoExpress-1-180x180.png"
          />
          <meta
            name="msapplication-TileImage"
            content="https://ngoisaoexpress.net/wp-content/uploads/2022/08/cropped-Icon_NgoiSaoExpress-1-270x270.png"
          />

          <link rel="stylesheet" href="/css/style.css" media="all" />
          {/* We only want to add the scripts if in production */}
          {isProduction && (
            <Fragment>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </Fragment>
          )}
        </Head>
        <body
          className="home page-template page-template-template-builder page-template-template-builder-php page page-id-1956 wp-embed-responsive jeg_toggle_light jnews jsc_normal wpb-js-composer js-comp-ver-6.8.0 vc_responsive"
          cz-shortcut-listen="true"
        >
          <div className="jeg_ad jeg_ad_top jnews_header_top_ads">
            <div className="ads-wrapper"></div>
          </div>
          <div className="jeg_viewport">
            <Main />
            <NextScript />
          </div>
          <div id="jeg_off_canvas" className="normal">
            <a className="jeg_menu_close">
              <i className="jegicon-cross"></i>
            </a>
            <div className="jeg_bg_overlay"></div>
          </div>
          {/* <script
            data-optimized="1"
            src="./js/129980acb040f76a70bccde6002a5ef6.js"
            defer=""
          ></script> */}
        </body>
      </Html>
    );
  }
}
