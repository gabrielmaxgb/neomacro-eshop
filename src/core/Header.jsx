import { Grid, InputBase, makeStyles, IconButton, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Headersfilter from '../components/HeadersFilter'
import { ReactComponent as Logo } from '../icons/Logo.svg';
import SearchIcon from '@material-ui/icons/Search';
import SimpleSelect from '../components/SimpleSelect';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { SubtotalCartButton } from './style';
import Badge from '@material-ui/core/Badge';
// import { withStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem 5rem',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#EDEDF0',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
      height: 32
    },
  },
  simpleSelect: {
    backgroundColor: 'transparent',
    margin: theme.spacing(1),
    minWidth: props => props.xs ? 106 : 120,
    textAlign: 'start',
    boxSizing: 'border-box',
    borderRadius: '4px',
    // padding: '.6rem',

    "& .MuiOutlinedInput-input": {
      // padding: '.6rem',
    }
  }
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

function Header(props) {
  const {
    shopState
  } = props;
  const [language, setLanguage] = useState('eng-US');
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const classes = useStyles({ xs });

  return (
    <Grid
      className={classes.root}
      container
      item
      alignItems="center"
      xs={12}
    >
      <Grid
        item
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item container justifyContent="flex-start" xs={4}>
          <Logo />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          xs={10}
          sm={4}
        >
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="flex-end"
          xs={4}
        >
          <SimpleSelect
            variant="standard"
            // label="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            options={[{ label: 'English', value: 'eng-US' }]}
            className={classes.simpleSelect}
          />
          <SubtotalCartButton
            style={{
              marginLeft: '2.5rem'
            }}
          >
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={shopState.cartItemsAmount} color="secondary">
                <ShoppingCartOutlined style={{ color: "#F9F9F9" }} />
              </StyledBadge>
            </IconButton>
            <Typography
              variant="body2"
              component="span"
            >
              Sub total: {shopState.cartItemsSubtotal} €
            </Typography>
          </SubtotalCartButton>
        </Grid>
      </Grid>
      <Headersfilter />
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  shopState: state.shopReducer,
});

export default connect(mapStateToProps, null)(Header);