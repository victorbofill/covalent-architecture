import React, { Component } from 'react';
import styles from './Values.scss';

export default class Values extends Component {
  render() {
    return (
      <article className={styles.Values}>
        <blockquote>
          <p>We value <span className="buzz-word green">our clients</span>,<br/>
            <sub>and hope to continue to create long lasting relationships.</sub></p>
        </blockquote>

        <blockquote className="right integrity">
          <p>We value <span className="buzz-word blue">integrity</span> & <span className="buzz-word blue">transparency</span></p>
        </blockquote>

        <blockquote>
          <p>We value <span className="buzz-word purple">communication</span>,<br/>
            <sub>and work with clients, contractors, and each other every step of the way.</sub></p>
        </blockquote>

        <blockquote className="right">
          <p>We value <span className="buzz-word yellow">creativity & innovation</span></p>
        </blockquote>

        <blockquote>
          <p>We value <span className="buzz-word red">collaboration</span>,<br/>
            <sub className="collab-sub"><strong>and enjoy working closely with YOU to help your project and vision come to reality!</strong></sub></p>
        </blockquote>
      </article>
    );
  }
}
