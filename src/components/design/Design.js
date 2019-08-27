import React, { Component } from 'react';
import LogoButtons from './logoButtons/LogoButtons';
import './Design.scss';

export default class Story extends Component {
  render() {
    return (
      <article className="design">
        <LogoButtons />
      </article>
    );
  }
}
