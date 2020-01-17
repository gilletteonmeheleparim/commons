import React, { useContext } from 'react'
import Route from '../components/templates/Route'
import withTracker from '../hoc/withTracker'

const Model = () => {

    return (
        <Route
            title="Model"
            description={`Machine learning model that learns parameters from all datasets combined. Coming soon`}
        >

        </Route>
    )
}

export default withTracker(Model)