// Common text input field component.
export default function TextInputComponent(props) {
  return (
    <div>
      <label htmlFor={props.type}>{props.title}</label>
      <input
        id={props.type}
        name={props.type}
        value={props.text}
        onChange={(event) => {
          const newText = event.currentTarget.value;
          props.setText(newText);
        }}
      />
    </div>
  );
}
