import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useReminderContext } from './ReminderController'

export default function Summary() {
    const {
        totalReminders,
        totalDone,
        totalFavorites,
    } = useReminderContext()
    return (
        <Grid justify="center" direction="column" container>
            <Typography variant="body">Progress: {totalDone}/{totalReminders}</Typography>
            <Typography variant="body">Favorite: {totalFavorites}/{totalReminders}</Typography>
        </Grid>
    )
}