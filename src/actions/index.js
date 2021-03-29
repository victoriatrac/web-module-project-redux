export const UPDATE_PRICE = 'UPDATE_PRICE'

export const updatePrice = newPrice => {
    return {
        type: UPDATE_PRICE,
        payload: newPrice + 666
    }
}