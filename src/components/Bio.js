import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        Witaj na moim blogu. Nazywam się{' '}
        <a href="https://www.linkedin.com/in/tomasz-bar/">Tomasz Bar</a>.
        <br />
        Znajdziesz tutaj artykuły dotyczące nauki programowania.
      </p>
    </div>
  )
}

export default Bio
