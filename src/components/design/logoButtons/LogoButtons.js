import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LogoButtons.scss';

export default class Story extends Component {
  state = {
    categories: [],
  }

  buttonDictionary = [
    { name: 'industrial',
      class: 'firstButton',
    },
    { name: 'commercial',
      class: 'secondButton',
    },
    { name: 'residential',
      class: 'thirdButton',
    },
    { name: 'homes',
      class: 'fourthButton',
    },
    { name: 'civic',
      class: 'fifthButton',
    },
  ]

  render() {
    const { buttonDictionary } = this;

    return (
      <figure className={styles.buttonContainer}>
        {buttonDictionary.map(button => {
          return <NavLink
            key={button.name}
            to={`/design/projects?${button.name}`}>
            <div className={`${button.class} button`}>
              <p>{button.name.charAt(0).toUpperCase() + button.name.slice(1)}</p>
            </div>
          </NavLink>;
        })}
      </figure>
    );
  }
}
