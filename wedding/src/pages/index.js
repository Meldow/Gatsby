import React from 'react'
import Layout from '../components/layout'
import Main from '../components/main'
import Instagram from '../components/instagram'
import Savethedate from '../components/savethedate'
import Location from '../components/location'
import { Grid } from 'semantic-ui-react';

export default () => (
    <Layout>
        <Grid container verticalAlign='middle' columns={ 2 } centered>
            <Grid.Row>
                <Grid.Column>
                    <Main />
                </Grid.Column>
                <Grid.Column>
                    <Savethedate />
                </Grid.Column>
                <Grid.Column>
                    <Instagram />
                </Grid.Column>
                <Grid.Column>
                    <Location />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Layout>
)
