import './App.css';
import React, { useState } from 'react';
import styles from './App.module.scss';
import DownloadButtonComponent from './DownloadButtonComponent';
import ImageDisplayComponent from './ImageDisplayComponent';
import SelectorComponent from './SelectorComponent';
import TextInputFieldComponent from './TextInputFieldComponent';

export default function App() {
  // Define top text state
  const initialTopText = '';
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
      {/* Insert image display component and pass props */}
      <ImageDisplayComponent
        testId="meme-image"
        alt="funny meme"
        // Manipulate URL with variables directly before passing it as a prop.
        // Leave a deliberate space before topText as the application would break with an empty string.
        url={`https://api.memegen.link/images/${meme}/ ${topText}/${bottomText}.png?height=250&width=250`}
      />
      <div className={styles.inputFields}>
        {/* Insert dropdown / selector component */}
        <SelectorComponent
          item={meme}
          setItem={setMeme}
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
      {/* Insert download button component and pass props */}
      <DownloadButtonComponent
        title="Download"
        // Manipulate URL and file name with variables directly before passing them as props.
        url={`https://api.memegen.link/images/${meme}/${topText}/${bottomText}.png?height=250&width=250`}
        fileName={`meme-${meme}${topText}${bottomText}.jpg`}
      />
    </div>
  );
}
