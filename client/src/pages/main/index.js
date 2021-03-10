import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import Search from 'Components/search';
import useDebounce from 'Hooks/useDebounce';
import { mainAction } from  'Actions/main';


//styles
import useStyles from './style';
import {useMain} from "./hooks/useMain";
import {useDispatch} from "react-redux";

const Main = () => {
    const dispatch = useDispatch();
    const {
        getRepositoriesData,
        items,
        totalCount
    } = useMain();
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    const debouncedSearchTerm = useDebounce(searchTerm, 1000);


    useEffect(
        () => {
            if (debouncedSearchTerm) {
                getRepositoriesData(debouncedSearchTerm, page);
            }
        },
        [debouncedSearchTerm, page]
    );

    const onRequestSearch = (value) => {
        getRepositoriesData(value, page);
    };

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12}>
                <Search
                    cancelOnEscape={true}
                    onRequestSearch={onRequestSearch}
                    onChange={setSearchTerm}
                    onCancelSearch={() => dispatch(mainAction.setItems([]))}
                />
            </Grid>
            {
                items.map(item => (
                    <Grid item xs={12} key={item.id}>
                        <Card className={classes.card} >
                            <CardContent>
                                <Typography className={classes.title}  variant="h5" component="h2" >
                                    Repository name: {item.full_name}
                                </Typography>
                                <Typography className={classes.pos} >
                                    Language: {item.language}
                                </Typography>
                                <Typography className={classes.desc} >
                                    Description: {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link href={item.html_url}  target="_blank" className={classes.button} >Go to repository</Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }

            {(items.length > 0) &&
                <Pagination
                    className={classes.pagination}
                    type="page"
                    count={totalCount}
                    color="secondary"
                    onChange={(e, page) => {
                        setPage(page);
                    }}
                />
            }

        </Grid>
    );
};

export default Main;