import styles from './ImageRender.module.scss';

export default function ImageRender(props) {
  return (
    <img
      className={styles.image}
      data-test-id="meme-image"
      alt="funny meme"
      src={`https://api.memegen.link/images/${props.meme}/${props.topText}/${props.bottomText}.png?height=250&width=250`}
    />
  );
}