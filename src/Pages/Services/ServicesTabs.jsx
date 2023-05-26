import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ServicesTabs = () => {
    return (
        <div>
            <Tabs>
    <TabList className="border-2 mb-12 text-sm md:text-xl font-bold flex flex-wrap justify-between items-center px-8 py-3 rounded">
      <Tab>Cavity Protection</Tab>
      <Tab>Cosmetic Dentisty</Tab>
      <Tab>Oral Surgery</Tab>
    </TabList>

    <TabPanel>
      <h2></h2>
    </TabPanel>
    <TabPanel>
      <h2></h2>
    </TabPanel>
    <TabPanel>
      <h2></h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ServicesTabs;