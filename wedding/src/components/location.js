import React from 'react'
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const style = {
    span: {
        padding: '0.3rem'
    },
    cursor: {
        cursor: 'pointer'
    }
};

export default () => (
    <div>
        <Grid container direction={ 'column' }>
            <Grid item>
                <div
                    style={ style.cursor }
                    onClick={ () => window.open('https://goo.gl/maps/Liku3ZaTx982') }>
                    <FontAwesomeIcon icon="map-marked-alt" />
                    <span style={ style.span }>Marriage ceremony</span>
                </div>

            </Grid>
            <Grid>
                <div
                    style={ style.cursor }
                    onClick={ () => window.open('https://goo.gl/maps/ay3SvnUceoK2') }>
                    <FontAwesomeIcon icon="map-marked-alt" />
                    <span style={ style.span }>Wedding reception</span>
                </div>

            </Grid>
        </Grid>
    </div>
)
