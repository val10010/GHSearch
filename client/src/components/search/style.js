import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        root: {
            height: theme.spacing(6),
            display: "flex",
            justifyContent: "space-between",
        },
        iconButton: {
            color: theme.palette.action.active,
            transform: "scale(1, 1)",
            transition: theme.transitions.create(["transform", "color"], {
                duration: theme.transitions.duration.shorter,
                easing: theme.transitions.easing.easeInOut,
            }),
        },
        iconButtonHidden: {
            transform: "scale(0, 0)",
            "& > $icon": {
                opacity: 0,
            },
        },
        searchIconButton: {
            marginRight: theme.spacing(-6),
        },
        icon: {
            transition: theme.transitions.create(["opacity"], {
                duration: theme.transitions.duration.shorter,
                easing: theme.transitions.easing.easeInOut,
            }),
        },
        input: {
            width: "100%",
        },
        searchContainer: {
            margin: "auto 16px",
            width: `calc(100% - ${theme.spacing(6 + 4)}px)`, // 6 button + 4 margin
        },
    }
));
export default useStyles;