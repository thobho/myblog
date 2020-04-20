import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={'https://media-exp1.licdn.com/dms/image/C5603AQH3Fx1G-1D7CQ/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=cmBaMstRGQPQHw8Ob0vzUx5zWTunFrh9hW_0e-3nBr4'} alt="Me" />
      <p>
        Witaj na moim blogu. Nazywam się{' '}
        <a href="https://www.linkedin.com/in/tomasz-bar/">Tomasz Bar</a>.
        <br /> Jestem Java Developerem i Trenerem Javy.
        Znajdziesz tutaj artykuły dotyczące nauki programowania.
      </p>
    </div>
  )
}

export default Bio
