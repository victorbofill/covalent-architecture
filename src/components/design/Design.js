import React, { Component } from 'react';
import LogoButtons from './logoButtons/LogoButtons';
import styles from './Design.scss';

export default class Story extends Component {
  render() {
    return (
      <article className={styles.design}>
        <LogoButtons />
        <aside>
          <p>From commercial to residential<br />
            planning, design, and architecture,<br />
            our team will work with you every step of the way.
          </p>
          <p>From big projects to small projects,<br />
            our team’s experience ranges in both size and type.<br />
            Our experience includes custom residential, multi-family,<br />
            commercial , and industrial.
          </p>
          <p>
            From future planning to<br />
            full service design,<br />
            we can assist from early project phases including land<br />
            planning to construction documents and administration.
          </p>
        </aside>
      </article>
    );
  }
}
