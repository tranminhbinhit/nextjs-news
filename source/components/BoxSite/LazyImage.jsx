import React from "react";
//import { LazyImage as LazyImageReact } from "lazy-react";

class LazyImage extends React.Component {
  render() {
    const { link, offset, ...rest } = this.props;
    // if (IS_SERVER_RENDER) {
    //   return <img src={link} alt="" {...rest} />;
    // }
    //return <LazyImageReact link={link} offset={offset} {...rest} />;
    return <img src={link} alt="" {...rest} />;
  }
}

export default LazyImage;
