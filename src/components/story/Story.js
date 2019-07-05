import React, { Component, Fragment } from 'react';

import './Story.scss';

export default class Story extends Component {
  render() {
    return (
      <Fragment>
        <article>
          <figure className="story-figure">
            <img />
            <figcaption>Some text fluff bullshit about how we came to be.</figcaption>
          </figure>
        </article>
      </Fragment>
    );
  }
}
