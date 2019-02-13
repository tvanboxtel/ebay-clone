import React from 'react'
import Advertisements from './Advertisements'
import { loadAdvertisements } from '../../actions/advertisements'
import CreateAdvertisement from '../CreateAdvertisement/CreateAdvertisementContainer'
import { connect } from 'react-redux'


class AdvertisementContainer extends React.Component {
    componentDidMount() {
        this.props.loadAdvertisements()
    }


    render() {
        return (
            <div>
                <Advertisements advertisements={this.props.advertisements} />
                <CreateAdvertisement />
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        advertisements: state.advertisements
    }
}

export default connect(mapStateToProps, { loadAdvertisements })(AdvertisementContainer)


//this file used to be called index.js