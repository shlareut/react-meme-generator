import styles from './ImageDisplayComponent.module.scss';

export default function ImageDisplayComponent(props) {
  return (
    <img
      className={styles.image}
      data-test-id="meme-image"
      alt="funny meme"
      // Meme API allows direct URL maipulation which simplifies the image generation process.
      src={`https://api.memegen.link/images/${props.meme}/${props.topText}/${props.bottomText}.png?height=250&width=250`}
    />
  );
}
