/* eslint-disable */
import React, { Component } from 'react';
import { getSettingValue } from '../../utils/utils';

class SocialShare extends Component {
  render() {
    const currentUrl = window.location.href;

    const { config, title, body } = this.props;

    const {
      PD_SEO_IMAGE,
    } = config || {};
    const websiteImage = getSettingValue(PD_SEO_IMAGE);

    return (
      <div className="social-icons share-icons share-row relative">
        <a
          href={`whatsapp://send?text=${title} - ${currentUrl}`}
          data-action="share/whatsapp/share"
          className="icon button circle is-outline tooltip whatsapp show-for-medium tooltipstered"
          aria-label="Share on WhatsApp"
        >
          <i className="icon-whatsapp" />
        </a>
        <a
          href={`https://www.facebook.com/sharer.php?u=${currentUrl}`}
          data-label="Facebook"
          rel="noopener noreferrer nofollow"
          target="_blank"
          className="icon button circle is-outline tooltip facebook tooltipstered"
          aria-label="Share on Facebook"
        >
          <i className="icon-facebook" />
        </a>
        <a
          href={`https://twitter.com/share?url=${currentUrl}`}
          rel="noopener noreferrer nofollow"
          target="_blank"
          className="icon button circle is-outline tooltip twitter tooltipstered"
          aria-label="Share on Twitter"
        >
          <i className="icon-twitter" />
        </a>
        <a
          href={`mailto:enteryour@addresshere.com?subject=${title}&body=${body}:${currentUrl}`}
          rel="nofollow"
          className="icon button circle is-outline tooltip email tooltipstered"
          aria-label="Email to a Friend"
        >
          <i className="icon-envelop" />
        </a>
        <a
          href={`https://pinterest.com/pin/create/button/?url=${currentUrl}&media=${websiteImage}&description=${title}`}
          rel="noopener noreferrer nofollow"
          target="_blank"
          className="icon button circle is-outline tooltip pinterest tooltipstered"
          aria-label="Pin on Pinterest"
        >
          <i className="icon-pinterest" />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${title}`}
          rel="noopener noreferrer nofollow"
          target="_blank"
          className="icon button circle is-outline tooltip linkedin tooltipstered"
          aria-label="Share on LinkedIn"
        >
          <i className="icon-linkedin" />
        </a>
      </div>
    );
  }
}

export default SocialShare;
