import React, { Component } from 'react';
import LogoButtons from './logoButtons/LogoButtons';
import styles from './Design.scss';

export default class Story extends Component {
  render() {
    return (
      <article className={styles.design}>
        <LogoButtons />
        <aside className="right">
          <p>From <span className="purple big">commercial</span> to <span className="purple big">residential</span><br />
            planning, design, and architecture,<br />
            <span className="small">our team will work with you every step of the way.</span>
          </p>
          <p>From <span className="green big">big</span> projects to <span className="green big">small</span> projects,<br />
            <span className="small">our team’s experience ranges in both size and type.<br />
            Our experience includes custom residential, multi-family,<br />
            commercial , and industrial.</span>
          </p>
          <p>
            From <span className="blue big">future planning</span> to<br />
            <span className="blue big">full service design</span>,<br />
            <span className="small">we can assist from early project phases including land<br />
            planning to construction documents and administration.</span>
          </p>
        </aside>
      </article>
    );
  }
}
