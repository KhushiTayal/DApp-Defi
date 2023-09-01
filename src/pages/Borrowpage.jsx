import React from 'react';
import Navbar from '../components/Navbar';
import BorrowForm from '../components/BorrowForm';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';

const Borrowpage = () => {
  const [selectedTab, setSelectedTab] = React.useState('1');
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <Navbar />

      <TabContext value={selectedTab}>
        <TabList
          onChange={handleChange}
          variant={'fullWidth'}
          scrollButtons={false}
          sx={{ backgroundColor: '#403234' }}
        >
          <Tab
            label="Borrow Crypto"
            value="1"
            sx={{ fontWeight: 700, color: '#11131E33', '&.Mui-selected': { color: 'white' } }}
          />

        </TabList>
        <TabPanel value="1">
          <BorrowForm />
        </TabPanel>
      </TabContext>
    </>
  );
};

export default Borrowpage;
