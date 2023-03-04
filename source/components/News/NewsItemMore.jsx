import Link from "next/link";
import React from "react";
import { EnumRoutingPage } from "../../constants/enum";
import { getImage, formatDateTimeView, getLinkUrl, formatDateTimeAgo } from "../../utils/utils";
/* eslint-disable */
const NewsItemMore = ({ newsItem }) => {
  const { ValueData, SeoData, CreatedDate, PageNameRewrite, PageName } =
    newsItem || {};
  const { SeoAttrImage: NewsImage, SeoAttrContentDescription: NewsDescription } =
    SeoData || {};
  const { TextTitle: NewsName, NameRewrite: NewsUrl } =
    ValueData || {};
  const linkNewsDetail = getLinkUrl(EnumRoutingPage.NEWS.id, NewsUrl);
  return (
    <article className="jeg_post jeg_pl_lg_2 format-standard">
      <div className="jeg_thumb">
        <Link href={linkNewsDetail}>
          <a>
            <div className="thumbnail-container size-715">
              <img width="350" height="250"
                src={getImage(NewsImage)}
                className="attachment-jnews-350x250 size-jnews-350x250 lazyload wp-post-image"
                alt={NewsName}
                decoding="async"
                loading="lazy"
                sizes="(max-width: 350px) 100vw, 350px"
                data-expand="700"
                title={NewsName} />
            </div>
          </a>
        </Link>
        <div className="jeg_post_category">
          <span>
            <Link href={getLinkUrl(EnumRoutingPage.CATEGORY_NEWS.id, PageNameRewrite)}>
              <a href="h" className="category-lam-dep">
                {PageName}
              </a>
            </Link>
          </span>
        </div>
      </div>
      <div className="jeg_postblock_content">
        <h3 className="jeg_post_title">
          <Link href={linkNewsDetail}>
            <a>
              {NewsName}
            </a>
          </Link>
        </h3>
        <div className="jeg_post_meta">
          <div className="jeg_meta_date">
            <Link href={linkNewsDetail}>
              <a>
                <i className="fa fa-clock-o"></i> {formatDateTimeAgo(CreatedDate)}
              </a>
            </Link>
          </div>
        </div>
        <div className="jeg_post_excerpt">
          <p>{NewsDescription}</p>
          <Link href={linkNewsDetail}>
            <a className="jeg_readmore">
              Xem thêm
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default NewsItemMore;
