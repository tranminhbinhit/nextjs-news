import Link from "next/link";
import React from "react";
import { EnumRoutingPage } from "../../constants/enum";
import { getImage, formatDateTimeView, getLinkUrl, getImageBase64 } from "../../utils/utils";
/* eslint-disable */
const NewsItem = ({ newsItem }) => {
  const { ValueData, SeoData, CreatedDate } =
    newsItem || {};
  const { SeoAttrImage: NewsImage, SeoAttrContentDescription: NewsDescription } =
    SeoData || {};
  const { TextTitle: NewsName, NameRewrite: NewsUrl } =
    ValueData || {};
  const linkNewsDetail = getLinkUrl(EnumRoutingPage.NEWS.id, NewsUrl);
  return (
    <article className="jeg_post jeg_pl_md_2 format-standard">
      <div className="jeg_thumb">
        <Link href={linkNewsDetail}>
          <a>
            <div className="thumbnail-container size-715">
              <img width="350" height="250"
                src={getImage(NewsImage)}
                className="attachment-jnews-350x250 size-jnews-350x250 wp-post-image lazyautosizes lazyloaded"
                alt={NewsName}
                decoding="async"
                loading="lazy" sizes="260px"
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
                <i className="fa fa-clock-o"></i> {formatDateTimeView(CreatedDate)}
              </a>
            </Link>
          </div>
        </div>
        <div className="jeg_post_excerpt">
          <p>{NewsDescription}</p>
        </div>
      </div>
    </article>
  );
};

export default NewsItem;
