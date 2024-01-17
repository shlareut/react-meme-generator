// Input field controlling the top text of the meme.
export default function TopTextInput(props) {
  return (
    <div>
      <label htmlFor="toptext">Top text</label>
      <input
        id="toptext"
        name="toptext"
        value={props.topText}
        onChange={(event) => {
          const newTopText = event.currentTarget.value;
          props.setTopText(newTopText);
        }}
      />
    </div>
  );
}
