import React from 'react'
import AdvertisementForm from './AdvertisementForm'


//dont exist yet
// import { connect } from 'react-redux'
// import { createAdvertisement } from '../../actions/advertisements'

class CreateAdvertisementContainer extends React.Component {
    state = {
        title: '',
        price: '',
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            title: '',
            price: '',

        })
        this.props.createAdvertisement(this.state)
    }

    render() {
        return (<AdvertisementForm 
        onSubmit={this.onSubmit}
        values={this.state}
        />)
    }
}


// replace
export default CreateAdvertisementContainer

// with
// export default connect(null, {createAdvertisement})(CreateAdvertisementContainer)