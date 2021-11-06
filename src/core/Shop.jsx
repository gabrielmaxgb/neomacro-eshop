import React, { useState } from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
  changeTest as changeTestAction,
  filterTypeSelect as filterTypeSelectAction
} from '../app/store/actions/shopActions';
import SimpleSelect from '../components/SimpleSelect';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: props => props.xs ? 106 : 206,
    textAlign: 'start',
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '.6rem',

    "& .MuiOutlinedInput-input": {
      padding: '.6rem',
    }
  },
}))

function Shop(props) {
  const {
    shopState,
    changeTest,
    filterTypeSelect
  } = props;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  // console.log(xs);
  const widthControl = [xs]
  const [filterType, setFilterType] = useState('');
  const classes = useStyles({ xs });
  const filterOptions = [
    {
      label: <em>None</em>,
      value: "none"
    },
    {
      label: "Rating",
      value: "rating"
    },
  ];

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
    filterTypeSelect(event.target.value);
  };

  // console.log(shopState)
  // console.log('filter type:' + ' ' + filterType);
  // console.log('baixo');
  // console.log(classes.formControl);

  return (
    <Container
      className={classes.root}
      maxWidth="xl"
      component="main"
      style={{
        backgroundColor: ''
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
          backgroundColor: ''
        }}
      >
        <Grid
          container
          item
          alignItems="center"
          justifyContent={xs ? "flex-start" : "center"}
          xs={12}
          style={{
            backgroundColor: ''
          }}
        >
          <SimpleSelect
            label="Sort by"
            value={filterType}
            onChange={handleFilterTypeChange}
            options={filterOptions}
            className={classes.formControl}
          />
          {/* <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={filterType}
              onChange={handleFilterTypeChange}
              label="Sort by"
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
              <MenuItem value="price">Price</MenuItem>
            </Select>
          </FormControl> */}
        </Grid>
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          xs={12}
        >
          products list
        </Grid>
        {/* {console.log(props.shop)}
        <button onClick={() => changeTest('b')}>Muda teste pra 'b'</button> */}
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  shopState: state.shopReducer
});

const mapDispatchToProps = (dispatch) => ({
  changeTest: (testValue) => dispatch(changeTestAction(testValue)),
  filterTypeSelect: (filterType) => dispatch(filterTypeSelectAction(filterType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);