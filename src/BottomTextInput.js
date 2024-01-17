// Input field controlling the bottom text of the meme.
export default function BottomTextInput(props) {
  return (
    <div>
      <label htmlFor="bottomtext">Bottom text</label>
      <input
        id="bottomtext"
        name="bottomtext"
        value={props.bottomText}
        onChange={(event) => {
          const newBottomText = event.currentTarget.value;
          props.handleBottomText(newBottomText);
        }}
      />
    </div>
  );
}
