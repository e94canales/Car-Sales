export const ADD_FEATURES = 'ADD_FEATURES'
export const addFeatures = features => {

    return { type: 'ADD_FEATURES', payload: features }
}


export const REMOVE_FEATURES = 'REMOVE_FEATURES'
export const removeFeatures = features => {

    return { type: 'REMOVE_FEATURES', payload: features }
}

export const ADD_TO_TOTAL = 'ADD_TO_TOTAL'
export const addToTotal = price => {
    return { type: 'ADD_TO_TOTAL', payload: price}
}

export const SUB_TO_TOTAL = 'SUB_TO_TOTAL'
export const subToTotal = price => {
    return { type: 'SUB_TO_TOTAL', payload: price }
}