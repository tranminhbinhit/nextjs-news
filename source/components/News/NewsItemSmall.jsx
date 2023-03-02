import Link from "next/link";
import React from "react";
import { EnumRoutingPage } from "../../constants/enum";
import { getImage, formatDateTimeView, getLinkUrl } from "../../utils/utils";
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
        <a href="https://ngoisaoexpress.net/phim-cau-ut-nha-tai-phiet-bi-chi-trich-vi-chinh-sua-da-qua-da-cho-song-joong-ki/">
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
      </div>
    </article>
  );
};

export default NewsItemSmall;
