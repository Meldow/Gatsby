import React from 'react'
import { Link } from 'gatsby';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import css from './layout.module.css';

const ListLink = props => (
    <Grid item>
        <h2>
            <Link className={ css.space } to={ props.to }>{ props.children }</Link>
        </h2>
    </Grid>
);

export default ({ children }) => (
    <div>
        <header className={ css.header }>
            <Grid container direction={ 'row' } justify={ 'center' }>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/when/">When</ListLink>
                <ListLink to="/where/">Where</ListLink>
            </Grid>
        </header>
        { children }
    </div>
)
