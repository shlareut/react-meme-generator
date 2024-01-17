// Import file-saver package to get access to file system.
import { saveAs } from 'file-saver';
import styles from './DownloadButtonComponent.module.scss';

// Download button that triggers the download of the file.
export default function DownloadButtonComponent(props) {
  return (
    // Trigger file download by clicking the button.
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
