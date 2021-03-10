import React, {useEffect, useState} from 'react';
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Search from 'Components/search';
import useDebounce from 'Hooks/useDebounce';
import  postSearchService  from 'Services/postSearchService'


//styles
import useStyles from './style';

const Main = () => {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearchTerm = useDebounce(searchTerm, 1000);


    useEffect(
        () => {
            if (debouncedSearchTerm) {
                postSearchService(debouncedSearchTerm);
            }
        },

        [debouncedSearchTerm]
    );

    const onRequestSearch = (value) => {
        postSearchService(value);
    };

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12}>
                <Search
                    cancelOnEscape={true}
                    onRequestSearch={onRequestSearch}
                    onChange={setSearchTerm}
                />
            </Grid>
        </Grid>
    );
};

export default Main;