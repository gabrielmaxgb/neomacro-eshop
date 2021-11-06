import { Button, FormControl, Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import SimpleSelect from './SimpleSelect';
import { connect } from 'react-redux';
import { capitalize } from '../utils';
import { setFilterParams as setFilterParamsAction } from '../app/store/actions/shopActions';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1.6rem 0 .5rem 0',
    padding: '.2rem 0',
    // backgroundColor: 'pink',
    background: '#F9F9F9',
  },
  formControl: {
    // margin: theme.spacing(1),
    // margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    maxWidth: 600,
    textAlign: 'start',
    // minHeight: '36px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '.6rem',

    "& .MuiOutlinedInput-input": {
      padding: '.6rem',
    }
  },
  currencyTextField: {
    margin: theme.spacing(1),
  },
  filterSpecified: {
    margin: theme.spacing(1),
    minWidth: 200,
    textAlign: 'start',
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '.6rem',

    "& .MuiOutlinedInput-input": {
      padding: '.6rem',
    }
  },
  filterButton: {
    margin: '0 2rem',
    fontWeight: 'bold',
    textTransform: 'none',
  }
}));

const Headersfilter = (props) => {
  const {
    shopState,
    setFilterParamsData
  } = props;
  const classes = useStyles();
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [selectParam, setSelectParam] = useState('test');

  const handleMaxValueChange = (value) => {
    setMaxValue(value);
  };

  const handleMinValueChange = (value) => {
    setMinValue(value);
  };

  const handleSelectParamChange = (e) => {
    setSelectParam(e.target.value)
  };

  const handleApplyFilter = (maxValue, minValue, selectParam) => {
    const filterParamsData = {
      maxValue: maxValue,
      minValue: minValue,
      selectParam: selectParam
    }
    setFilterParamsData(filterParamsData);
  };

  // handleApplyFilter(maxValue, minValue, selectParam);
  console.log(shopState);

  return (
    <Grid
      className={classes.root}
      container
      item
      alignItems="center"
      justifyContent="center"
      xs={12}
    >
      <Grid item container xs={2}></Grid>
      <Grid item container alignItems="center" justifyContent="center" xs={8}>
        <FormControl className={classes.formControl}>
          <CurrencyTextField
            className={classes.currencyTextField}
            label="Max"
            variant="outlined"
            value={maxValue}
            currencySymbol="€"
            outputFormat="number"
            onChange={(event, value) => handleMaxValueChange(value)}
            decimalCharacter=","
            digitGroupSeparator="."
          />
          <CurrencyTextField
            className={classes.currencyTextField}
            label="Min"
            variant="outlined"
            value={minValue}
            currencySymbol="€"
            outputFormat="number"
            onChange={(event, value) => handleMinValueChange(value)}
            decimalCharacter=","
            digitGroupSeparator="."
          />
          <SimpleSelect
            label={shopState.filterType === 'none' ? 'Any filter applied' : capitalize(shopState.filterType)}
            disabled={shopState.filterType === 'none' || shopState.filterType === '' ? true : false}
            value={selectParam}
            onChange={handleSelectParamChange}
            options={shopState.filterType === 'none' ? [{ label: 'Any filter aplyed', value: '' }] : [{ label: '1 and above', value: '1-and-above' }]}
            className={classes.filterSpecified}
          />
        </FormControl>
      </Grid>
      <Grid item container alignItems="center" justifyContent="flex-end" xs={2}>
        {/* sets maxMinFilter onCLick */}
        <Button
          className={classes.filterButton}
          variant="outlined"
          onClick={() => handleApplyFilter(maxValue, minValue, selectParam)}
          color="primary"
        >
          Apply filters
        </Button>
      </Grid>
      {/* <button onClick={() => handleApplyFilter(maxValue, minValue, selectParam)}>
        apply filters button
      </button> */}
    </Grid >
  );
}

const mapStateToProps = (state) => ({
  shopState: state.shopReducer
});

const mapDispatchToProps = (dispatch) => ({
  setFilterParamsData: (filterParamsData) => dispatch(setFilterParamsAction(filterParamsData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Headersfilter);
