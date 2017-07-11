import React from 'react';
import { render } from 'react-dom';
import styles from './App.scss';

const App = () => <div className={styles.main}>Hello</div>;

render(<App />, document.getElementById('root'));