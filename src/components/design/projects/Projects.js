import React, { Component } from 'react';
import projects from '../../../assets/projects/index';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './Projects.scss';

export default class Projects extends Component {
  state = {
    activeCategory: null,
    activeProject: null,
  }

  componentDidMount() {
    const activeCategory = window.location.search.slice(1);
    const activeProject = Object.keys(projects[activeCategory])[0];
    this.setState({ activeCategory, activeProject });
  }

  setActiveCategory(e) {
    this.setState({ activeCategory: e.target.value, activeProject: null });
  }

  setActiveProject(e) {
    this.setState({ activeProject: e.target.value });
  }

  render() {
    const { activeCategory, activeProject } = this.state;

    return (
      <article className="projects">
        <section className="carousel-container">
          <Carousel showStatus={false} showThumbs={false}>
            {activeCategory && activeProject && projects[activeCategory][activeProject].map(image => {
              return <div key={image.name}>
                <img src={image} />
              </div>;
            })}
          </Carousel>
        </section>
        <section className="category-buttons">
          {Object.keys(projects).map(category => {
            const className = category === activeCategory ? 'activeButton' : 'button';
            return <button
              key={category}
              value={category}
              className={className}
              onClick={e => this.setActiveCategory(e)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>;
          })}
        </section>
        <section className="project-buttons">
          {activeCategory && Object.keys(projects[activeCategory]).map(project => {
            const className = project === activeProject ? 'activeButton' : 'button';
            return <button
              key={project}
              value={project}
              className={className}
              onClick={e => this.setActiveProject(e)}>
              {project.charAt(0).toUpperCase() + project.slice(1)}
            </button>;
          })}
        </section>
      </article>
    );
  }
}
