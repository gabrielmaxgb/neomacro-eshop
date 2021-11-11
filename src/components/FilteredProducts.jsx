import { Grid } from '@material-ui/core';
import React from 'react'
import ProductCard from './ProductCard';

function FilteredProducts(props) {
  const {
    shopState
  } = props;
  // NOTE: O sort by entra antes de qualquer filter e map nessa função aqui

  if (shopState.filterParams.selectParam === '1-and-above') {
    return shopState.allProducts
      .sort((prevItem, nextItem) =>
        prevItem.rating < nextItem.rating ? -1 : prevItem.rating < nextItem.rating ? 1 : 0)
      .filter((productData) =>
      // productData.description.includes(shopState.mainSearch) &&
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
  }

  // if (shopState.filterParams.selectParam === 'no-sort') {
  //   return shopState.allProducts
  //     .map((productData) =>
  //       <Grid
  //         item
  //         container
  //         alignItems="center"
  //         justifyContent="center"
  //         spacing={0}
  //         xs={6}
  //         sm={4}
  //       >
  //         <ProductCard
  //           productData={productData}
  //         />
  //       </Grid>
  //     )
  // };

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

export default FilteredProducts;
