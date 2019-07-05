import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import styles from './index.scss';

ReactDOM.render(
  <App className={styles.index}/>,
  document.getElementById('root')
);