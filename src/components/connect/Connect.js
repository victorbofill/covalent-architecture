import React, { Component } from 'react';

import map from '../../assets/img/map.png';
import mapLogo from '../../assets/img/covalent-bond.png';
import logo from '../../assets/img/covalent-compact.png';

import './Connect.scss';

export default class Connect extends Component {
  render() {
    return (
      <article className="connect">
        <div className="map">
          <img src={map} />
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
            <li>general inquiry: <a href="mailto:hello@covalentarchitecture.com">hello@covalentarchitecture.com</a></li>
            <li>Antoinette Lettiere: <a href="mailto:antoinette@covalentarchitecture.com">antoinette@covalentarchitecture.com</a></li>
            <li>Melanie Poe: <a href="mailto:melanie@covalentarchitecture.com">melanie@covalentarchitecture.com</a></li>
            <li>James Schmidt: <a href="mailto:james@covalentarchitecture.com">james@covalentarchitecture.com</a></li>
          </ul>
          <div className="address">
            <h2>mailing address</h2>
            <p>19215 SE 34th Street</p>
            <p>#106 - 420</p>
            <p>Camas, Washington 98607</p>
          </div>
        </section>
      </article>
    );
  }
}
