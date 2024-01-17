import './App.css';
import React, { useState } from 'react';
import styles from './App.module.scss';
import DownloadButtonComponent from './DownloadButtonComponent';
import ImageDisplayComponent from './ImageDisplayComponent';
import SelectorComponent from './SelectorComponent';
import TextInputFieldComponent from './TextInputFieldComponent';

export default function App() {
  // Define top text state
  const initialTopText = ' ';
  const [topText, setTopText] = useState(initialTopText);
  // Define bottom text state
  const initialBottomText = '';
  const [bottomText, setBottomText] = useState(initialBottomText);
  // Define default meme template and meme state
  const initialMeme = 'aag';
  const [meme, setMeme] = useState(initialMeme);
  return (
    // Wrap entire widget in div containers for easier styling
    <div className={styles.container}>
      {/* Insert image display component and ingest props */}
      <ImageDisplayComponent
        testId="meme-image"
        alt="funny meme"
        url={`https://api.memegen.link/images/${meme}/${topText}/${bottomText}.png?height=250&width=250`}
      />
      <div className={styles.inputFields}>
        {/* Insert dropdown / selector component */}
        <SelectorComponent
          value={meme}
          setValue={setMeme}
          type="memeTemplate"
          title="Meme template"
        />
        {/* Reuse text input component for both text input fields. */}
        <TextInputFieldComponent
          text={topText}
          setText={setTopText}
          type="topText"
          title="Top text"
        />
        <TextInputFieldComponent
          text={bottomText}
          setText={setBottomText}
          type="bottomText"
          title="Bottom text"
        />
      </div>
      {/* Insert download button component and ingest props */}
      <DownloadButtonComponent
        title="Download"
        url={`https://api.memegen.link/images/${meme}/${topText}/${bottomText}.png?height=250&width=250`}
        fileName={`meme-${meme}-${topText}-${bottomText}.jpg`}
      />
    </div>
  );
}
