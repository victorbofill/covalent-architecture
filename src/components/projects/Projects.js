import React, { Component } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { images } from '../../assets/projects/residential/suites/suitesImages';

import './Projects.scss';

export default class Projects extends Component {
  render() {
    return (
      <article className="projects">
        <Carousel className="carousel">
          {images.map(image => {
            return (
              <div key={image} >
                <img src={image} />
                <p className="legend">Legend 1</p>
              </div>
            );
          })}
        </Carousel>
      </article>
    );
  }
}
