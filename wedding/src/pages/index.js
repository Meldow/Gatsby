import React from 'react'
import Layout from '../components/layout'
import Main from '../components/main'
import Instagram from '../components/instagram'
import Savethedate from '../components/savethedate'
import Location from '../components/location'
import Grid from '@material-ui/core/Grid';
import { library } from '@fortawesome/fontawesome-svg-core'
import css from './index.module.css'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarkedAlt);

export default () => (
    <Layout>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={ 16 }
            className={ css.space }>
            <Grid item><Savethedate /></Grid>
        </Grid>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={ 16 }
            className={ css.space }>
            <Grid item><Instagram /></Grid>
            <Grid item><Main /></Grid>
            <Grid item><Location /></Grid>
        </Grid>

    </Layout>
)
