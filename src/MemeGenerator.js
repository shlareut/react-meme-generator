import React, { useState } from 'react';
import styles from './MemeGenerator.module.scss';
import templates from './memeTemplates.json';

export default function MemeGenerator() {
  const initialTopText = ' ';
  const [topText, setTopText] = useState(initialTopText);
  const initialBottomText = ' ';
  const [bottomText, setBottomText] = useState(initialBottomText);
  // Making the first image in memeTemplates.json the default image on page load
  const initialMeme = 'aag';
  const [meme, setMeme] = useState(initialMeme);
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        {/* POTENTIAL BREAKING POINT This image element should show a working image when the page first loads */}
        <img
          data-test-id="meme-image"
          src={`https://api.memegen.link/images/${meme}/${topText}/${bottomText}.png?height=250&width=250`}
        />
      </div>
      <div className={styles.inputfields}>
        <label for="template">Meme template</label>
        <select
          id="template"
          name="template"
          onChange={(event) => {
            const newMeme = event.currentTarget.value;
            setMeme(newMeme);
          }}
        >
          {/* Use static file memeTemplates.json to create a map of selector options directly from the json file */}
          {templates.map((item) => (
            <option value={`${item.id}`}>{item.id}</option>
          ))}
        </select>
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
    </div>
  );
}
