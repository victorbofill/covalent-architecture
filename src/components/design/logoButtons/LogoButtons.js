import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import api from '../../../services/dropbox/api';

import './LogoButtons.scss';

export default class Story extends Component {
  state = {
    categories: [],
  }

  buttonDictionary = [
    'firstButton',
    'secondButton',
    'thirdButton',
    'fourthButton',
    'fifthButton',
  ]

  componentDidMount() {
    this.retrieveCategories();
  }

  retrieveCategories = async () => {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    const { buttonDictionary } = this;

    return (
      <figure className="button-container">
        {/* The class names of these buttons is less than ideal in order to account for potential changes in the category names */}
        {categories.length && categories.map((category, index) => {
          console.log('category: ', category);
          return <NavLink
            key={category.category}
            to={`/design/projects?${category.category}`}>
            <div className={`${buttonDictionary[index]} button`}>
              <p>{category.category.charAt(0).toUpperCase() + category.category.slice(1)}</p>
            </div>
          </NavLink>;
        })}
      </figure>
    );
  }
}
