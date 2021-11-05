import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  }
}))

function Shop(props) {
  const classes = useStyles();

  return (
    <Container
      className={classes.root}
      maxWidth="xl"
      component="main"
      style={{
        backgroundColor: 'red'
      }}
    >
      <Header />
      <Grid
        container
        xs={12}
        sm={10}
        selfAlign="center"
        alignItems="center"
        justifyContent="center"
        style={{
          backgroundColor: 'greenyellow'
        }}
      >
        Shop
      </Grid>
    </Container>
  )
}

export default Shop;