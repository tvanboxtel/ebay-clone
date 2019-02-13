import { SINGLE_ADVERTISEMENT_FETCHED } from '../actions/advertisements'

const initialState = null

const advertisementReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SINGLE_ADVERTISEMENT_FETCHED:
            return state = action.advertisement;

        default:
            return state;
    }
}

export default advertisementReducer