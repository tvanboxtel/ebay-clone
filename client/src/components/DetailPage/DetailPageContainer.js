import React from 'react'
import DetailPage from './DetailPage'

// import { connect } from 'react-redux'
// import { loadSingleAdvertisement } from '../../actions/advertisements'

//more imports

class DetailPageContainer extends React.Component {
    // componentDidMount() {
    //     this.props.loadSingleAdvertisement(Number(this.props.match.params.id))
    // }


    render() {
        return (
         <DetailPage 
         //advertisement={this.props.advertisement}
         />
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         advertisement: state.advertisement
//     }
// }

// replace 
export default DetailPageContainer

//with
// export default connect(mapStateToProps, { loadSingleAdvertisement })(DetailPageContainer)