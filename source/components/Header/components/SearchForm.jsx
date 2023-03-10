/* eslint-disable */
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { EnumRoutingPage } from '../../../constants/enum';
import { getLinkUrl } from '../../../utils/utils';

const SearchForm = () => {
  const router = useRouter();
  const [keySearch, setKeySearch] = useState('');

  const handleSubmit = async (event) => {
    //debugger
    event.preventDefault();
    router.push(getLinkUrl(EnumRoutingPage.SEARCH.id, keySearch));
    setKeySearch('');
  };

  return (
    <React.Fragment>
      <div className="jeg_nav_col jeg_nav_right jeg_nav_normal">
        <div className="item_wrap jeg_nav_alignright">
          <div className="jeg_nav_item jeg_nav_search">
            <div className="jeg_search_wrapper jeg_search_no_expand rounded">
              <a className="jeg_search_toggle">
                <i className="fa fa-search"></i>
              </a>
              <form
                onSubmit={handleSubmit}
                className="jeg_search_form"
              >
                <input
                  name="s"
                  className="jeg_search_input"
                  placeholder="Tìm kiếm..."
                  type="text"
                  value={keySearch}
                  onChange={event => {
                    setKeySearch(event.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="jeg_search_button btn"
                >
                  <i className="fa fa-search"></i>
                </button>
              </form>
              <div className="jeg_search_result jeg_search_hide with_result">
                <div className="search-result-wrapper"></div>
                <div className="search-link search-noresult">
                  Không có kết quả
                </div>
                <div className="search-link search-all-button">
                  <i className="fa fa-search"></i> Xem tất cả kết quả
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchForm;
