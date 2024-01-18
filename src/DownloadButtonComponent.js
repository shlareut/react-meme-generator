// Import file-saver package to get access to file system.
import { saveAs } from 'file-saver';
import styles from './DownloadButtonComponent.module.scss';

// Download button that triggers the file download with a given url.
export default function DownloadButtonComponent(props) {
  return (
    <button
      className={styles.button}
      onClick={() => {
        saveAs(props.url, props.fileName);
      }}
    >
      {props.title}
    </button>
  );
}
