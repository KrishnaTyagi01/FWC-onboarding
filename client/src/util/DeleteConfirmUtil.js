import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import axios from 'axios';
import { toast } from './ToastUtil';

export const PopUp = ({ onDelete, state = false, setState }) => {
  const [role, setRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const findRole = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get('/api/auth/validate-token').then();
      setRole(res.data.role);
    }
    catch (e) {
      toast("Error fetching your role. Please refresh");
    }
    finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    findRole();
  }, []);

  return (
    <>
      <Modal
        title="Are you sure you want to delete this employee?"

        visible={state}
        confirmLoading={isLoading}
        onOk={() => {
          onDelete(true)
          setState(false);
        }}
        okButtonProps={{
          disabled: role !== 'admin'
        }}
        onCancel={() => {
          setState(false)
        }}
      >
        {
          role === '' && <p>Loading your role. Please wait ....</p>
        }
        {
          role === 'admin' && <p>Delete this employee?</p>
        }
        {
          role === 'sub-admin' && <p>You don't have privilages to delete any employees</p>
        }
      </Modal>
    </>
  );
};
