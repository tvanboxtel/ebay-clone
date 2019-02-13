import { ADVERTISEMENTS_FETCHED, ADVERTISEMENT_CREATE_SUCCESS } from '../actions/advertisements'

const initialState = null

const advertisementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADVERTISEMENTS_FETCHED:
            return state = action.advertisements

        case ADVERTISEMENT_CREATE_SUCCESS:
            return [...state, action.advertisement]

        default:
            return state;
    }
}

export default advertisementsReducer