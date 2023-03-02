import Link from "next/link";
import React from "react";
import { EnumRoutingPage } from "../../constants/enum";
import { getImage, formatDateTimeView, getLinkUrl } from "../../utils/utils";
/* eslint-disable */
const NewsItemBox = ({ newsItem }) => {
  const { ValueData, SeoData, CreatedDate, PageName, PageNameRewrite } =
    newsItem || {};
  const { SeoAttrImage: NewsImage, SeoAttrContentDescription: NewsDescription } =
    SeoData || {};
  const { TextTitle: NewsName, NameRewrite: NewsUrl } =
    ValueData || {};
  const linkNewsDetail = getLinkUrl(EnumRoutingPage.NEWS.id, NewsUrl);
  return (
    <article className="jeg_post jeg_pl_md_5 format-standard">
      <div className="jeg_thumb">
        <Link href={linkNewsDetail}>
          <a>
            <div className="thumbnail-container size-715">
              <img width="350" height="250"
                src={getImage(NewsImage)}
                className="attachment-jnews-350x250 size-jnews-350x250 wp-post-image lazyautosizes lazyloading afterloading"
                alt={NewsName}
                decoding="async" sizes="230px"
                data-sizes="auto"
                data-expand="700"
                title={NewsName}
              />
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
        <div className="jeg_meta_date">
          <Link href={linkNewsDetail}>
            <a>
              <i className="fa fa-clock-o"></i> {formatDateTimeView(CreatedDate)}
            </a>
          </Link>
        </div>
      </div>
    </article>

  );
};

export default NewsItemBox;
