import React, { Component } from 'react';
import SbEditable from 'storyblok-react';

const SCRIPT_EMBED_URL = '//assets.codepen.io/assets/embed/ei.js';

class Codepen extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      loading: true,
    };
  }

  componentDidMount() {
    // load the codepen embed script
    const script = document.createElement('script');
    script.src = SCRIPT_EMBED_URL;
    script.async = 1;
    script.onload = () => {
      if (!this.isMounted) {
        return;
      }

      this.setState({
        loaded: true,
        loading: false,
      });
    };

    script.onerror = () => {
      if (!this.isMounted) {
        return;
      }

      this.setState({
        error: 'Failed to load the pen',
      });
    };

    document.body.appendChild(script);
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  render() {
    const { user } = this.props;
    return (
      <p
        data-height="314"
        data-theme-id="light"
        data-slug-hash="VaRgZM"
        data-default-tab="result"
        data-user={user}
        data-embed-version="2"
        className="codepen"
      />
    );
  }
}

export default Codepen;
