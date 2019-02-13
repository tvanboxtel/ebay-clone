import request from 'superagent'

export const ADVERTISEMENTS_FETCHED = 'ADVERTISEMENTS_FETCHED'
export const SINGLE_ADVERTISEMENT_FETCHED = 'SINGLE_ADVERTISEMENT_FETCHED'


const baseUrl = 'http://localhost:4000'

const advertisementsFetched = advertisements => ({
    type: ADVERTISEMENTS_FETCHED,
    advertisements
})

export const loadAdvertisements = () => (dispatch, getState) => {
    if (getState().advertisements) return console.log('nope')

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