import React from 'react'

import '../styles/header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Bogo Sort Visualizer</h1>
      <ul className="header__authors-list">
        Authors:
        <li>Shevchenko&nbsp;Timofey</li>
        <li>Oberlev&nbsp;Daniil</li>
      </ul>
    </header>
  )
}

export default Header
