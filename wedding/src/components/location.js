import React from 'react'
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import css from './location.module.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';

export default () => (
    <Card raised>
        <CardHeader title="Where?"/>
        <CardContent>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={ 16 }
                className={ css.space }>
            <Grid item>
                <div
                    className={ css.cursor }
                    onClick={ () => window.open('https://goo.gl/maps/Liku3ZaTx982') }>
                    <h2><FontAwesomeIcon icon="map-marked-alt" /> Ceremony</h2>
                </div>
            </Grid>
            <Grid item>
                <div
                    className={ css.cursor }
                    onClick={ () => window.open('https://goo.gl/maps/ay3SvnUceoK2') }>
                    <h2><FontAwesomeIcon icon="map-marked-alt" /> Reception</h2>
                </div>
            </Grid>
        </Grid>
        </CardContent>
    </Card>
)
