// Import file-saver package to get access to file system.
import { saveAs } from 'file-saver';
import styles from './DownloadButton.module.scss';

// Download button that triggers the download of the generated image.
export default function DownloadButton(props) {
  const downloadImage = () => {
    // Meme API allows direct URL manipulation which simplifies the generation process. Use props for naming the File.
    saveAs(
      `https://api.memegen.link/images/${props.meme}/${props.topText}/${props.bottomText}.png?height=250&width=250`,
      `meme-${props.meme}-${props.topText}-${props.bottomText}.jpg`,
    );
  };
  return (
    // Trigger image download by clicking the button.
    <button
      className={styles.button}
      onClick={() => {
        downloadImage();
      }}
    >
      Download
    </button>
  );
}
