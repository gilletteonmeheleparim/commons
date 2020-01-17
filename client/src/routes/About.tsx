import React, { useContext } from 'react'
import { Market, User } from '../context'
import Route from '../components/templates/Route'
import Content from '../components/atoms/Content'
import VersionNumbers from '../components/molecules/VersionNumbers'
import Web3message from '../components/organisms/Web3message'
import stylesVersionNumbers from '../components/molecules/VersionNumbers/index.module.scss'
import withTracker from '../hoc/withTracker'

const About = () => {
    const user = useContext(User)

    return (
        <Route
            title=""
            description={`A database and data market to build a global model about Earth's ecological state`}
        >
            <Content>
                <p>
                    This is a database for structured data of land ecological characteristics intended for scietists in various ecology disciplines to collaborate and monetize their collected data. This growing data feeds into a machine learning model that learns to predict soil organic carbon content. This model is going to be an important stepping stone to using Earth's measured and approximized carbon stock as money.  
                </p>

            </Content>

            <Content>
                <h2 className={stylesVersionNumbers.versionsTitle}>
                    Your Web3 Account Status
                </h2>
                <Web3message extended />
                <VersionNumbers account={user.account} />
            </Content>
        </Route>
    )
}

export default withTracker(About)
