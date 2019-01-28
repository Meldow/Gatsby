import React from "react"
import us from "../images/us_450x350.png"
import Card from '@material-ui/core/Card';
import { CardActions, CardContent } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import css from './main.module.css'

export default () => (
    <Card raised className={css.no_space}>
        <CardHeader title="Join us!"/>
        <CardContent>
            <img src={us} alt="alex&rita" />
        </CardContent>
        <CardActions>
            <h2>Alex & Rita</h2>
        </CardActions>
    </Card>
)
