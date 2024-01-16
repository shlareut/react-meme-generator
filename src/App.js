import './App.css';
import logo from './logo.svg';
import MemeGenerator from './MemeGenerator';

export default function App() {
  return (
    <>
      <MemeGenerator />
    </>
  );
}

// 1. Put HTML structure here
// 2. Separate out each selector/input as a component
// 3. Make sure the components are nested correctly
// e.g. <div className={styles.inputfields}> should come here, with just the component tag <Inputfield /> inside
// but broken down even more, so each input field is a component!
