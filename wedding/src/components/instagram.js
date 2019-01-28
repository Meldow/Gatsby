import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid';
import css from './instagram.module.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, CardHeader } from '@material-ui/core';

export default () => (
    <Card raised>
        <CardHeader title="Share!!" />
        <CardContent>
            <Grid direction={ 'column' } className={ css.cursor } justify={ 'center' }
                  onClick={ () => window.open('https://www.instagram.com/explore/tags/lopescosta/') }>
                <Grid item><h2><Icon name="instagram" size="large" fitted /> #LopesCosta</h2></Grid>
                <Grid item><h2>Tag your photos!</h2></Grid>
            </Grid>
        </CardContent>
    </Card>
)
