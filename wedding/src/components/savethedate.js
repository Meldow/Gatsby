import React from "react"
import savethedate from "../images/save_the_date_450x350.png"
import { Card, CardContent, CardHeader } from '@material-ui/core';

export default () => (
    <Card raised>
        <CardHeader title="When?"/>
        <CardContent>
            <img src={savethedate} alt="savethedate" />
        </CardContent>
    </Card>
)
