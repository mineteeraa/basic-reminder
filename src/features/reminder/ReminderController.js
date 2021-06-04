import React, { useContext, useEffect, useState } from 'react'

export const ReminderContext = React.createContext()

export const useReminderContext = () => useContext(ReminderContext)

const mockupReminderList = [
    { title: "Task 1", isDone: true, isFavorite: true },
    { title: "Task 2", isDone: false, isFavorite: true },
    { title: "Task 3", isDone: true, isFavorite: false }
]

export const ReminderController = ({ children }) => {

    const [taskInput, setTaskInput] = useState("")
    const [reminderList, setReminderList] = useState(mockupReminderList)
    const [editingIndex, setEditingIndex] = useState(-1)
    const [totalDone, setTotalDone] = useState(0)
    const [totalReminders, setTotalReminders] = useState(0)
    const [totalFavorites, setTotalFavorites] = useState(0)

    useEffect(() => {
        setTotalReminders(reminderList.length)
        setTotalDone(
            reminderList.filter(m => m.isDone).length
        )
        setTotalFavorites(
            reminderList.filter(m => m.isFavorite).length
        )
    }, [reminderList])

    const onSave = () => {
        if (editingIndex === -1) {
            setReminderList([
                ...reminderList,
                {
                    title: taskInput, isDone: false, isFavorite: false
                }
            ])
        } else {
            let tmp = reminderList
            tmp[editingIndex] = {
                ...tmp[editingIndex],
                title: taskInput
            }
        }
        setTaskInput("")
        setEditingIndex(-1)
    }


    const onDelete = (item) => (
        setReminderList([
            ...reminderList.filter(m => m !== item)
        ])
    )

    const onEdit = (item) => {
        setTaskInput(item.title)
        const findEditingIndex = reminderList.findIndex(m => m === item)
        setEditingIndex(findEditingIndex)
    }

    const onClickDone = (item) => {
        const findEditingIndex = reminderList.findIndex(m => m === item)

        let tmp = reminderList
        tmp[findEditingIndex] = {
            ...tmp[findEditingIndex],
            isDone: !tmp[findEditingIndex].isDone
        }
        setReminderList([...tmp])
    }

    const onClickFavorite = (item) => {
        const findEditingIndex = reminderList.findIndex(m => m === item)

        let tmp = reminderList
        tmp[findEditingIndex] = {
            ...tmp[findEditingIndex],
            isFavorite: !tmp[findEditingIndex].isFavorite
        }
        setReminderList([...tmp])
    }

    return (
        <ReminderContext.Provider value={{
            //state
            taskInput,
            reminderList,
            totalDone,
            totalReminders,
            totalFavorites,

            //action
            onSave,
            setTaskInput,
            onDelete,
            onEdit,
            onClickDone,
            onClickFavorite
        }}>
            { children}
        </ReminderContext.Provider >
    )
}