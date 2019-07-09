import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import './LogoButtons.scss';

export default class Story extends Component {
  render() {
    return (
      <figure className="button-container">
        <NavLink to="/design/projects/institutional"><div className="institutional button"><p>Institutional</p></div></NavLink>
        <NavLink to="/design/projects/residential"><div className="residential button"><p>Residential</p></div></NavLink>
        <NavLink to="/design/projects/commercial"><div className="commercial button"><p>Commercial</p></div></NavLink>
        <NavLink to="/design/projects/industial"><div className="industrial button"><p>Industrial</p></div></NavLink>
        <NavLink to="/design/projects/tenant"><div className="tenant button"><p>Tenant Improvements</p></div></NavLink>
      </figure>
    );
  }
}
