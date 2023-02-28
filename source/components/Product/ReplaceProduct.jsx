/* eslint-disable */
import React, { Component } from 'react';
import ProductItem from '../../components/Product/ProductItem';
import {isEmptyObject} from '../../utils/utils';

class ReplaceProduct extends Component {
  render() {
    const { listData } = this.props;
    return (
      <div className="related related-products-wrapper product-section">
        <h3 className="product-section-title container-width product-section-title-related pt-half pb-half uppercase">
          Sản phẩm tương tự
        </h3>

        <div className="col-inner">
          <div className="row equalize-box large-columns-5 medium-columns-3 small-columns-2 row-normal">
            {!isEmptyObject(listData)
              ? listData.map(itemI => {
                  return <ProductItem key={itemI.ProductId} item={itemI} />;
                })
              : ''}
          </div>
        </div>
      </div>
    );
  }
}

export default ReplaceProduct;
