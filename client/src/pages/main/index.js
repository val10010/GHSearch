import React from 'react';
import Grid from '@material-ui/core/Grid';
import Search from "Components/search";

//styles
import useStyles from './style';

const Main = () => {
    const classes = useStyles();

    const onRequestSearch = (value) => {
        if(value.trim().length > 0) {
           console.log(encodeURIComponent(value));
        }
    };

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12}>
                <Search
                    cancelOnEscape={true}
                    onRequestSearch={onRequestSearch}
                />
            </Grid>
        </Grid>
    );
};

export default Main;