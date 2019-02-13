import React from 'react'
// import { Link } from 'react-router-dom'

class Advertisements extends React.Component {

  renderAds(ad) {
    //can implement Link logic here
    return <li key={ad.id}>{ad.title}, {ad.price}
    </li>

  }

  render() {
    // console.log('My props are:', this.props.advertisements)
    const ads = this.props.advertisements
    return (
      <div className="App">
        <header className="App-header">
          Welcome to FreeBay, an open source alternative to eBay!
          {!ads && 'Loading...'}
          {ads &&
            <ul>
              {ads.map(this.renderAds)}
            </ul>}
        </header>
      </div>
    )
  }

}

export default Advertisements