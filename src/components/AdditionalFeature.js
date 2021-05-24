import React from 'react'
import { connect } from 'react-redux'

import { addFeature } from '../actions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          console.log(`vt: AdditionalFeatures.js: AdditionalFeature: props.features: ${props.features}`)
          // this.handleAddFeature()
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  )
}

// export default AdditionalFeature

const mapStateToProps = state => {
  return {
    key: state.additionalFeatures.item,
    // features: state.car.features,
    // name: state.car.name,
    // price: state.car.price
  }
}

export default connect(mapStateToProps, {
  addFeature
})(AdditionalFeature)

// const AdditionalFeature = props => {
// // class AdditionalFeature extends React.Component {

//   state = {
//     features: []
//   }

//   handleChanges = e => {
//     this.setState({ features: ['poop']})
//   }

//   handleAddFeature = e => {
//     e.preventDefault()
//     this.props.addFeature(this.state.features)
//   }
  
//   // render() {
//     return (
//       <li>
//         {/* Add an onClick that will let you add a feature to your car */}
//         <button
//           className="button"
//           onClick={() => {
//             // console.log(`vt: AdditionalFeatures.js: AdditionalFeature: props.features: ${this.props.features}`)
//             // this.handleAddFeature()
//           }}
//         >
//           Add
//         </button>
//         {this.props.feature.name} (+{this.props.feature.price})
//       </li>
//     )
//   }

// // export default AdditionalFeature

