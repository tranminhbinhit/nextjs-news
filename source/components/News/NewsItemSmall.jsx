import Link from "next/link";
import React from "react";
import { EnumRoutingPage } from "../../constants/enum";
import { getImage, formatDateTimeView, getLinkUrl, formatDateTimeAgo } from "../../utils/utils";
/* eslint-disable */
const NewsItemSmall = ({ newsItem }) => {
  const { ValueData, SeoData, CreatedDate } =
    newsItem || {};
  const { SeoAttrImage: NewsImage, SeoAttrContentDescription: NewsDescription } =
    SeoData || {};
  const { TextTitle: NewsName, NameRewrite: NewsUrl } =
    ValueData || {};
  const linkNewsDetail = getLinkUrl(EnumRoutingPage.NEWS.id, NewsUrl);
  return (
    <article className="jeg_post jeg_pl_sm format-standard">
      <div className="jeg_thumb">
        <Link href={linkNewsDetail}>
          <a>
            <div className="thumbnail-container animate-lazy  size-715">
              <img width="120" height="86"
                src={getImage(NewsImage)}
                className="attachment-jnews-120x86 size-jnews-120x86 wp-post-image lazyautosizes lazyloaded"
                alt={NewsName}
                decoding="async"
                loading="lazy"
                sizes="120px"
                title={NewsName} />
            </div>
          </a>
        </Link>
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
      </div>
    </article>
  );
};

export default NewsItemSmall;
