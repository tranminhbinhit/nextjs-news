import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { getTotalPage } from '../../utils/utils';

class PaginatePage extends Component {
  render() {
    const { handlePageClick, totalRow, pageSize, pageNumber = 1 } = this.props;
    console.log(handlePageClick, totalRow, pageSize, pageNumber);
    const totalPage = getTotalPage(totalRow, pageSize);
    return totalPage > 2 ? (
      <ReactPaginate
        className="jeg_navigation jeg_pagination  jeg_pagenav_1 jeg_aligncenter no_navtext no_pageinfo"
        activeLinkClassName="active"
        pageLinkClassName="page_number cursor"
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
    ) : '';
  }
}

export default PaginatePage;
