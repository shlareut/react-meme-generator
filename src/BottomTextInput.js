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
          props.setBottomText(newBottomText);
        }}
      />
    </div>
  );
}
