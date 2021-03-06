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
    const activeProject = Object.keys(projects[activeCategory])[0].name;
    this.setState({ activeCategory, activeProject });
  }

  setActiveCategory(e) {
    this.setState({ activeCategory: e.target.value, activeProject: null });
  }

  setActiveProject(e) {
    console.log('e: ', e.target.value);
    this.setState({ activeProject: e.target.value });
  }

  render() {
    const { activeCategory, activeProject } = this.state;

    return (
      <article className="projects">
        <section className="carousel-container">
          <Carousel showStatus={false} showThumbs={false}>
            {activeCategory && activeProject && projects[activeCategory][activeProject].images.map(image => {
              return <div key={image}>
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
              {category}
            </button>;
          })}
        </section>
        <section className="project-buttons">
          {activeCategory && Object.keys(projects[activeCategory]).map(projectName => {
            const project = projects[activeCategory][projectName];
            const className = project.name === activeProject ? 'activeButton' : 'button';
            return <button
              key={project.name}
              value={projectName}
              className={className}
              onClick={e => this.setActiveProject(e)}>
              {project.name}
            </button>;
          })}
        </section>
      </article>
    );
  }
}
