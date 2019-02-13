import request from 'superagent'

export const ADVERTISEMENTS_FETCHED = 'ADVERTISEMENTS_FETCHED'

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