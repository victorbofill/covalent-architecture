import React, { Component } from 'react';
import logo from '../../assets/img/covalent-bond.svg';
import styles from './Splash.scss';

export default class Splash extends Component {
  render() {
    return (
      <article className={styles.Splash}>
        <figure>
          <h2>
            <span className="covalent">covalent</span> <span className="architecture">architecture</span>
          </h2>
          <figcaption>
            <span className="term">/ kō vāl ənt / architecture / </span>
            <span className="definition">bonds formed by the sharing of ideas and goals between people</span>
          </figcaption>
          <img src ={logo} />
        </figure>
      </article>
    );
  }
}
