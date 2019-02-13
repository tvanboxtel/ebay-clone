import {combineReducers} from 'redux' //might be fluff because simple app
import advertisements from './advertisements'
import advertisement from './advertisement'

export default combineReducers({
    //reducers
    advertisements,
    advertisement
})