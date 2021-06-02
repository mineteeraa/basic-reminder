import { Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'

export default function Summary() {
    return (
        <Grid justify="center" direction="column" container>
            <Typography variant="body">Progress: 0/2</Typography>
            <Typography variant="body">Favorite: 0/2</Typography>
        </Grid>
    )
}