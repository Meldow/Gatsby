import React from 'react'
import savethedateStyles from './savethedate.module.css'
import { Container, Grid, Card, Icon, Image, Segment } from 'semantic-ui-react'

const alightRight = {
    marginLeft: 'auto',
    marginRight: 0,
}
export default () => (
    <div className={ savethedateStyles.letter_font_small }>
        <Grid container centered columns={ 2 }>
            <Grid.Row columns={ 2 }>
                <Grid.Column textAlign='right'>
                    <Grid.Row
                        className={ savethedateStyles.letter_font_small }
                        style={ { height: '3rem' } }>
                        Save
                    </Grid.Row>
                    <Grid.Row
                        className={ savethedateStyles.letter_font_small }
                        style={ { height: '3rem' } }>
                        the
                    </Grid.Row>
                    <Grid.Row
                        className={ savethedateStyles.letter_font_small }
                        style={ { height: "3rem" } }>
                    date
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column
                    textAlign='left'
                    className={ savethedateStyles.numeric_font_big }>
                    24
                </Grid.Column>
            </Grid.Row>
            <Grid.Row
                className={ savethedateStyles.letter_font_big }>
                August
            </Grid.Row>
            <Grid.Row
                className={ savethedateStyles.numeric_font_normal }>
                2019
            </Grid.Row>
        </Grid>

    </div>
);
