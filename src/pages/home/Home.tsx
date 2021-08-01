import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const Home = (props : Object) => {
    const classes = useStyles();

    return (
        <>
            <section className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6}>
                      <Divider />
                      <Paper className={classes.paper}>
                      xs=12
                      </Paper>
                      <Divider />
                      <Paper className={classes.paper}>xs=12</Paper>
                      <Divider />
                      <Paper className={classes.paper}>xs=12</Paper>
                      <Divider />
                      <Paper className={classes.paper}>xs=12</Paper>
                      <Divider />
                      <Paper className={classes.paper}>xs=12</Paper>
                      <Divider />
                    </Grid>
                    <Grid item xs>
                      <Divider />
                      <Paper className={classes.paper}>xs=6</Paper>
                      <Divider />
                      <Paper className={classes.paper}>xs=6</Paper>
                      <Divider />
                      <Paper className={classes.paper}>xs=6</Paper>
                      <Divider />
                      <Paper className={classes.paper}>xs=6</Paper>
                      <Divider />
                      <Paper className={classes.paper}>xs=6</Paper>
                      <Divider />
                    </Grid>
                </Grid>
            </section>
        </>
    );
}

export default Home;