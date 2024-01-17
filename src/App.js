import './App.css';
import React, { useState } from 'react';
import styles from './App.module.scss';
import BottomTextInput from './BottomTextInput';
import DownloadButton from './DownloadButton';
import ImageRender from './ImageRender';
import MemeSelector from './MemeSelector';
import TopTextInput from './TopTextInput';

export default function App() {
  // Define top text state
  const initialTopText = ' ';
  const [topText, setTopText] = useState(initialTopText);
  // Lifting top text state one level up
  const handleTopText = (newTopText) => {
    setTopText(newTopText);
  };
  // Define bottom text state
  const initialBottomText = '';
  const [bottomText, setBottomText] = useState(initialBottomText);
  // Lifting bottom text state one level up
  const handleBottomText = (newBottomText) => {
    setBottomText(newBottomText);
  };
  // Define default meme template and meme state
  // Lifting meme state one level up
  const initialMeme = 'aag';
  const [meme, setMeme] = useState(initialMeme);
  const handleMeme = (newMeme) => {
    setMeme(newMeme);
  };
  return (
    // Wrap entire widget in div containers for easier styling
    <div className={styles.container}>
      {/* Insert image render component and ingest props from input fields */}
      <ImageRender topText={topText} bottomText={bottomText} meme={meme} />
      <div className={styles.inputFields}>
        {/* Insert input field components and ingest props */}
        <MemeSelector meme={meme} handleMeme={handleMeme} />
        <TopTextInput topText={topText} handleTopText={handleTopText} />
        <BottomTextInput
          bottomText={bottomText}
          handleBottomText={handleBottomText}
        />
      </div>
      {/* Insert download button component and ingest props from input fields */}
      <DownloadButton topText={topText} bottomText={bottomText} meme={meme} />
    </div>
  );
}
