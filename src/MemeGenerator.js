import React, { useState } from 'react';
import styles from './MemeGenerator.module.scss';

export default function MemeGenerator() {
  const initialTopText = ' ';
  const [topText, setTopText] = useState(initialTopText);
  const initialBottomText = ' ';
  const [bottomText, setBottomText] = useState(initialBottomText);
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src={`https://api.memegen.link/images/doge/${topText}/${bottomText}.png?height=250&width=250`}
        />
      </div>
      <div className={styles.inputfields}>
        <label for="template">Meme template</label>
        <select id="template" name="template" />
        <label for="toptext">Top text</label>
        <input
          type="text"
          id="toptext"
          name="toptext"
          value={topText}
          onChange={(event) => {
            const newTopText = event.currentTarget.value;
            setTopText(newTopText);
          }}
        />
        <label for="bottomtext">Bottom text</label>
        <input
          type="text"
          id="bottomtext"
          name="bottomtext"
          value={bottomText}
          onChange={(event) => {
            const newBottomText = event.currentTarget.value;
            setBottomText(newBottomText);
          }}
        />
      </div>
      <div className={styles.button}>Download</div>
      {/* Below is just for reference and test code */}
      <p>{topText}</p>
      <p>{bottomText}</p>
    </div>
  );
}
