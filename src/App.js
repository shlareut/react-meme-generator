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
  // Define bottom text state
  const initialBottomText = '';
  const [bottomText, setBottomText] = useState(initialBottomText);
  // Define default meme template and meme state
  const initialMeme = 'aag';
  const [meme, setMeme] = useState(initialMeme);
  return (
    // Wrap entire widget in div containers for easier styling
    <div className={styles.container}>
      {/* Insert image render component and ingest props from input fields */}
      <ImageRender topText={topText} bottomText={bottomText} meme={meme} />
      <div className={styles.inputFields}>
        {/* Insert input field components and ingest props */}
        <MemeSelector meme={meme} setMeme={setMeme} />
        <TopTextInput topText={topText} setTopText={setTopText} />
        <BottomTextInput
          bottomText={bottomText}
          setBottomText={setBottomText}
        />
      </div>
      {/* Insert download button component and ingest props from input fields */}
      <DownloadButton topText={topText} bottomText={bottomText} meme={meme} />
    </div>
  );
}
