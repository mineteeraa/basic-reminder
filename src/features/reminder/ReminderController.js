import React, { useContext, useState } from 'react'

export const ReminderContext = React.createContext()

export const useReminderContext = () => useContext(ReminderContext)

const mockupReminderList = [
    { title: "Test 1", isDone: true, isFavorite: false },
    /*     { title: "Test 2", isDone: false, isFavorite: true },
        { title: "Test 3", isDone: true, isFavorite: false } */
]

export const ReminderController = ({ children }) => {

    const [taskInput, setTaskInput] = useState("")
    const [reminderList, setReminderList] = useState(mockupReminderList)
    const [editingIndex, setEditingIndex] = useState(-1)

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

    const onClickFavorite = (item) => {

    }

    const onClickDone = () => {

    }

    return (
        <ReminderContext.Provider value={{
            //state
            taskInput,
            reminderList,

            //action
            onSave,
            setTaskInput,
            onDelete,
            onEdit,
            onClickFavorite,
            onClickDone
        }}>
            { children}
        </ReminderContext.Provider >
    )
}