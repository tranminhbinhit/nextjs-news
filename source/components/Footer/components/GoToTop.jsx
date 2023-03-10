/* eslint-disable */
import React, { Component, useEffect } from 'react';

const GoToTop = () => {
  const showHeaderWhenScroll = () => {
    const topcontrol = $('.jscroll-to-top');
    const scrollTop = $('.jscroll-to-top');

    $(window).on('scroll', () => {
      if ($(window).scrollTop() > 200) {
        topcontrol.addClass('show');
      } else {
        topcontrol.removeClass('show');
      }
    });

    scrollTop.click(() => {
      $('body, html').animate({
        scrollTop: 0,
      },
        500,
      );
    });
  };

  useEffect(() => {
    showHeaderWhenScroll();
  }, []);

  return (
    <React.Fragment>
      <div className="jscroll-to-top">
        <a className="jscroll-to-top_link cursor">
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </React.Fragment>
  );
}

export default GoToTop;
