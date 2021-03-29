import React from 'react'

import { updatePrice } from '../actions/index'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() =>
          // console.log('clicked')
          this.props.updatePrice(props.feature.price)
        }
      >
        Add
      </button>
      {props.feature.name} (+${props.feature.price})
    </li>
  )
}

export default AdditionalFeature