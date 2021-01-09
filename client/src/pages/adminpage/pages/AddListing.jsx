import React, { useContext } from 'react';
import Table from '../components/AddListing/Table';
import Upper from '../components/AddListing/Upper';
import EditJob from '../components/AddListing/EditJob';
import EditJobForm from '../components/AddListing/EditJobForm';
import { ListingContext } from '../context/ListingContext';
const AddListing = () => {
  let data = useContext(ListingContext);

  return (
    // <Table />
    <>
      <Upper data={data} />
      {/* <Table/> */}
      {/* <EditJob/> */}
      {/* <EditJobForm/> */}
    </>
  );
};

export default AddListing;
