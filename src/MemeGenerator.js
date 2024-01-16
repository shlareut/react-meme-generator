import React from 'react';
import styles from './MemeGenerator.module.scss';

export default function MemeGenerator() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="https://api.memegen.link/images/doge/such_meme/very_wow.png?height=250&width=250" />
      </div>
      <div className={styles.inputfields}>
        <label for="template">Meme template</label>
        <select id="template" name="template" />
        <label for="toptext">Top text</label>
        <input type="text" id="toptext" name="toptext" />
        <label for="bottomtext">Bottom text</label>
        <input type="text" id="bottomtext" name="bottomtext" />
      </div>
      <div className={styles.button}>Download</div>
    </div>
  );
}
