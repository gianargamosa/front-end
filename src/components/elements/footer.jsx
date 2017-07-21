import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div className="row">
    <div className="col-md-12">
        <footer className="blog-footer">
            <p>Scrumsly App. <i>v.</i><a href="http://getbootstrap.com/">{APP_VERSION}</a> by <a href="https://twitter.com/mdo">Scrumsly Inc.</a></p>
            <p>
                <Link to="/about">About</Link>
                {' \u00b7 '}
                <Link to="/scrumsly">Blog</Link>
                {' \u00b7 '}
                <Link to="/about/terms">Terms</Link>
                {' \u00b7 '}
                <a href="https://status.freefeed.net/" target="_blank" rel="noopener">Status</a>
                {' \u00b7 '}
                <a href="https://dev.freefeed.net/" target="_blank" rel="noopener">Development</a>
                {' \u00b7 '}
                <a href="https://dev.freefeed.net/" target="_blank" rel="noopener">OpenApi</a>
            </p>
        </footer>
    </div>
  </div>
);
