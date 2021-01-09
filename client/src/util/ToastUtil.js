import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css'; // optional styles

export const toast = (msg) => {
  toaster.notify(`${msg}`, {
    duration: 2000,
    position: 'top-right',
  });
};
