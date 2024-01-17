import './App.css';
import React, { useState } from 'react';
import styles from './App.module.scss';
import BottomTextInput from './BottomTextInput';
import DownloadButton from './DownloadButton';
import ImageRender from './ImageRender';
import MemeSelector from './MemeSelector';
import TopTextInput from './TopTextInput';

export default function App() {
  const initialTopText = ' ';
  const [topText, setTopText] = useState(initialTopText);
  const initialBottomText = ' ';
  const [bottomText, setBottomText] = useState(initialBottomText);
  const initialMeme = 'aag';
  const [meme, setMeme] = useState(initialMeme);
  return (
    <div className={styles.container}>
      <ImageRender topText={topText} bottomText={bottomText} meme={meme} />
      <div className={styles.inputFields}>
        <MemeSelector meme={meme} setMeme={setMeme} />
        <TopTextInput topText={topText} setTopText={setTopText} />
        <BottomTextInput
          bottomText={bottomText}
          setBottomText={setBottomText}
        />
      </div>
      <DownloadButton topText={topText} bottomText={bottomText} meme={meme} />
    </div>
  );
}
