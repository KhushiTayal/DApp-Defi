import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loginpage from './Loginpage';

const useStyles = makeStyles(theme => ({
  WaitingButton: {
    '&:hover': {
      backgroundColor: 'white'
    }
  },
  HomeBox: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    '& Button': {
      [theme.breakpoints.down('sm')]: {
        marginBottom: 20
      }
    }
  }
}));
const Homepage = () => {
  const state = useSelector(state => state.connectWallet.walletConnected);
  console.log('state is', state);
  const classes = useStyles();
  let navigate = useNavigate();
  return (
    <div>
      {state ? (
        <Box
          sx={{
            background: '#403234',
            width: '100%',
            height: '100vh'
          }}
        >
          <Navbar />
          <Container
            maxWidth="lg"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginTop: 20,
              padding: 1
            }}
          >
            <Typography variant="h2" align="center" gutterBottom color="common.white">
            Decentralized Finance:  Lending and Borrowing App
            </Typography>
            <Typography variant="h6" align="center" gutterBottom color="gray">
              Handle borrowing, lending, interest rates, collateral, and repayments
            </Typography>
            <Box
              mt={3}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className={classes.HomeBox}
            >
              <Button
                variant="contained"
                className={classes.WaitingButton}
                sx={{ color: 'primary.main', backgroundColor: 'white', marginRight: 2 }}
                onClick={() => navigate('/borrow')}
              >
                Borrow Ethereum
              </Button>
              <Button sx={{color: 'primary.main', backgroundColor: 'white', marginRight: 2 }} onClick={() => navigate('/lend/crypto')}>
                Invest Ethereum
              </Button>
            </Box>
          </Container>
        </Box>
      ) : (
        <Loginpage />
      )}
    </div>
  );
};

export default Homepage;
