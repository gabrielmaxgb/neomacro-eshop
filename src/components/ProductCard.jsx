import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { truncateString } from '../utils';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    border: '1px solid #BCBDBC',
    borderRadius: '4px',
    maxWidth: '288px',
    padding: '.4rem',
    // minHeight: '484px',
  },
  addButton: {
    minWidth: '85%',
    margin: '.5rem 0',
    textTransform: 'none',
    color: theme.palette.primary
  }
}));

const ProductCard = (props) => {
  const {
    productData
  } = props;
  const classes = useStyles();

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
        xs={12}
        component="section"
      >
        <span>image</span>
        <Typography variant="body1" component="p" style={{ textAlign: 'start' }}>
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
          // mb={3}
          style={{
            borderColor: 'transparent',
            paddingLeft: 0
          }}
        >
          {/* <Typography component="legend">Read only</Typography> */}
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
        <Typography variant="body1" component="p">
          $ {productData.price}
        </Typography>
        <Typography variant="body1" component="p">
          {productData.amount}
        </Typography>
      </Grid>
      <Button className={classes.addButton} variant="outlinde" color="secondary">
        Add to cart
      </Button>
    </Grid>
  );
}

export default ProductCard;
