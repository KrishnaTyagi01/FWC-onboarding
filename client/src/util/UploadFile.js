import axios from 'axios';
import { toast } from './ToastUtil.js';
import { config } from './RequestUtil';

/**
 *
 * @param {File} file
 */
export const uploadDocument = async (
  file,
  {
    uploadUrl = '/api/file/upload-url',
    confirmationUrl = '/api/employee',
    fileType = 'doc',np,
    fileExtension = 'pdf',
  } = {}
) => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await axios.post(
    uploadUrl,
    {
      fileName: file.name,
      fileType,
      fileExtension: file.type.split('/')[1],
    },
    config
  );
  const { fileKey, url } = res.data;
  const res2 = await axios.put(url, formData);
  if (res2.status === 200 && confirmationUrl !== null) {
    await axios.post(
      confirmationUrl,
      {
        postParams: {
          name: fileKey,
        },
      },
      config
    );
    toast(`File uploaded successfully`);
    return fileKey;
  }
  if (fileKey) return fileKey;
  return null;
};

export const uploadFinancialDocument = async (
  file,
  fileName,
  {
    uploadUrl = '/api/file/upload-url',
    confirmationUrl = '/api/employee',
    fileType = 'paySlip',
    date,
    userId,
  } = {}
) => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await axios.post(
    uploadUrl,
    JSON.stringify({
      fileName: file.name,
      userId,
      date: fileName,
      fileType,
      fileExtension: 'pdf',
    }),
    config
  );
  const { fileKey, url } = res.data;
  const res2 = await axios.put(url, formData);
  if (res2.status === 200) {
    await axios.put(
      confirmationUrl,
      JSON.stringify({
        userId,
        financialDocument: {
          documentType: fileType,
          fileKey,
          documentedDate: {
            month: date.month,
            year: date.year,
          },
        },
      }),
      config
    );
    toast(`File uploaded successfully`);
    return true;
  }
  return null;
};
