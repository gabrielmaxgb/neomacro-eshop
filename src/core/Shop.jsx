import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { connect } from 'react-redux';
import { changeTest as changeTestAction } from '../app/store/actions/shopActions';
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
  const {
    changeTest
  } = props;
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
        {console.log(props.shop)}
        <button onClick={() => changeTest('b')}>Muda teste pra 'b'</button>
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  shop: state.shopReducer
});

const mapDispatchToProps = (dispatch) => ({
  changeTest: (testValue) => dispatch(changeTestAction(testValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);