import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { config } from '../../util/RequestUtil';

const FormPageComponent = ({ children }) => {
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  useEffect(() => {
    const fetchValidity = async () => {
      const result = await axios.get(
        '/api/employee?select=isFormComplete',
        config
      );
      if (result.data.data.isFormComplete) setIsFormDisabled(true);
    };
    fetchValidity();
  }, []);
  return (
    <Fragment>
      <div className='container'>
        <div className='order-1 order-lg-2 d-flex flex-column right justify-content-start mt-5'>
          <fieldset disabled={isFormDisabled ? 'disabled' : undefined}>
            {children}
          </fieldset>
        </div>
      </div>
    </Fragment>
  );
};

export default FormPageComponent;
