import React from "react"
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'

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
        <div
            style={ style.cursor }
            onClick={ () => {
                window.open(
                    'https://www.instagram.com/explore/tags/lopescosta/',
                )
            } }
        >
            <div>Share our journey!</div>
            <div>
                <Icon name="instagram" size="large" link />
                #LopesCosta
            </div>
            <div>Tag your photos!</div>
        </div>
    </div>
)
