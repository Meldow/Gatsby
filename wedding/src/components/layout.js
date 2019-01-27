import React from 'react'
import { Link } from 'gatsby';
import 'typeface-roboto';

const ListLink = props => (
    <li style={ { display: `inline-block`, marginRight: `1rem` } }>
        <Link to={ props.to }>{ props.children }</Link>
    </li>
);

export default ({ children }) => (
    <div>
        <header style={ { marginBottom: `1.5rem` } }>
            <Link to="/" style={ { textShadow: `none`, backgroundImage: `none` } }>
                <h3 style={ { display: `inline` } }>LopesCosta</h3>
            </Link>
            <ul style={ { listStyle: `none`, float: `right` } }>
                <ListLink to="/when/">When</ListLink>
                <ListLink to="/where/">Where</ListLink>
            </ul>
        </header>
        { children }
    </div>
)
