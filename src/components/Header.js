import React from 'react'
import { connect } from 'react-redux'

// import { updatePrice } from '../actions'

const Header = props => {

  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      {/* <p>Amount: ${props.additionalPrice}</p> */}
      <p>Amount: ${props.car.price}</p>
    </>
  )
}

// const mapStateToProps = state => {
//   return {
//     //state update
//     //editing: state.title.editing
//     // additionalPrice: state.additionalPrice
//   }
// }

export default Header

// export default connect(mapStateToProps, { updatePrice })(Header)