import request from 'superagent'

export const ADVERTISEMENTS_FETCHED = 'ADVERTISEMENTS_FETCHED'
export const SINGLE_ADVERTISEMENT_FETCHED = 'SINGLE_ADVERTISEMENT_FETCHED'
export const ADVERTISEMENT_CREATE_SUCCESS = 'ADVERTISEMENT_CREATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const advertisementsFetched = advertisements => ({
    type: ADVERTISEMENTS_FETCHED,
    advertisements
})

export const loadAdvertisements = () => (dispatch, getState) => {
    if (getState().advertisements) return

    request(`${baseUrl}/advertisements`)
    .then(response => {
        dispatch(advertisementsFetched(response.body))
    })
    .catch(console.error)
}

const singleAdvertisementFetched = advertisement => ({
    type: SINGLE_ADVERTISEMENT_FETCHED,
    advertisement
})

export const loadSingleAdvertisement = (id) => dispatch => {
    request
        .get(`${baseUrl}/advertisements/${id}`)
        .then(response => {
            dispatch (singleAdvertisementFetched(response.body))
        })
        .catch(console.error)

}

const advertisementCreateSuccess = advertisement => ({
    type: advertisementCreateSuccess,
    advertisement
})

export const createAdvertisement = (advertisement) => dispatch => {
    console.log('Function is being run')
    request
    .post(`${baseUrl}/advertisements`)
    .send(advertisement)
    .then(response => {
        dispatch(advertisementCreateSuccess(response.body))
    })
    .catch(console.error)
}