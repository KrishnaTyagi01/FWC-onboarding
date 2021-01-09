import React, { useEffect, useMemo, useState } from 'react';
import DataGrid from 'react-data-grid';

import 'react-data-grid/dist/react-data-grid.css';
import { OPLoader } from '../../util/LoaderUtil';
import { toast } from '../../util/ToastUtil';
import { uploadDocument } from '../../util/UploadFile';
import { Button } from 'antd';

/**
 *
 * @param {{defaultData: Object,  columnNames: Array<String>, buttonName: String, onSubmit: Function}} param0
 * Creates a component to show a button and dynamic textfields based on the given data
 *
 */
function ComplexComponent({
  defaultData = [],
  columnNames = [],
  onSubmit = (_) => { },
  buttonName = 'Invalid Button Name',
  rowLimit = -1
}) {
  // Set the table grid values
  const [data, setData] = useState(defaultData);
  // Column Names for the table
  const [columns, setColumns] = useState([]);
  // Show loading indicator
  const [isUploading, setIsUploading] = useState(false);
  /**
   *
   * @param {Array<Object>} incomingData
   *
   * Takes in an array of objects and make sets it as the state
   * Also calls on onSubmit prop, to make API requests and save tha state of the application
   *
   */
  const saveData = (incomingData) => {
    onSubmit(incomingData);
    setData([...incomingData]);
  };

  /**
   *
   * @param {Number} index
   *
   * Takes in the index of the element to be deleted
   * Saves the state after deletion
   *
   */
  const onDelete = (index) => {
    if (data[index].deletable === true || data[index].deletable === undefined) {
      const tempData = data.filter((d, i) => i !== index);
      saveData([...tempData]);
    } else {
      toast('Cannot delete this row');
    }
  };

  /**
   *
   * @param {Number} index - Index of the current row
   * @param {String} key - Key of the current column
   * @param {File} file - File data to be uploaded
   *
   */
  const onUploadFile = async (index, key, file) => {
    setIsUploading(true);
    const fileName = await uploadDocument(file);
    setIsUploading(false);
    data[index][key] = fileName;
    saveData([...data]);
  };

  const onDataChanged = (index, key, incomingData) => {
    data[index][key] = incomingData;
    saveData([...data]);
  };

  useEffect(() => {
    setData([...defaultData]);
    const tempCol = [];
    const reservedTypes = ['file', 'date'];
    if (data.length !== 0) {
      columnNames.forEach((column) => {
        if (reservedTypes.includes(column.type)) return;
        tempCol.push({
          key: column.key,
          name: column.label,
          editable: true,
          width: column.width,
          resizable: true,
        });
      });
    }
    setColumns([...tempCol]);
    // eslint-disable-next-line
  }, [defaultData]);

  useMemo(() => {
    const tempCols = [...columns];
    const neededFileColNames = columnNames
      .filter((col) => col.type === 'file')
      .map((col) => col.label);
    const neededDateColNames = columnNames
      .filter((col) => col.type === 'date')
      .map((col) => col.label);
    const colNames = tempCols.map((col) => col.name);
    const actionCols = tempCols.filter((col) => col.name === 'Actions');
    if (actionCols.length > 0) {
      tempCols.pop();
    }
    for (const fileLabel of neededFileColNames) {
      if (colNames.includes(fileLabel)) tempCols.pop();
    }

    for (const fileLabel of neededDateColNames) {
      if (colNames.includes(fileLabel)) tempCols.pop();
    }
    columnNames.forEach((col) => {
      if (col.type === 'file') {
        tempCols.push({
          resizable: true,
          name: col.label,
          key: col.key,
          formatter: (formatter) => {
            return (
              <label
                className='btn btn-default'
                style={{
                  height: 30,
                  textDecoration: 'underline',
                }}>
                {typeof data[formatter.rowIdx][col.key] === 'string' &&
                  data[formatter.rowIdx][col.key].split('/').length > 2
                  ? data[formatter.rowIdx][col.key].split('/')[2]
                  : 'Upload File'}
                <input
                  hidden
                  style={{ width: 50 }}
                  type='file'
                  accept='application/pdf'
                  id='file'
                  onChange={(e) => {
                    const file = e.target.files[0];
                    onUploadFile(formatter.rowIdx, col.key, file);
                  }}
                />
              </label>
            );
          },
        });
      }
    });
    columnNames.forEach((col) => {
      if (col.type === 'date') {
        tempCols.push({
          resizable: true,
          name: col.label,
          key: col.key,
          formatter: (formatter) => {
            let value;
            if (data[formatter.rowIdx] !== undefined)
              value = data[formatter.rowIdx][col.key];
            return (
              <input
                type='date'
                id='file'
                value={value}
                onChange={(e) => {
                  const date = e.target.value;
                  onDataChanged(formatter.rowIdx, col.key, date);
                }}
              />
            );
          },
        });
      }
    });

    tempCols.push({
      name: 'Actions',
      key: '$delete',
      width: 100,
      getRowMetaData: (row) => row,
      formatter: (formatter) => (
        <span>
          <div
            className='btn'
            style={{ textDecoration: 'underline' }}
            onClick={() => onDelete(formatter.rowIdx)}>
            Delete
          </div>
        </span>
      ),
    });
    setColumns([...tempCols]);
    // eslint-disable-next-line
  }, [data, isUploading]);

  return (
    <div className='col'>
      {/* Conditional Loading Indicator */}
      <OPLoader isLoading={isUploading} />
      {/* "Add New" button */}
      <div className='float-right'>
        <Button type='link'
          onClick={() => {
            if (rowLimit !== -1 && data.length >= rowLimit) {
              toast('Row limit reached')
              return;
            }
            const placeholderData = {};
            for (const obj of columnNames) {
              placeholderData[obj.key] = `-`;
            }
            const tempData = [...data, { ...placeholderData, deletable: true }];
            saveData(tempData);

          }}>
          + &nbsp;{buttonName}
        </Button>
      </div>
      <br />
      <br />
      {/* Data Grid  */}
      <DataGrid
        className='data-grid'
        enableCellSelect={true}
        onRowsUpdate={({ fromRow, toRow, updated }) => {
          const tempRows = [...data];
          for (let i = fromRow; i <= toRow; i++) {
            tempRows[i] = { ...tempRows[i], ...updated };
          }
          saveData([...tempRows]);
        }}
        columns={columns}
        rows={data}
        rowsCount={data.length}
        enableRowSelect={true}
        rowSelection={{
          selectBy: {
            showCheckbox: true,
            enableShiftSelect: true,
            indexes: [data.length - 1],
          },
        }}
      />
    </div>
  );
}

export default ComplexComponent;
