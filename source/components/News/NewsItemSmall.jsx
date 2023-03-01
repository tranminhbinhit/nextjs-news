import Link from "next/link";
import React from "react";
import { EnumRoutingPage } from "../../constants/enum";
import { formatJustDate, formatJustMonth, getImageCdn, getLinkUrl } from "../../utils/utils";
/* eslint-disable */
const NewsItem = ({ newsItem }) => {
  const { NewsName, NewsImage, NewsUrl, NewsDescription, CreatedDate, NewsId } =
    newsItem || {};
  return (
    <div className="col post-item">
      <div className="col-inner">
        <Link href={getLinkUrl(EnumRoutingPage.NEWS.id, NewsUrl, NewsId)}>
          <a className="plain">
            <div className="box box-vertical box-text-bottom box-blog-post has-hover">
              <div className="box-image">
                <div className="image-cover">
                  <img
                    width="300"
                    height="188"
                    src={getImageCdn(NewsImage)}
                    alt={NewsName}
                  />
                </div>
              </div>
              <div className="box-text text-left">
                <div className="box-text-inner blog-post-inner">
                  <h5 className="post-title is-large ">{NewsName}</h5>
                  <div className="is-divider" />
                  <p className="from_the_blog_excerpt ">{NewsDescription}</p>
                </div>
              </div>
              <div className="badge absolute top post-date badge-outline">
                <div className="badge-inner">
                  <span className="post-date-day">{formatJustDate(CreatedDate)}</span>
                  <br />
                  <span className="post-date-month is-xsmall">Th {formatJustMonth(CreatedDate)}</span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
