/* eslint-disable*/
import React, { Component } from "react";
import { getImageCdn } from "../../utils/utils";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

class BannerSlider extends Component {
  render() {
    const { listBanner } = this.props;
    return (
      <React.Fragment>
        <div className="slider-wrapper relative">
          <div className="slide-container">
          <Slide autoplay={true} duration={1500} transitionDuration={500} pageDots={true} indicators={true} >
              {listBanner.map((m, index) => (
                <div className="each-slide" key={index}>
                  <img src={`${getImageCdn(m.BannerImage)}`} style={{width: "100%"}} />
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BannerSlider;
