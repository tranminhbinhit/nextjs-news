import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { getTotalPage } from '../../utils/utils';

class PaginatePage extends Component {
  render() {
    const { handlePageClick, totalRow, pageSize, pageNumber = 1 } = this.props;
    const totalPage = getTotalPage(totalRow, pageSize);
    return totalPage > 2 ? (
      <nav className="text-center">
        <ReactPaginate
          className="page-numbers nav-pagination links"
          activeLinkClassName="current"
          pageLinkClassName="page-number cursor"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          itemsPerPage={4}
          pageRangeDisplayed={2}
          //initialPage={pageNumber}
          pageCount={totalPage}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </nav>
    ) : '';
  }
}

export default PaginatePage;
