import styles from './ImageDisplayComponent.module.scss';

export default function ImageDisplayComponent(props) {
  return (
    <img
      className={styles.image}
      data-test-id={props.testId}
      alt={props.alt}
      src={props.url}
    />
  );
}
