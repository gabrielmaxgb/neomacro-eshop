import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react'
import PropTypes from 'prop-types';

function SimpleSelect(props) {
  const {
    variant,
    label,
    value,
    onChange,
    options,
    className,
    disabled
  } = props;

  // console.log(options);

  // maps and returns options
  const renderOptions = () => {
    return options.map((option) =>
      <MenuItem value={option.value}>
        {option.label}
      </MenuItem>
    )
  };

  return (
    <FormControl variant={variant || 'outlined'} className={className}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        // displayEmpty={true}
        // renderValue={() => <em>None</em>}
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={onChange}
        label={label || null}
        disabled={disabled || false}
      >
        {renderOptions()}
      </Select>
    </FormControl>
  )
}

SimpleSelect.propTypes = {
  name: PropTypes.string,
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.object,
  disabled: PropTypes.bool,
};

export default SimpleSelect;
