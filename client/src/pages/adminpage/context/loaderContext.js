import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { toast } from '../../../util/ToastUtil';

export const LoadingContext = createContext();

export const LoadingContextProvider = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        open,
        setOpen,
      }}>
      {props.children}
    </LoadingContext.Provider>
  );
};
