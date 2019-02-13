import React from 'react'
import { Link } from 'react-router-dom'

class Advertisements extends React.Component {

  renderAds(ad) {
    return <li key={ad.id}>
      <Link to={`advertisements/${ad.id}`}>
        {ad.title}, {ad.price}
      </Link>
    </li>

  }

  render() {
    const ads = this.props.advertisements
    // if (ads) console.log('My props are:', this.props.advertisements)

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