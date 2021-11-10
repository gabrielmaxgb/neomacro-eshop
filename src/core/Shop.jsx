import React, { useEffect, useState } from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
  // changeTest as changeTestAction,
  filterTypeSelect as filterTypeSelectAction,
  getAllProducts as getAllProductsAction
} from '../app/store/actions/shopActions';
import SimpleSelect from '../components/SimpleSelect';
import Header from './Header';
import Genericloading from '../components/GenericLoading';
import ProductCard from '../components/ProductCard';
// import { LocalConvenienceStoreOutlined } from '@material-ui/icons';


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
    filterTypeSelect,
    getAllProducts
  } = props;
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
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

  console.log('aqui ó besta');
  console.log(shopState);

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
    filterTypeSelect(event.target.value);
  };

  const renderAllProducts = () => {

    // NOTE: O sort by entra antes de qualquer filter e map nessa função aqui

    if (shopState.filterParams.selectParam === 'no-filter') {
      return shopState.allProducts
        .map((productData) =>
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            spacing={0}
            xs={6}
            sm={4}
          >
            <ProductCard
              productData={productData}
            />
          </Grid>
        )
    };

    // NOTE: Apply filters here
    return shopState.mainSearch ? (
      shopState.allProducts
        .filter((productData) =>
          productData.description.includes(shopState.mainSearch) &&
          (productData.price >= shopState.filterParams.minValue &&
            productData.price <= shopState.filterParams.maxValue))
        .map((productData) =>
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            spacing={0}
            xs={6}
            sm={4}
          >
            <ProductCard
              productData={productData}
            />
          </Grid>
        )
    ) : (
      shopState.filterParams.minValue !== undefined &&
        shopState.filterParams.maxValue !== undefined ? (
        shopState.allProducts
          .filter((productData) =>
          (productData.price >= shopState.filterParams.minValue &&
            productData.price <= shopState.filterParams.maxValue))
          .map((productData) =>
            <Grid
              item
              container
              alignItems="center"
              justifyContent="center"
              spacing={0}
              xs={6}
              sm={4}
            >
              <ProductCard
                productData={productData}
              />
            </Grid>
          )
      ) : (
        shopState.allProducts
          .map((productData) =>
            <Grid
              item
              container
              alignItems="center"
              justifyContent="center"
              spacing={0}
              xs={6}
              sm={4}
            >
              <ProductCard
                productData={productData}
              />
            </Grid>
          )
      )
    );
  }

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
        </Grid>
        <Grid
          container
          item
          // alignItems="center"
          justifyContent="center"
          xs={12}
          spacing={2}
          style={{ maxWidth: '900px' }}
        >
          {
            shopState.allProductsLoading ? (
              <Genericloading />
            ) : (
              renderAllProducts()
            )
          }
        </Grid>
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  shopState: state.shopReducer
});

const mapDispatchToProps = (dispatch) => ({
  filterTypeSelect: (filterType) => dispatch(filterTypeSelectAction(filterType)),
  getAllProducts: () => dispatch(getAllProductsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);