import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import venn from '../../assets/img/venn.png';
import './Design.scss';

export default class Story extends Component {
  render() {
    return (
      <article className="design">
        <NavLink to='/design/projects'><img src={venn}/></NavLink>
        <blockquote>
          <p>From <span className="buzz-word green">big</span> projects to <span className="buzz-word green">small</span> projects,<br/>
            <sub>our team’s experience ranges in both size and type. Our experience includes custom residential, multi-family, commerical , and industrial.</sub></p>
        </blockquote>

        <blockquote className="right">
          <p>From <span className="buzz-word blue">future planning</span> to <span className="buzz-word blue">quick responses</span>,<br/>
            <sub>we can assist from early project phases including land planning to construction documents and administration.</sub></p>
        </blockquote>

        <blockquote>
          <p>From <span className="buzz-word purple">commercial</span> to <span className="buzz-word purple">residential</span> planning, design, and archtiecture,<br/>
            <sub>our team will work with you every step of the way.</sub></p>
        </blockquote>

        <blockquote className="right">
          <p>Froms Hands on-approach to following your lead....</p>
        </blockquote>

        <blockquote>
          <p>Looking back and moving forward, our project experience ranges...<br/>
            <sub><strong>and enjoy working closely with YOU to help your project and vision come to reality!</strong></sub></p>
        </blockquote>
      </article>
    );
  }
}
