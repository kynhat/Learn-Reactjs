import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import productApi from 'Api/productApi';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';

const useStyles = makeStyles(theme => ({
  root : {},
  left: {width: '250px'},
  right: {
    flex: '1 1 0'
  }

}))

ListPage.prototypes = {

};

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    _page: 1 , 
    _limit: 10
  });

  useEffect(() => {
    (async () => {
      
      try {
        const  { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    })();
  }, [filters]);
    return (
        <Box>
          <Container>
            <Grid container spacing={1}>
              <Grid item className={classes.left}>
                <Paper elevation={0}>
                  left colum
                </Paper>
              </Grid>
              <Grid item className={classes.right}>
                <Paper elevation={0}>
                  {loading ? <ProductSkeletonList/> : <ProductList data ={productList}/>
                  }

                <Pagination
                  color="primary"
                  count={5}
                  page={2}
                >
                </Pagination>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
    );
}

export default ListPage ;
