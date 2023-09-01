import { Box, Button, Hidden, List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

const Lendingpage = () => {
  const [category, setCategory] = React.useState('Crypto');
  const [isActive, setIsActive] = React.useState(false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  let navigate = useNavigate();
  useEffect(() => {
    let isCancelled = true;
    if (isCancelled) {
      navigate('/lend/crypto');
    }
    return () => {
      isCancelled = false;
    };
  }, []);

  return (
    <div
      style={{
        height: '100%'
      }}
    >
      <Navbar />
      <Hidden lgUp>
        <Button onClick={onClick} sx={{ border: '1px solid black', margin: 2 }}>
          {category}
          <KeyboardArrowDownIcon />
        </Button>
        <List
          sx={{
            display: `${isActive ? 'inline' : 'none'}`
          }}
        >
          <ListItem button color="primary" component={Link} to="/lend/crypto">
            <ListItemText
              onClick={event => {
                setCategory(event.target.innerText);
                setIsActive(false);
              }}
            >
              Crypto
            </ListItemText>
          </ListItem>
          <ListItem button color="primary" component={Link} to="/lend/mortgage">
            <ListItemText
              onClick={event => {
                setCategory(event.target.innerText);
                setIsActive(false);
              }}
            >
              Mortgage
            </ListItemText>
          </ListItem>
          <ListItem button color="primary" component={Link} to="/lend/electronics">
            <ListItemText
              onClick={event => {
                setCategory(event.target.innerText);
                setIsActive(false);
              }}
            >
              Electronics
            </ListItemText>
          </ListItem>
          <ListItem button color="primary" component={Link} to="/lend/automotive">
            <ListItemText
              //ref={dropdownRef}
              onClick={event => {
                setCategory(event.target.innerText);
                setIsActive(false);
              }}
            >
              Automotive
            </ListItemText>
          </ListItem>
          <ListItem button color="primary" component={Link} to="/lend/gardening">
            <ListItemText
              //ref={dropdownRef}
              onClick={event => {
                setCategory(event.target.innerText);
                setIsActive(false);
              }}
            >
              Gardening
            </ListItemText>
          </ListItem>
          <ListItem button color="primary" component={Link} to="/lend/CountryFinancialAid">
            <ListItemText
              //ref={dropdownRef}
              onClick={event => {
                setCategory(event.target.innerText);
                setIsActive(false);
              }}
            >
              Country Financial Aid
            </ListItemText>
          </ListItem>
          <ListItem button color="primary" component={Link} to="/lend/household">
            <ListItemText
              //ref={dropdownRef}
              onClick={event => {
                setCategory(event.target.innerText);
                setIsActive(false);
              }}
            >
              Household
            </ListItemText>
          </ListItem>
        </List>
      </Hidden>
      <div
        style={{
          display: 'flex'
          /*backgroundColor: 'yellow' ,overflow: 'scroll'*/
        }}
      >
        <Outlet style={{ /*backgroundColor: 'blue', */ margin: 0 }} />
      </div>
    </div>
  );
};

export default Lendingpage;
