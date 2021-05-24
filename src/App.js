
import React from 'react'
// import {createStore}, {Provider}
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// import components
import Header from './components/Header'
import AddedFeatures from './components/AddedFeatures'
import AdditionalFeatures from './components/AdditionalFeatures'
import Total from './components/Total'

// import reducer
import { featuresReducer } from './reducers'

// create store, link reducer
const store = createStore(featuresReducer)

// const App = () => {

function App() {

  // old state init
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // }

  return (
    <div className="boxes">
      {/* wrap the app within the provider, pass store */}
      <Provider store={store}>
        {/* <div className="box">
          <Header car={state.car} />
          <AddedFeatures car={state.car} />
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
          <Total car={state.car} additionalPrice={state.additionalPrice} />
        </div> */}
        <div className="box">
          <Header />
          {/* <AddedFeatures /> */}
        </div>
        <div className="box">
          <AdditionalFeatures />
          {/* <Total car={state.car} additionalPrice={state.additionalPrice} /> */}
        </div>
      </Provider>
    </div>
  )
}

export default App
