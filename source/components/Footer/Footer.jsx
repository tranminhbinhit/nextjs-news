/* eslint-disable */
import Link from 'next/link';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EnumRoutingPage } from '../../constants/enum';
import { wrapper } from '../../redux/store';
import { getImage, getLinkUrl, isEmptyObject } from '../../utils/utils';
import GoToTop from './components/GoToTop';

class Footer extends Component {
   render() {
      const { config } = this.props;
      const { ListCategoryJson: listCategory, ConfigJson: setting } = config;
      const {
         WebDescription,
         WebImage,
         WebTitle,
         WebLogo,
         WebName,
         WebIcon,
         WebEmail,
         WebDesc,
         CompanyName
      } = setting || {};
      return (
         <React.Fragment>
            <div className="footer-holder" id="footer" data-id="footer">
               <div className="jeg_footer jeg_footer_custom">
                  <div className="jeg_container">
                     <div className="jeg_content">
                        <div className="jeg_vc_content">
                           <div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-parallax="1.5" className="row vc_row wpb_row vc_row-fluid vc_custom_1517813231908 vc_row-has-fill vc_row-has-border vc_general vc_parallax vc_parallax-content-moving jnews_63f5e7025931f footer_dark">
                              <div className="jeg-vc-wrapper">
                                 <div className="wpb_column jeg_column vc_column_container vc_col-sm-3">
                                    <div className="jeg_wrapper wpb_wrapper">
                                       <div className="jeg_about">
                                          <Link href="/">
                                             <a className="footer_logo" title={WebName}>
                                                <img
                                                   className="lazyload"
                                                   src={getImage(WebLogo)}
                                                   alt={WebName} />
                                             </a>
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="wpb_column jeg_column vc_column_container vc_col-sm-3">
                                    <div className="jeg_wrapper wpb_wrapper">
                                       <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                             <p>{WebName}</p>
                                             <p>{WebDesc}</p>
                                             <p>Liên hệ quảng cáo: {WebEmail}</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="wpb_column jeg_column vc_column_container vc_col-sm-3">
                                    <div className="jeg_wrapper wpb_wrapper">
                                       <div className="vc_wp_categories wpb_content_element">
                                          <div className="widget widget_categories">
                                             <h2 className="widgettitle">Chuyên mục</h2>
                                             <ul>
                                                {!isEmptyObject(listCategory) ? listCategory.map(m => {
                                                   const { PageNameRewrite, PageName } = m;
                                                   return (
                                                      <li className="cat-item cat-item-31" key={`key-cf-${PageNameRewrite}`} >
                                                         <Link href={getLinkUrl(EnumRoutingPage.CATEGORY_NEWS.id, PageNameRewrite)}>
                                                            <a>
                                                               {PageName}
                                                            </a>
                                                         </Link>
                                                      </li>
                                                   )
                                                }) : ''}
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="wpb_column jeg_column vc_column_container vc_col-sm-3">
                                    <div className="jeg_wrapper wpb_wrapper">
                                       <div className="vc_wp_search wpb_content_element">
                                          <div className="widget widget_search">
                                             {/* <form action="https://ngoisaoexpress.net/" method="get" className="jeg_search_form" target="_top">
                                             <input name="s" className="jeg_search_input" placeholder="Tìm kiếm..." type="text" value="" autocomplete="off" />
                                             <button aria-label="Search Button" type="submit" className="jeg_search_button btn"><i className="fa fa-search"></i></button>
                                          </form> */}
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
                                 <div className="jeg_aligncenter wpb_column jeg_column vc_column_container vc_col-sm-12">
                                    <div className="jeg_wrapper wpb_wrapper">
                                       <div className="vc_empty_space"><span className="vc_empty_space_inner"></span></div>
                                       <div className="wpb_text_column wpb_content_element  vc_custom_1663578244816 copyright">
                                          <div className="wpb_wrapper">
                                             <p>© 2020 Bản quyền {CompanyName}</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="vc_parallax-inner skrollable skrollable-before" data-bottom-top="top: -50%;" data-top-bottom="top: 0%;"></div>
                           </div>
                           <div className="vc_row-full-width vc_clearfix"></div>
                           <p></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <GoToTop />
         </React.Fragment>
      );
   }
}

const mapStateToProps = (state) => ({
   config: state.setting.config,
});

const mapDispatchToProps = (dispatch) => ({
   changeStatePopupConnect: (controlKey, value) => {
      dispatch(changeStatePopup(controlKey, value));
   },
   // changeLanguageConnect: language => {
   //   dispatch(changeLanguage(language));
   // },
});

export default wrapper.withRedux(
   connect(mapStateToProps, mapDispatchToProps)(Footer)
);