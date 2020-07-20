import React, { Fragment, useState } from "react";
import "./App.css";
import {
  makeStyles,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Logo from "./icons/MSALogo.png";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({

    background: {
        height: '100vh',
        margin: 'auto',
        padding: '100px',
    },

    logo: {
        height: '250px',
        width: '250px',
        color: '#FF4500',
        marginBottom: '-40px',
    },

    button: {
        margin: '30px',
        color: '#FF4500',
        borderRadius: '7px',
        borderColor: '#FF4500',
        borderWidth: '3px',
        fontWeight: 'bold',
        fontSize: '25px',
        padding: '15px 35px 15px 35px',
        '&:hover': {
            borderWidth: '3px',
            borderColor: '#FF4500',
            background: '#FF4500',
            color: 'white',
        },
    },

    centredContainer: {
        textAlign: 'center',
        margin: '5px',
    },

    title: {
        fontSize: '100px',
        textTransform: 'uppercase',
        color: '#FF4500',
        fontWeight: 'bold',
    },

    subheading: {
        fontSize: '35px',
        fontWeight: 'bold',
    }



}));

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.background}>
      <Grid container>
        <Grid item xs={12} className={classes.centredContainer}>
        <img src={Logo} className={classes.logo} alt="Logo"/>
        </Grid>
        <Grid item xs={12} className={classes.centredContainer}>
            <Typography className={classes.title}>
                Fame Search
            </Typography>
        </Grid>
        <Grid item xs={12} className={classes.centredContainer}>
            <Typography className={classes.subheading}>
                Challenge the owners of your name
            </Typography>
        </Grid>
        <Grid item xs={12} className={classes.centredContainer}>
        <Typography className={classes.subheading}>
        <Button variant={"outlined"} className={classes.button} color={"primary"}>Start Searching</Button>
            </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
