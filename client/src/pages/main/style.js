import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            paddingTop: 20
        },
        card: {
            padding: theme.spacing(2),
            textAlign: 'left',
            color: '#fff',
            boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            background: 'hsla(0,0%,100%,.1)'
        },
        title: {
            fontSize: 16,
        },
        desc: {
            fontSize: 14,
            color: 'rgb(179, 179, 179)'
        },
        button: {
            color: '#fff',
            border: '2px solid #fff',
            borderRadius: '10px',
            padding: '10px 10px',
            textDecoration: 'none',
            cursor: 'pointer'
        }
    }
));
export default useStyles;