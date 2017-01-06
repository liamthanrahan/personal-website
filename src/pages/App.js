import React, { Component } from 'react';
import styles from './index.css'
import classnames from 'classnames'

import NavigationLink from 'components/NavigationLink'


export default class App extends Component {
  componentDidMount(){
  }
  render(){
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Liam's Personal Website</h1>
          <ul role="nav" className={styles.navigation}>
            <li><NavigationLink to="/" onlyActiveOnIndex>Home</NavigationLink></li>
            <li><NavigationLink to="/code">Code Examples</NavigationLink></li>
            <li><NavigationLink to="/about">About</NavigationLink></li>
            <li><a href="https://www.liamthanrahan.wordpress.com">Creative Writing Blog</a></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}