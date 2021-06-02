import { Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { withController } from '../../hoc/withController'
import Input from './input'
import { ReminderController } from './ReminderController'
import ReminderList from './ReminerList'
import Summary from './Summary'

function ReminderScreen() {
    return (
        <div>
            <Typography variant="h2">Reminder Screen</Typography>
            <Input />
            <ReminderList />
            <Summary />
        </div>
    )
}

export default withController(ReminderController)(ReminderScreen)