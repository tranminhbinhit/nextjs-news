/* eslint-disable */
import Link from "next/link";
import React from "react";
import { EnumRoutingPage } from "../../constants/enum";
import { getNewsTop } from "../../service/newsService";
import { getLinkUrl, isEmptyObject } from "../../utils/utils";

class LeftBarNews extends React.Component {
  state = {
    listNewsCategory: [],
    listTopNews: [],
  };

  loadInitData = async () => {
    const listTopNews = await getNewsTop({
      PageTypeId: 2,
      TopNumber: 10,
    });
    
    this.setState({
      ...this.state,
      listTopNews,
    });
  };
  componentDidMount() {
    this.loadInitData();
  }
  render() {
    const { listNewsCategory = [], listTopNews = [] } = this.state;
    return (
      <div className="widget-area " role="complementary">
        {!isEmptyObject(listNewsCategory) ? (
          <aside className="widget widget_categories">
            <span className="widget-title ">
              <span>Danh Mục Tin</span>
            </span>
            <div className="is-divider small" />
            <ul>
              {listNewsCategory.map((item) => (
                <li
                  className="cat-item"
                  key={`new-category-${item.NewsCategoryId}`}
                >
                  <Link
                    href={getLinkUrl(
                      EnumRoutingPage.CATEGORY_NEWS.id,
                      item.NewsCategoryUrl
                    )}
                  >
                    <a>{item.NewsCategoryName}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : (
          ""
        )}
        {!isEmptyObject(listTopNews) ? (
          <aside className="widget widget_recent_entries">
            <span className="widget-title ">
              <span>Bài Viết Mới</span>
            </span>
            <div className="is-divider small" />
            <ul>
              {listTopNews.map((item) => (
                <li key={`top-new-${item.NewsId}`}>
                  <Link
                    href={getLinkUrl(EnumRoutingPage.NEWS.id, item.NewsUrl)}
                  >
                    <a>{item.NewsName}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default LeftBarNews;
