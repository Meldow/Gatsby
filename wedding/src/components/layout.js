import React from 'react'
import { Link } from 'gatsby';
import 'semantic-ui-css/semantic.min.css'

const ListLink = props => (
    <li style={ { display: `inline-block`, marginRight: `1rem` } }>
        <Link to={ props.to }>{ props.children }</Link>
    </li>
);

export default ({ children }) => (
    <div>
        <header style={ { marginBottom: `1.5rem` } }>
            <Link to="/" style={ { textShadow: `none`, backgroundImage: `none` } }>
                <h3 style={ { display: `inline` } }>MySweetSite</h3>
            </Link>
            <ul style={ { listStyle: `none`, float: `right` } }>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/about-css-modules/">About CSS</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>
        </header>
        { children }
    </div>
)
