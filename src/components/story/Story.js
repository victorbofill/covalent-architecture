import React, { Component } from 'react';
import storyImage from '../../assets/img/story.jpg';
import styles from './Story.scss';

export default class Story extends Component {
  render() {
    return (
      <article className={styles.Story}>
        <section className="content-container">
          <figure>
            <img src={storyImage} />
          </figure>
          <section className="text-container">
            <aside>
              <p>
                <span className="quote-text">“We shape our buildings, and afterwards, our buildings shape us.”</span>
                <span className="quote-author">– Winston Churchill</span>
              </p>
            </aside>
            <div>
              <p className="body-copy-p">Founded in early 2019, at Covalent Architecture we believe architecture and design can make a difference, and that through our work, we can create a positive impact in the world. We strive to create buildings that are contextual, meaningful, and memorable.</p>
              <p className="body-copy-p">We believe architecture and design is a service, not a product, and we provide hands-on custom service with every client. We embrace maintaining long-lasting relationships with our clients. We listen to our clients needs and wants and work with them closely to help make their goals a reality.</p>
              <p className="body-copy-p">Our name, Covalent Architecture, comes from this mentality. As a team, we have formed bonds beyond being colleagues and have been working together far longer than our company history. We realize the process of design creates bonds and memories with others and our goal is to embrace the journey and have you enjoy it with us!</p>
            </div>
          </section>
        </section>
      </article>
    );
  }
}
