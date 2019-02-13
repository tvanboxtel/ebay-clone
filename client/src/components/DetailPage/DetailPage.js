import React from 'react'

export default class DetailPage extends React.Component {
    
    render() {

        // would be nice to use destructive assignment here,
        // have no time for it.

        // if (this.props.advertisement) {
        //     const { id, title, price } = this.props.advertisement
        //     console.log(title)
        // }

        // Also, this is where the details of the product would go
        // but there are no details in the database yet..

        return (
            <div>
                {!this.props.advertisement && 'Loading...'}

                {this.props.advertisement && <div>
                    <h1>{this.props.advertisement.title}</h1>
                    <h3>{this.props.advertisement.price}</h3>
                </div>}
            </div>
        )
    }    
}