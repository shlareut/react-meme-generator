import { saveAs } from 'file-saver';
import styles from './DownloadButton.module.scss';

export default function DownloadButton(props) {
  const downloadImage = () => {
    saveAs(
      `https://api.memegen.link/images/${props.meme}/${props.topText}/${props.bottomText}.png?height=250&width=250`,
      `meme-${props.meme}-${props.topText}-${props.bottomText}.jpg`,
    );
  };
  return (
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
