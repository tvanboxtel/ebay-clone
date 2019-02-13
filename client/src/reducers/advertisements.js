import { ADVERTISEMENTS_FETCHED } from '../actions/advertisements'

const initialState = null

const advertisementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADVERTISEMENTS_FETCHED:
            return state = action.advertisements


        default:
            return state;
    }
}

export default advertisementsReducer