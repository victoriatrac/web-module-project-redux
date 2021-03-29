import { UPDATE_PRICE } from "../actions"

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const priceReducer = ( state = initialState, action) => {
    console.log('bk: titleReducer.js: state, action: ', state, action)
    switch (action.type) {
        //cases + returns
        case(UPDATE_PRICE):
            return({
                ...state,
                // additionalPrice: state.car.price + state.additionalPrice
                additionalPrice: 
            })
    }
}