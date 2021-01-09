import Promise from 'bluebird';
import JsZip from 'jszip';
import FileSaver from 'file-saver';
const download = (url) => {
  return fetch(url).then((resp) => resp.blob());
};

const downloadByGroup = (urls, files_per_group = 5) => {
  return Promise.map(
    urls,
    async (url) => {
      return {
        documentedDate: `${url.documentedDate.month}-${url.documentedDate.year}`,
        documentUser: url.user,
        documentType: url.documentType,
        fileBlob: await download(url.downloadUrl),
      };
    },
    { concurrency: files_per_group }
  );
};

const exportZip = (blobs) => {
  const zip = JsZip();
  blobs.forEach((blob, i) => {
    const { documentedDate, documentUser, documentType, fileBlob } = blob;
    const empName = documentUser.name.split(' ').join('_');
    zip.file(
      `${documentUser.empNo}_${empName}_${documentType}_${documentedDate}.pdf`,
      fileBlob
    );
  });
  zip.generateAsync({ type: 'blob' }).then((zipFile) => {
    const currentDate = new Date().getTime();
    const fileName = `documents-${currentDate}.zip`;
    return FileSaver.saveAs(zipFile, fileName);
  });
};

export const downloadAndZip = (urls) => {
  return downloadByGroup(urls, 10).then(exportZip);
};
