/* eslint-disable */
import React, { Component } from 'react';

class GoToTop extends Component {
  componentDidMount(){
    const topcontrol = $('.back-to-top');
    const scrollTop = $('.back-to-top');

    $(window).on('scroll', () => {
      if ($(window).scrollTop() > 200) {
        topcontrol.addClass('active');
      } else {
        topcontrol.removeClass('active');
      }
    });

    scrollTop.click(() => {
      $('body, html').animate({
        scrollTop: 0,
      },
      500,
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <a
          className="back-to-top button icon invert plain fixed bottom z-1 is-outline circle"
          id="top-link"
          aria-label="Go to top"
        >
          <i className="icon-angle-up" />
        </a>
      </React.Fragment>
    );
  }
}

export default GoToTop;
