/* eslint-disable */
import Link from "next/link";
import React, { Component } from "react";
import { connect } from "react-redux";
import { EnumRoutingPage } from "../../constants/enum";
import { getLinkUrl, isEmptyObject } from "../../utils/utils";

const LeftCategory = ({ categoryId, listCategory }) => {
  return !isEmptyObject(listCategory) ? (
    <aside className="widget woocommerce widget_product_categories">
      <span className="widget-title shop-sidebar">Danh Mục Sản Phẩm</span>
      <ul className="product-categories">
        {listCategory.map((item) => (
          <li
            key={`key-c-${item.CategoryId}`}
            className={`cat-item ${
              item.CategoryId == categoryId ? "current-cat" : ""
            } ${item.IsHaveChild ? "cat-parent has-child active" : ""}`}
            aria-expanded={item.IsHaveChild ? "true" : ""}
          >
            <Link
              href={getLinkUrl(EnumRoutingPage.CATEGORY.id, item.CategoryUrl)}
            >
              <a>{item.CategoryName}</a>
            </Link>
            {item.IsHaveChild ? (
              <React.Fragment>
                <button className="toggle">
                  <i className="icon-angle-down"></i>
                </button>
                <ul className="children">
                  <li className="cat-item cat-item-180">
                    <a href="#">BinhTest</a>
                  </li>
                </ul>
              </React.Fragment>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </aside>
  ) : (
    ""
  );
};

const mapStateToProps = (state) => ({
  listCategory: state.category.listCategory,
});

export default connect(mapStateToProps)(LeftCategory);
