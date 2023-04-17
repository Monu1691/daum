import React from 'react'

import {spinLoader} from '../../asset/img'

const AdLoader = () => {
  return (
    <div className="ad-loader-wrapp">
      <span className="img-loader"><img src={spinLoader} alt="user" /></span>
    </div>
  )
}

export default AdLoader
