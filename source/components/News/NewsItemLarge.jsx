import Link from "next/link";
import React from "react";
import { EnumRoutingPage } from "../../constants/enum";
import { getImage, formatDateTimeView, getLinkUrl, formatDateTimeAgo } from "../../utils/utils";
/* eslint-disable */
const NewsItemLarge = ({ newsItem }) => {
  const { ValueData, SeoData, CreatedDate, PageName, PageNameRewrite } =
    newsItem || {};
  const { SeoAttrImage: NewsImage, SeoAttrContentDescription: NewsDescription } =
    SeoData || {};
  const { TextTitle: NewsName, NameRewrite: NewsUrl } =
    ValueData || {};
  const linkNewsDetail = getLinkUrl(EnumRoutingPage.NEWS.id, NewsUrl);
  return (
    <article className="jeg_post jeg_hero_item format-standard">
      <div className="jeg_block_container">
        <span className="jeg_postformat_icon"></span>
        <div className="jeg_thumb">
          <Link href={linkNewsDetail}>
            <a>
              <div className="thumbnail-container thumbnail-background">
                <div className="lazyloaded"
                  style={{ backgroundImage: `url(${getImage(NewsImage)})` }}
                >
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="jeg_postblock_content">
          <div className="jeg_post_category">
            <Link href={getLinkUrl(EnumRoutingPage.CATEGORY_NEWS.id, PageNameRewrite)}>
              <a href="h" className="category-lam-dep">
                {PageName}
              </a>
            </Link>
          </div>
          <div className="jeg_post_info">
            <h2 className="jeg_post_title">
              <Link href={linkNewsDetail}>
                <a>
                  {NewsName}
                </a>
              </Link>
            </h2>
            <div className="jeg_meta_date">
              <Link href={linkNewsDetail}>
                <a>
                  <i className="fa fa-clock-o"></i> {formatDateTimeAgo(CreatedDate)}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsItemLarge;
