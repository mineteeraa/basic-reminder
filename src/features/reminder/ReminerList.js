import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { useReminderContext } from './ReminderController';
import FavoriteButton from '../../components/FavouriteButton';


export default function ReminderList() {
    const { reminderList,
        onDelete,
        onEdit,
        onClickDone,
        onClickFavorite } = useReminderContext()
    return (
        <List>
            {reminderList.map((item, key) => {
                const labelId = `checkbox-list-label-${key}`;
                return (
                    <ListItem key={key} role={undefined} dense button >
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={item.isDone}
                                onClick={() => onClickDone(item)}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                            <FavoriteButton
                                checked={item.isFavorite}
                                onClick={() => onClickFavorite(item)}
                            />

                        </ListItemIcon>
                        <ListItemText id={labelId} primary={item.title} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments"
                                onClick={() => onEdit(item)}>
                                <CreateIcon />
                            </IconButton>
                            <IconButton edge="end"
                                aria-label="comments"
                                onClick={
                                    () => onDelete(item)
                                }
                            >
                                <DeleteIcon style={{ color: "red" }} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}