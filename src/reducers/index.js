// import action creators
import { ADD_FEATURE } from '../actions'

// set initialState
const initialState = {

    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

// initialize the Reducer
// paramaters: (1) state = initialState (2) action
export const featuresReducer = ( state = initialState, action ) => {
    
    // console.log(
    //     'vt: featuresReducer.js: featuresReducer: features, action: ',
    //     state.car.features, action
    // )

    // console.log(
    //     'vt: featuresReducer.js: featuresReducer: additionalFeatures: ',
    //     state.additionalFeatures
    // )

    // call switch with (action.type) as parameter, create cases
    // case returns spread state (...state) with prop to change
    // if property is an embedded array, must spread again
    // use action.payload to update user inputs

    switch (action.type) {
        case ADD_FEATURE:
            // return {
            //     ...state,
            //     car: [ state.car, {
            //         features: [...state.features, { id: action.payload }]
            //     }]
            // }
            return {
                ...state,
                // features: ['poop']
                car: [ ...state.car, { features: ['poop'] } ]
            }
        default: return state
    }
}