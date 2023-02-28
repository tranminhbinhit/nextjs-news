import Link from "next/link";
import React from "react";
import { EnumRoutingPage } from "../../constants/enum";
import { getImageCdn, getLinkUrl, isEmptyObject } from "../../utils/utils";

/* eslint-disable */
class NewsRelate extends React.Component {
  render() {
    const { listNewsRelate } = this.props;
    return !isEmptyObject(listNewsRelate) ? (
      <div className="bai-viet-lien-quan">
        <h3>Bạn Sẽ Quan Tâm:</h3>
        <ul className="list-bai-viet">
          {listNewsRelate.map((newsItem) => (
            <li key={`new-replace-${newsItem.NewsId}`}>
              <div className="box-image">
                <Link
                  href={getLinkUrl(
                    EnumRoutingPage.NEWS.id,
                    newsItem.NewsUrl,
                    newsItem.NewsId
                  )}
                >
                  <a>
                    <img
                      width="800"
                      height="500"
                      src={getImageCdn(newsItem.NewsImage)}
                      className="attachment-large size-large wp-post-image lazy-load-active"
                      alt={newsItem.NewsName}
                    />
                  </a>
                </Link>
              </div>
              <Link
                href={getLinkUrl(
                  EnumRoutingPage.NEWS.id,
                  newsItem.NewsUrl,
                  newsItem.NewsId
                )}
              >
                <a>
                  <h4 className="tieu-de-bai-viet">{newsItem.NewsName}</h4>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      ""
    );
  }
}

export default NewsRelate;
