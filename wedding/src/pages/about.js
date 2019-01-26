import React from "react"
import { Link } from 'gatsby';
import Header from "../components/header"

export default () => (
    <div style={{ color: `teal` }}>
        <Header headerText="About this website"/>
        <p>Such wow. Very React.</p>
        <Link to="/">Home</Link>
    </div>
)
