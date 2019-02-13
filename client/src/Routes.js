import React from 'react'
import {Switch, Route} from 'react-router-dom'
//, Redirect

import Advertisements from './components/Advertisements/AdvertisementContainer'
import DetailPage from './components/DetailPage/DetailPageContainer'


// Needed yet?
// import {connect} from 'react-redux'
// import {withRouter} from 'react-router'


//currently takes no parameter and goes to hardcoded /details
export default function Routes() {
    return (<div>
        <Switch>
            <Route path="/" exact component={Advertisements} />
            <Route path="/advertisements/details" component={DetailPage} />
        </Switch>
    </div>)
}

// implement mapStateToProps?

// withRouter(connect) may be necessary later
