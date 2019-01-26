import React from 'react'
import { Link } from 'gatsby';
import Header from '../components/header'
import Layout from '../components/layout'

export default () => (
    <Layout>
        <div style={ { color: `teal` } }>
            <Header headerText="About this website" />
            <p>Such wow. Very React.</p>
        </div>
    </Layout>
)
