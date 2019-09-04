import React, { Component } from 'react';
import map from '../../assets/img/map.svg';
import mapLogo from '../../assets/img/covalent-bond.svg';
import logo from '../../assets/img/covalent-compact.png';
import styles from './Connect.scss';

export default class Connect extends Component {
  render() {
    return (
      <article className={styles.Connect}>
        <div className="map">
          <img src={map} className="map-image" />
          <img className="map-logo" src={mapLogo} />
        </div>
        <section className="contact">
          <figure>
            <img className="logo" src={logo} />
            <figcaption>
                email us. don’t be shy. say hello. 
            </figcaption>
          </figure>
          <img />
          <ul className="address-list">
            <li>Antoinette Lettiere: <a href="mailto:antoinette@covalentarchitecture.com">antoinette@covalentarchitecture.com</a></li>
            <li>Austin Rosenfeld: <a href="mailto:austin@covalentarchitecture.com">austin@covalentarchitecture.com</a></li>
            <li>James Schmidt: <a href="mailto:james@covalentarchitecture.com">james@covalentarchitecture.com</a></li>
          </ul>
          <div className="address">
            <div>
              <h2>mailing address</h2>
              <p>19215 SE 34th Street</p>
              <p>#106 - 420</p>
              <p>Camas, Washington 98607</p>
            </div>
            <div>
              <h2>office address</h2>
              <p>311 W Evergreen Blvd. Suite 110</p>
              <p>Vancouver, WA 98660</p>
            </div>
          </div>
        </section>
      </article>
    );
  }
}
