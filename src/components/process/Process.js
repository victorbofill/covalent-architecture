import React, { Component } from 'react';
import processImage from '../../assets/img/process.jpg';
import styles from './Process.scss';

export default class Process extends Component {
  render() {
    return (
      <article className={styles.Process}>
        <section className="content-container">
          <figure>
            <img src={processImage} />
          </figure>
          <section className="text-container">
            <aside>
              <p>
                <span className="quote-text">"As an architect you design for the present, with an awareness of the past, for a future which is essentially unknown."</span>
                <span className="quote-author">- Norman Foster</span>
              </p>
            </aside>
            <div>
              <p className="body-copy-p">As architects, we fill many roles. We are creators and artists while also being technical experts and project managers. We are designers while also being therapists. We listen to you. We are communicators and translators. We work with consultants and connect with you to bring your ideas to life.</p>
              <p className="body-copy-p">Our design process is open, interactive, and collaborative. We believe great design is not about having the best idea in the room, it’s about realizing a great idea when it evolves. Collaborative design with each other, consultants, and our clients allows all of us to grow and learn from every project.</p>
            </div>
          </section>
        </section>
      </article>
    );
  }
}
