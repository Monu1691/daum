export const incNumber = (dtVal) => {
    return {
        type: 'INCREMENT_NUMBER',
        payload: dtVal
    }
}

export const decNumber = (dtVal) => {
    return {
        type: 'DECREMENT_NUMBER',
        payload: dtVal
    }
}

export const cartValue = (dtVal) => {
    return {
        type: 'CART_VALUE',
        payload: dtVal
    }
}