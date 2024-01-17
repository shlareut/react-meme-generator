// Import file-saver package to get access to file system.
import { saveAs } from 'file-saver';
import styles from './DownloadButtonComponent.module.scss';

// Download button that triggers the download of the file.
export default function DownloadButtonComponent(props) {
  const downloadFile = () => {
    // Meme API allows direct URL manipulation which simplifies the generation process. Use props for naming the File.
    saveAs(
      `https://api.memegen.link/images/${props.meme}/${props.topText}/${props.bottomText}.png?height=250&width=250`,
      `meme-${props.meme}-${props.topText}-${props.bottomText}.jpg`,
    );
  };
  return (
    // Trigger file download by clicking the button.
    <button
      className={styles.button}
      onClick={() => {
        downloadFile();
      }}
    >
      Download
    </button>
  );
}
