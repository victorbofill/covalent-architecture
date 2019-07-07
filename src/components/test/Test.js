import React, { Component } from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import api from '../../services/dropbox/api';

export default class Test extends Component {
  async retrieveTestData() {
    const imageLinks = await api.getImageLinks('commercial', 'food');
    console.log('imageLinks: ', imageLinks);
  }

  render() {
    const { retrieveTestData } = this;

    return (
      <button onClick={retrieveTestData}>Click me</button>
    );
  }
}
