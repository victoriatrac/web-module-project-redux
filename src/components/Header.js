// import React, { useState } from 'react'
import React from 'react'
import { connect } from 'react-redux'

import { addFeature } from '../actions'

const Header = props => {
  // const [ addFeature, setAdditionalFeatures ] = useState()

// class Header extends React.Component {
  
  // state = {
  //   features: []
  // }

  // const []

  // handleChanges = e => {
  //   this.setState({
  //     addFeature: e.target.value
  //   })
  // }

//  const handleNewFeature = e => {
//     // e.preventDefault()
//     // this.props.addFeature(this.state.features)
//     setAdditionalFeatures(e.target.value)
//   }

  return (
    <div>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    car: state.car,
    name: state.car.name,
    image: state.car.image,
    price: state.car.price,
    features: state.car.features
  }
}

export default connect(mapStateToProps, { addFeature })(Header)