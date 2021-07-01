import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root : {},
  left: {width: '250px'},
  right: {
    flex: '1 1 auto'
  }

}))

ListPage.prototypes = {

};

function ListPage(props) {
  const classes = useStyles();

    return (
        <Box>
          <Container>
            <Grid container spacing={1}>
              <Grid item className={classes.left}>left colum</Grid>
              <Grid item className={classes.right}>right colum</Grid>
            </Grid>
          </Container>
        </Box>
    );
}

export default ListPage ;
