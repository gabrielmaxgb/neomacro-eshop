import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { formatPrice, truncateString } from '../utils';
import Rating from '@material-ui/lab/Rating';
import SimpleSelect from './SimpleSelect';
import { connect } from 'react-redux';
import { setCartSubtotal as setCartSubtotalAction } from '../app/store/actions/shopActions';
// import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    border: '1px solid #BCBDBC',
    borderRadius: '4px',
    maxWidth: '288px',
    padding: '.4rem',
    // minHeight:  '454px',
    maxHeight: '484px',
  },
  addButton: {
    minWidth: '85%',
    margin: '.5rem 0',
    textTransform: 'none',
    color: '#2264D1',
    border: `1px solid #9DC2FF`,
    boxSizing: 'border-box',
    borderRadius: '4px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: props => props.xs ? 70 : 90,
    textAlign: 'start',
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '.6rem',

    "& .MuiOutlinedInput-input": {
      padding: '.6rem',
    }
  },
  productPrice: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '150%',
    // display: flex;
    // alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
  }
}));

const ProductCard = (props) => {
  const {
    productData,
    shopState,
    setCartSubtotal
  } = props;
  const [itemAmount, setItemAmount] = useState(1);
  const classes = useStyles();
  // NOTE not pratical purpose
  const itemAmountOptions = [
    {
      label: '1',
      value: 1
    },
  ];

  const handleItemAmountChange = (event) => {
    setItemAmount(event.target.value);
    // filterTypeSelect(event.target.value);
  };

  const handleAddToCart = () => {
    console.log(productData.price);
    const newSubtotal = shopState.cartItemsSubtotal + productData.price;
    setCartSubtotal(newSubtotal);
  }

  return (
    <Grid
      className={classes.root}
      item
      container
      component="div"
      justifyContent="center"
      xs={12}
      style={{
        backgroundColor: 'transparent'
      }}
    >
      <Grid
        item
        container
        direction="column"
        justifyContent="space-around"
        xs={12}
        component="section"
      >
        <img src={productData.image.url} alt="your-product" />
        <Typography variant="body1" component="p" style={{ textAlign: 'start', minHeight: '60px' }}>
          {truncateString(productData.description, 50)}
        </Typography>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="flex-start"
        xs={12}
        component="section"
      >
        <Grid
          item
          container
          alignItems="center"
          justifyContent="flex-start"
          component="fieldset"
          style={{
            borderColor: 'transparent',
            paddingLeft: 0
          }}
        >
          <Rating name="rating" value={productData.rating} precision={0.1} readOnly />
          <Typography variant="body1" component="p" mx={15}>{productData.rating}</Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="space-between"
        component="section"
      >
        <Typography className={classes.productPrice} component="p">
          $ {formatPrice(productData.price)}
        </Typography>
        <SimpleSelect
          label="Qt."
          value={itemAmount}
          onChange={handleItemAmountChange}
          options={itemAmountOptions}
          className={classes.formControl}
          variant="outlined"
        />
        {/* <Typography variant="body1" component="p">
          {productData.amount}
        </Typography> */}
      </Grid>
      <Button
        onClick={() => handleAddToCart()}
        className={classes.addButton}
        variant="outlinde"
        color="secondary"
      >
        Add to cart
      </Button>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  shopState: state.shopReducer
});

const mapDispatchToProps = (dispatch) => ({
  setCartSubtotal: (newSubtotal) => dispatch(setCartSubtotalAction(newSubtotal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
