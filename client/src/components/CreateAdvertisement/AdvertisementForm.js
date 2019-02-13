import React from 'react'

function AdvertisementForm(props) {
    return (
        <div className="App">
            <header className="App-header">
                <form className="advertisementForm" onSubmit={props.onSubmit}>
                    <label>Title:
                <input type="text" />
                    </label> <br />

                    <label>Price:
                <input type="text" />
                    </label> <br />

                    <label>
                        <input type="submit" value="Submit" />
                    </label>
                </form>
            </header>
        </div>
    )
}

export default AdvertisementForm