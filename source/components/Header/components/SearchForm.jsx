/* eslint-disable */
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { EnumRoutingPage } from '../../../constants/enum';
import { getLinkUrl } from '../../../utils/utils';

const SearchForm = () => {
  const router = useRouter();
  const [keySearch, setSearchValue] = useState('');
  
  const searchProduct = () => {
    router.push(getLinkUrl(EnumRoutingPage.SEARCH.id, keySearch));
    setSearchValue('');
  }
  
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      searchProduct();
    }
  };

  return (
    <React.Fragment>
      <div className="flex-col hide-for-medium flex-left flex-grow">
        <ul className="header-nav header-nav-main nav nav-left nav-size-large nav-uppercase">
          <li className="header-search-form search-form html relative has-icon">
            <div className="header-search-form-wrapper">
              <div className="searchform-wrapper ux-search-box relative form-flat is-normal">
                <div className="searchform">
                  <div className="flex-row relative">
                    <div className="flex-col flex-grow">
                      <label
                        className="screen-reader-text"
                        htmlFor="woocommerce-product-search-field-0"
                      >
                        Tìm kiếm:
                      </label>
                      <input
                        type="search"
                        className="search-field mb-0"
                        placeholder="Nhập sản phẩm cần tìm"
                        value={keySearch}
                        onKeyDown={handleKeyDown}
                        onChange={event => { 
                          setSearchValue(event.target.value);
                        }}
                        name="keySearch"
                      />
                    </div>
                    <div className="flex-col">
                      <button
                        type="submit"
                        defaultValue="Tìm kiếm"
                        className="ux-search-submit submit-button secondary button icon mb-0"
                        onClick={() => searchProduct()}
                      >
                        <i className="icon-search" />
                      </button>
                    </div>
                  </div>
                  <div className="live-search-results text-left z-top" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default SearchForm;
